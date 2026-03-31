interface AppLogoProps {
  className?: string;
}

export default function AppLogo({ className = "" }: AppLogoProps) {
  return (
    <div
      className={`w-7 h-7 rounded-md bg-[oklch(0.72_0.14_195)] flex items-center justify-center ${className}`.trim()}
    >
      <svg width="14" height="14" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="oklch(0.72 0.14 195)" />
        <circle cx="32" cy="32" r="11" fill="oklch(0.09 0.012 260)" />
        <circle cx="16" cy="18" r="6" fill="oklch(0.09 0.012 260)" opacity="0.75" />
        <circle cx="48" cy="18" r="6" fill="oklch(0.09 0.012 260)" opacity="0.75" />
        <circle cx="16" cy="46" r="6" fill="oklch(0.09 0.012 260)" opacity="0.75" />
        <circle cx="48" cy="46" r="6" fill="oklch(0.09 0.012 260)" opacity="0.75" />
      </svg>
    </div>
  );
}
