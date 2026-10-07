export default function Tag({ label }: { label: string }) {
  return (
    <span className="font-manrope text-[12px] text-[#444] leading-none px-1.5 py-1 rounded-[4px] bg-tag">
      {label}
    </span>
  );
}
