"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { addPoll, updatePoll } from "@/store/slice/features/polls";
import { PollProps, FormStateProps, VotesMap, PollModalProps } from "@/interface";
import { AnswerOptions, FormActions, FormHeader, PollDetails, PollSettings } from "./form-inputs";


const EMPTY_FORM: FormStateProps = {
  title: "",
  description: "",
  options: ["", ""],
  votes: {},
  status: "Pending",
  privacy: "Public",
  createdAt: "",
  startAt: null,
  endAt: null,
};

export default function PollModal({ isOpen, closeModal, mode = "create", initial = null }: PollModalProps) {

  const dispatch = useDispatch();
  const [form, setForm] = useState<FormStateProps>(EMPTY_FORM);
  const [errors, setErrors] = useState<{ title?: string; options?: string }>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Initialize form (create vs edit)
  useEffect(() => {
    if (!isOpen) return;

    if (mode === "edit" && initial) {
      const votes =
        initial.votes && !Array.isArray(initial.votes)
          ? (initial.votes as VotesMap)
          : {};

      setForm({
        id: initial.id,
        title: initial.title ?? "",
        description: initial.description ?? "",
        options:
          Array.isArray(initial.options) && initial.options.length
            ? initial.options.map((o) => (typeof o === "string" ? o : String(o)))
            : ["", ""],
        votes,
        status: initial.status ?? "Pending",
        privacy: initial.privacy ?? "Public",
        createdAt: initial.createdAt ?? new Date().toISOString(),
        startAt: initial.startAt ?? null,
        endAt: initial.endAt ?? null,
      });
    } else {
      setForm({ ...EMPTY_FORM });
    }

    setErrors({});
  }, [isOpen, mode, initial]);

  // Generic typed updater
  const updateField = useCallback(
    <K extends keyof FormStateProps>(field: K, value: FormStateProps[K]) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  // Validate before submit
  const validate = (): boolean => {
    const e: { title?: string; options?: string } = {};
    if (!form.title || !form.title.trim()) e.title = "Title is required";
    if (form.options.some((o) => !o || !o.trim()))
      e.options = "All options must be filled";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Submit handler
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const url = "http://localhost:4000/polls";

      // Build payload for create or update
      const trimmedOptions = form.options.map((o) => o.trim());

      const initialVotes: VotesMap =
        mode === "create"
          ? trimmedOptions.reduce<VotesMap>((acc, opt) => {
            acc[opt] = 0;
            return acc;
          }, {})
          : form.votes ?? {};

      const payload: Partial<PollProps> = {
        title: form.title.trim(),
        description: form.description?.trim(),
        options: trimmedOptions,
        votes: initialVotes,
        status: form.status,
        privacy: form.privacy,
        createdAt: form.createdAt ?? new Date().toISOString(),
        startAt: form.startAt ?? undefined,
        endAt: form.endAt ?? undefined,
      };

      let response: AxiosResponse<PollProps>;

      if (mode === "create") {
        response = await axios.post<PollProps>(url, payload);
        dispatch(addPoll(response.data));
      } else {
        const id = form.id;
        response = await axios.put<PollProps>(`${url}/${id}`, {
          ...payload,
          id,
          createdAt: form.createdAt,
        });
        dispatch(updatePoll(response.data));
      }

      closeModal();
    } catch (error) {
      console.error("Poll save failed:", error);
      alert("Failed to save poll. Check the console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="w-full h-full flex justify-center overflow-auto">
            <div className="flex justify-center h-full w-full ">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative w-full max-w-3xl"
              >
               

                <main className="flex justify-center py-10">
                  <form onSubmit={handleSubmit} className="flex w-full py-4 sm:py-6 sm:px-8 px-4 bg-white rounded-2xl flex-col">
                    {/* Header */}
                    <FormHeader mode={mode} closeModal={closeModal}/>

                    {/* Poll Details */}
                    <PollDetails form={form} updateField={updateField} errors={errors} />

                    {/* Answer Options */}
                    <AnswerOptions form={form} errors={errors} setForm={setForm} />


                    {/* Settings */}
                    <PollSettings form={form} updateField={updateField} />
                    
                    {/* Actions */}
                    <FormActions submitting={submitting} closeModal={closeModal} mode={mode} />

                  </form>
                </main>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

