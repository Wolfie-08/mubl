import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export default function SectionHeader({ eyebrow, title, description, actions }: Props) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-aurora">{eyebrow}</p>}
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        {description && <p className="max-w-3xl text-sm text-slate-300 md:text-base">{description}</p>}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}
