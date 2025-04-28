"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal(props: ContactModalProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !message) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);

    const templateParams = {
      sender: sender,
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email sending error:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!props.isOpen) return null;

  return (
    <div className="w-full">
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
        <div className="z-50 bg-primary p-6 shadow-lg max-w-xl w-full mx-auto rounded-lg">
          <div className="w-full text-left flex pb-5">
            <h2 className="w-full text-p">Contact Me</h2>
            <button
              className="w-full pr-2 text-right text-cardDarkGrey text-p font-light hover:text-bluePrimary"
              onClick={props.onClose}
            >
              X
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm">Message sent successfully!</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="mb-2 text-cardDarkGrey text-sm font-light">
              Name
            </label>
            <input
              type="name"
              className="border border-cardDarkGrey p-2 text-cardDarkGrey bg-primary text-sm mb-3"
              placeholder="Enter your name"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              required
            />

            <label className="mb-2 text-cardDarkGrey text-sm font-light">
              Email
            </label>
            <input
              type="email"
              className="border border-cardDarkGrey p-2 text-cardDarkGrey bg-primary text-sm mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="mb-2 text-cardDarkGrey text-sm font-light">
              Message
            </label>
            <textarea
              className="border p-2 border-cardDarkGrey bg-primary text-sm mb-3 h-24"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="flex justify-end w-full">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="text-sm p-2 w-1/6 border border-cardDarkGrey text-p font-light text-cardDarkGrey hover:bg-cardDarkGrey hover:text-primary transition duration-200"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
