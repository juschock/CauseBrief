type SnickerdoodleMarkProps = {
  className?: string;
};

/** Subtle cinnamon cookie mark — brand motif, not illustration. */
export function SnickerdoodleMark({ className }: SnickerdoodleMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13" fill="#D4A574" />
      <circle cx="16" cy="16" r="13" stroke="#B8895A" strokeWidth="0.75" />
      <path
        d="M10 14.5c2.5-1.5 5-1 7.5 0M14 19c2-1 4.5-0.5 6.5 1"
        stroke="#A67C52"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="11" cy="11" r="0.9" fill="#C4956A" opacity="0.85" />
      <circle cx="19" cy="10" r="0.7" fill="#C4956A" opacity="0.7" />
      <circle cx="22" cy="16" r="0.8" fill="#C4956A" opacity="0.75" />
      <circle cx="18" cy="22" r="0.75" fill="#C4956A" opacity="0.8" />
      <circle cx="10" cy="19" r="0.65" fill="#C4956A" opacity="0.65" />
      <circle cx="14" cy="13" r="0.55" fill="#C4956A" opacity="0.6" />
      <circle cx="21" cy="20" r="0.5" fill="#C4956A" opacity="0.55" />
    </svg>
  );
}
