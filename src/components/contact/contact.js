import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Reusable Input Component
const InputField = ({ label, id, name, type = "text", required = false }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
      />
    </div>
  );
};

// Reusable Textarea Component
const TextareaField = ({ label, id, name, rows = 4, required = false }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
      />
    </div>
  );
};

// Reusable Checkbox Component
const CheckboxField = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="text-indigo-600 focus:ring-0 focus:outline-none"
      />
      <label className="ml-2 text-sm text-gray-900">{label}</label>
    </div>
  );
};

export default function ReportProblemForm() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = event.target.email.value;

    if (!emailRegex.test(email)) {
      toast.error("Invalid email format. Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/contact/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: event.target.name.value,
            email: email,
            phone: event.target.phone.value,
            subject: event.target.subject.value,
            address: event.target.address.value,
            message: event.target.message.value,
            agreed: agreed,
          }),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="bg-white mt-0 px-6 py-24 sm:py-32 lg:px-8">
      <ToastContainer />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Report Problem
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Parents can report problems by filling out this form.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20 space-y-6"
      >
        <InputField label="Name" id="name" name="name" required />
        <InputField label="Phone Number" id="phone" name="phone" required />
        <InputField label="Subject" id="subject" name="subject" required />
        <InputField label="Address" id="address" name="address" />
        <InputField
          label="Email"
          id="email"
          name="email"
          type="email"
          required
        />
        <TextareaField label="Message" id="message" name="message" required />
        <CheckboxField
          label="I agree with the terms and conditions."
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
