"use client";
import { submitContactForm } from "@/_actions/actions"; // Adjust the import according to your project structure

import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
const ContactSection = () => {
  const [error, action] = useFormState(submitContactForm, {});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To manage success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   await prisma.contact.create({
      //     data: {
      //       firstName: firstName,
      //       lastName: lastName,
      //       email: email,
      //       message: message,
      //     },
      //   });
      setStatus("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      // Success message
    } catch (error) {
      setStatus("Failed to send message. Please try again."); // Error message
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you shortly.
        </p>

        {status && (
          <div
            className={`mt-4 text-center ${
              status.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </div>
        )}

        <div className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6 text-black sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
