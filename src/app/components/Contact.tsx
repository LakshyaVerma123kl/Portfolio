"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupError, setPopupError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setPopupMessage("Transmission Sent Successfully!");
        setPopupError(false);
      } else {
        setPopupMessage("Failed to send transmission.");
        setPopupError(true);
      }
      setShowPopup(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission Error:", error);
      setPopupMessage("An error occurred. Please try again.");
      setPopupError(true);
      setShowPopup(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-8 text-center star-wars-title">
        Send a Transmission
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-gray-800 hover:bg-gray-700 star-wars max-sm:mt-5 text-white font-light py-2 px-4 rounded-xl text-lg transition duration-300 ease-in-out transform hover:scale-105 lightsaber-btn blue"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Transmission"}
        </motion.button>
      </motion.form>
      {/* ✅ Custom Animated Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: "Star Jedi" }}
            className={`fixed top-10 left-3 transform p-4 rounded-lg shadow-2xl ${
              popupError ? "shadow-red-400" : "shadow-yellow-400"
            } text-white text-lg z-50`}
          >
            {popupMessage}
            <button
              onClick={() => setShowPopup(false)}
              className="block mt-3 text-sm text-red-500 underline"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
