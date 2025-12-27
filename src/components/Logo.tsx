interface LogoProps {
  className?: string
  variant?: 'full' | 'icon' | 'text'
}

export function Logo({ className = '', variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="14"
          y1="16"
          x2="28"
          y2="16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="22"
          x2="26"
          y2="22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="28"
          x2="24"
          y2="28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 24L38 12M38 12L35 12M38 12L38 15"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="32"
          cy="18"
          r="1.5"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        <div className="flex items-baseline gap-1">
          <span className="font-bold text-inherit tracking-tight">CES</span>
          <span className="font-normal text-inherit opacity-80">Tuition</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 flex-shrink-0"
      >
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="14"
          y1="16"
          x2="28"
          y2="16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="22"
          x2="26"
          y2="22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="28"
          x2="24"
          y2="28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 24L38 12M38 12L35 12M38 12L38 15"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="32"
          cy="18"
          r="1.5"
          fill="currentColor"
        />
      </svg>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-inherit tracking-tight">CES</span>
        <span className="text-lg font-normal text-inherit opacity-80">Tuition</span>
      </div>
    </div>
  )
}
