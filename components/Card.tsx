import { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  tag?: string;
}

export default function Card({ title, description, children, tag }: CardProps) {
  return (
    <div className="card-sheen relative rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-purple-900/10">
      {tag && <span className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-aurora">{tag}</span>}
      {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
      {description && <p className="mt-2 text-sm text-slate-300">{description}</p>}
      {children && <div className="mt-4 space-y-2 text-sm text-slate-200">{children}</div>}
    </div>
  );
}
