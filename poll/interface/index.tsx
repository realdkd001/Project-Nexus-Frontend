
export interface PollProps {
  id?: number | string;
  title: string;
  options: string[];
  status: "Pending" | "Active" | "Closed";
  createdAt: string;
  privacy?: "Public" | "Private";
   startAt?: string | null;
  endAt?: string | null;
  description?: string;
  votes?: Record<string, number>;
}
export type VotesMap = Record<string, number>;

export type FormStateProps = {
  id?: string | number;
  title: string;
  description?: string;
  options: string[];
  votes?: VotesMap;
  status: PollProps["status"];
  privacy?: PollProps["privacy"];
  createdAt?: string;
  startAt?: string | null;
  endAt?: string | null;
};

export interface ActionProps {
  id: number | string;
  icon: React.ReactNode;
  action?: "edit" | "delete" | "view";
  onEdit?: (poll: PollProps) => void;
}

export type UpdateFieldFn = <K extends keyof FormStateProps>(
  field: K,
  value: FormStateProps[K]
) => void;


export interface PollModalProps {
  isOpen: boolean;
  closeModal: () => void;
  mode?: "create" | "edit";
  initial?: PollProps | null;
}

export interface AnswerOptionsProps {
  form: FormStateProps;
  errors: { title?: string; options?: string };
  setForm: React.Dispatch<React.SetStateAction<FormStateProps>>;
}