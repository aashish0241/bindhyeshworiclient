import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Example() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = event.target.email.value;

    if (!emailRegex.test(email)) {
      // Show error toast for invalid email format
      toast.error("Invalid email format. Please enter a valid email address.");
      return;
    }

    try {
      // Replace the following lines with actual API call
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact/add`, {
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
      });

      if (response.ok) {
        // Show success toast
        toast.success("Form submitted successfully!");
      } else {
        // Show error toast
        toast.error("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error toast
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="bg-white mt-0 px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <ToastContainer />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Report Problem
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Parents can report problems by filling out this form.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/** Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          {/** Message Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-900"
            >
              Message Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          {/** Phone Number Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          {/** Address Input */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-900"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          {/** Email Input */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          {/** Message Input */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md border border-gray-300 px-3.5 py-2 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
          </div>
          {/** Agreement Checkbox */}
          <div className="sm:col-span-2 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="text-indigo-600 focus:ring-0 focus:outline-none"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-900">
              I agree with the terms and conditions.
            </label>
          </div>
        </div>
        {/** Submit Button */}
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
