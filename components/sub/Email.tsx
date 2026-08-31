"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        { from_name: name, from_email: email, message },
        process.env.NEXT_PUBLIC_USER_ID as string
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="eyebrow">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="eyebrow">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
          placeholder="you@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-none`}
          placeholder="What's on your mind?"
        />
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <FiSend className="h-4 w-4" />
        </button>

        {status === "sent" && (
          <p className="font-mono text-sm text-accent">Thanks — I&apos;ll be in touch.</p>
        )}
        {status === "error" && (
          <p className="font-mono text-sm text-red-500">
            Couldn&apos;t send. Please email me directly.
          </p>
        )}
      </div>
    </form>
  );
}
