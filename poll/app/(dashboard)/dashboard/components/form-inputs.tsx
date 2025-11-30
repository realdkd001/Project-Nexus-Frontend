import React, { useCallback } from 'react'
import { FormStateProps, UpdateFieldFn, AnswerOptionsProps } from '@/interface'
import { X, Plus, Trash2 } from "lucide-react";


export function FormHeader({ mode, closeModal }: { mode: string, closeModal: () => void }) {
  return (
    <header className=" flex items-baseline pb-4 justify-between" >
      <div className="flex flex-col gap-y-1">
        <h1 className="text-2xl font-black text-[#111418]">
          {mode === "create" ? "Create a New Poll" : "Edit Poll"} </h1>
        <p className="text-xs text-[#637388]"> {mode === "create" ? "Fill out the details to create a poll." : "Update your poll details."}
        </p>
      </div>

      {/* Close Button */}
      <button onClick={closeModal} className="text-gray-600" > <X size={22} />
      </button>
    </header>
  )
}


export function PollDetails({ errors, form, updateField }:
  {
    form: FormStateProps,
    errors: { title?: string; options?: string },
    updateField: UpdateFieldFn
  }) {
  return (
    <section className="p-4 border rounded-lg bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-3">Poll Details</h3>

      <label className="flex flex-col gap-2 mb-3">
        <span className="text-sm font-medium">Poll Title</span>
        <input
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="What is your poll question?"
          className="h-12 rounded-lg border p-3 bg-white dark:bg-gray-700"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title}</span>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Poll Description</span>
        <textarea
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
          placeholder="Provide a brief description for your poll."
          className="min-h-20 rounded-lg border p-3 bg-white dark:bg-gray-700"
        />
      </label>
    </section>

  )
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({ form, errors, setForm }) => {

  const setOption = useCallback((index: number, value: string) => {
    setForm((prev) => {
      const options = [...prev.options];
      options[index] = value;
      return { ...prev, options };
    });
  }, [setForm]);

  const addOption = useCallback(() => {
    setForm((prev) => ({ ...prev, options: [...prev.options, ""] }));
  }, [setForm]);

  const removeOption = useCallback((index: number) => {
    setForm((prev) => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== index),
    }));
  }, [setForm]);

  return (
    <section className="p-4 border rounded-lg bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-3">Answer Options</h3>

      <div className="flex flex-col gap-3">
        {form.options.map((opt, i) => (
          <div key={i} className="flex items-center gap-3">
            <input
              value={opt}
              onChange={(e) => setOption(i, e.target.value)}
              placeholder={`Option ${i + 1}`}
              className="h-12 flex-1 rounded-lg border p-3 bg-white dark:bg-gray-700"
            />
            {form.options.length > 2 && (
              <button
                type="button"
                onClick={() => removeOption(i)}
                className="rounded-lg h-10 w-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label={`Remove option ${i + 1}`}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        {errors.options && (
          <span className="text-red-500 text-sm">{errors.options}</span>
        )}

        <button
          type="button"
          onClick={addOption}
          className="flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-dashed text-primary hover:bg-primary/10 font-bold"
        >
          <Plus size={16} />
          Add another option
        </button>
      </div>
    </section>
  );
};

export function PollSettings({ form, updateField }:
  {
    form: FormStateProps,
    updateField: UpdateFieldFn
  }) {
  return (
    <section className="p-4 border rounded-lg bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-3">Settings</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Start Date/Time</span>
          <input
            type="datetime-local"
            value={form.startAt ?? ""}
            onChange={(e) =>
              updateField("startAt", e.target.value ? e.target.value : null)
            }
            className="h-12 rounded-lg border p-3 bg-white dark:bg-gray-700"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">End Date/Time</span>
          <input
            type="datetime-local"
            value={form.endAt ?? ""}
            onChange={(e) =>
              updateField("endAt", e.target.value ? e.target.value : null)
            }
            className="h-12 rounded-lg border p-3 bg-white dark:bg-gray-700"
          />
        </label>
      </div>

      <div className="flex flex-col gap-4">
        {/* Privacy */}
        <Privacy form={form} updateField={updateField} />

        {/* Status select */}
        <StatusSelect form={form} updateField={updateField} />
      </div>
    </section>

  )
}

export function FormActions({ mode, closeModal, submitting }:
  {
    mode: string
    closeModal: () => void,
    submitting: boolean
  }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2 pb-2">
      <button
        type="button"
        onClick={closeModal}
        className="h-12 min-w-[120px] w-full sm:w-auto rounded-lg bg-gray-200 dark:bg-gray-700 px-6 font-bold"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={submitting}
        className="h-12 min-w-40 w-full sm:w-auto rounded-lg bg-primary text-white px-6 font-bold"
      >
        {submitting ? "Saving..." : mode === "create" ? "Create Poll" : "Save Changes"}
      </button>
    </div>

  )
}


export function Privacy({ form, updateField }: { form: FormStateProps, updateField: UpdateFieldFn }) {
  return (
    <label className="flex flex-col">
      <span className="text-sm font-medium mb-2">Privacy</span>
      <div className="flex gap-3">
        <label className="flex items-center gap-3 rounded-lg border p-3 flex-1 cursor-pointer">
          <input
            type="radio"
            name="privacy"
            value="Public"
            checked={form.privacy === "Public"}
            onChange={() => updateField("privacy", "Public")}
            className="form-radio"
          />
          <div>
            <p className="font-medium">Public</p>
            <p className="text-sm text-muted-foreground">
              Anyone with the link can vote.
            </p>
          </div>
        </label>

        <label className="flex  items-center gap-3 rounded-lg border p-3 flex-1 cursor-pointer">
          <input
            type="radio"
            name="privacy"
            value="Private"
            checked={form.privacy === "Private"}
            onChange={() => updateField("privacy", "Private")}
            className="form-radio"
          />
          <div>
            <p className="font-medium">Private</p>
            <p className="text-sm text-muted-foreground">
              Only invited users can vote.
            </p>
          </div>
        </label>
      </div>
    </label>

  )
}

export function StatusSelect({ form, updateField }: { form: FormStateProps, updateField: UpdateFieldFn }) {
  return (
    <label className="flex flex-col w-1/2">
      <span className="text-sm font-medium mb-2">Status</span>
      <select
        value={form.status}
        onChange={(e) =>
          updateField("status", e.target.value as FormStateProps["status"])
        }
        className="h-12  rounded-lg border p-2 bg-white dark:bg-gray-700"
      >
        <option value="Pending">Pending</option>
        <option value="Active">Active</option>
        <option value="Closed">Closed</option>
      </select>
    </label>
  )
}
