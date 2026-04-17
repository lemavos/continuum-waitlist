interface AppLogoProps {
  className?: string;
}

export default function AppLogo({ className = "w-7 h-7" }: AppLogoProps) {
  return (
    <img
      src="/favicon.ico"
      alt="Continuum logo"
      className={className}
      aria-hidden="true"
    />
  );
}
