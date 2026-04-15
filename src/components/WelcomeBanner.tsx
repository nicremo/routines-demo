import { useState } from "react";

interface WelcomeBannerProps {
  userName: string;
  onDismiss: () => void;
}

export function WelcomeBanner({ userName, onDismiss }: WelcomeBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss();
  };

  return (
    <div
      role="banner"
      aria-label="Willkommens-Banner"
      className="flex items-center justify-between rounded-lg bg-blue-50 p-4 text-blue-900 dark:bg-blue-950 dark:text-blue-100"
    >
      <p className="text-base font-medium">
        Hallo {userName}, schön dass du hier bist.
      </p>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Banner schliessen"
        className="ml-4 rounded px-3 py-1 text-sm hover:bg-blue-100 dark:hover:bg-blue-900"
      >
        Schliessen
      </button>
    </div>
  );
}
