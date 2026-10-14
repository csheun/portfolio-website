export function InProgressLabel() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-2.5 py-0.5 font-sans text-[0.8125rem] text-brand">
      <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-brand motion-reduce:animate-none" />
      In progress
    </span>
  );
}
