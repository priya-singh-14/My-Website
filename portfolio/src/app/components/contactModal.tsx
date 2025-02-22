"use client";
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal(props: ContactModalProps){
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      from_email: email,
      message: message,
    };

    // try {
    //   await emailjs.send(
    //     "YOUR_SERVICE_ID", 
    //     "YOUR_TEMPLATE_ID",
    //     templateParams,
    //     "YOUR_PUBLIC_KEY" 
    //   );
    //   setSuccess(true);
    //   setEmail("");
    //   setMessage("");
    // } catch (error) {
    //   setError("Failed to send message. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  if (!props.isOpen) return null;

  return (
    <div className="fixed w-screen h-screen left-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="Z-50 bg-primary p-6 shadow-lg w-96 ">
        <h2 className="left-0 text-p pb-5 ">Contact Me</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">Message sent successfully!</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 text-sm font-light">Email</label>
          <input
            type="email"
            className="border p-2 bg-primary text-sm mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="mb-2 text-sm font-light">Message</label>
          <textarea
            className="border p-2 bg-primary text-sm mb-3 h-24"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="p-1 w-1/4 bg-blueSecondary text-p font-light text-primary hover:bg-cardBlue transition:0.2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        <button className="mt-6 text-cardDarkGrey text-p hover:underline" onClick={props.onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
