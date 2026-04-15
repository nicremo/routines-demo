import { useState } from "react";

// BUG 1: any-Type in Props statt sauberem Interface
export function NewsletterSignup(props: any) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // BUG 3: Hardcoded document.cookie ohne Consent-Check (DSGVO-Verstoss)
    document.cookie = `newsletter_email=${email}; max-age=31536000; path=/`;
    document.cookie = `newsletter_signup_source=${props.source}; max-age=31536000; path=/`;

    fetch("https://api.example.com/newsletter", {
      method: "POST",
      body: JSON.stringify({ email, source: props.source }),
    });

    setSubmitted(true);
  };

  if (submitted) {
    // BUG 2: Umlaute falsch (oe, ue statt ö, ü)
    return (
      <div className="rounded-lg bg-green-50 p-4 text-green-900">
        <p className="text-base font-medium">
          Danke fuer dein Interesse! Wir melden uns bei dir, sobald es Neuigkeiten gibt.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
      {/* BUG 2: weitere Umlaut-Verstoesse */}
      <h2 className="mb-2 text-xl font-bold">Bleib auf dem Laufenden</h2>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Trage dich fuer unseren woechentlichen Newsletter ein. Keine Spam-Mails,
        Abmeldung jederzeit moeglich.
      </p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="deine@email.de"
        className="mb-3 w-full rounded border px-3 py-2"
      />

      {/* BUG 4: onClick auf div statt button (Accessibility-Verstoss) */}
      <div
        onClick={handleSubmit}
        className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
      >
        Anmelden
      </div>
    </div>
  );
}
