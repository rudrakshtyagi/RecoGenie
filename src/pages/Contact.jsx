import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx';

function Contact() {
  const { ref: formRef, controls: formControls } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const valid =
      formData.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.message.trim().length >= 10;
    setIsValid(valid);
  }, [formData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Placeholder submit action
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  }

  return (
    <section className="py-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-primary-light select-none">Contact Us</h1>

      {submitted && (
        <div className="mb-6 p-4 bg-green-600 text-green-100 rounded-md">
          Thank you for reaching out! We will get back to you soon.
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6"
        noValidate
        aria-label="Contact form"
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-md bg-card-dark dark:bg-card-dark text-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition ${
              errors.name ? 'ring-2 ring-red-500' : ''
            }`}
            required
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-red-500 text-sm">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md bg-card-dark dark:bg-card-dark text-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition ${
              errors.email ? 'ring-2 ring-red-500' : ''
            }`}
            required
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-red-500 text-sm">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full rounded-md bg-card-dark dark:bg-card-dark text-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition resize-none ${
              errors.message ? 'ring-2 ring-red-500' : ''
            }`}
            required
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-red-500 text-sm">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-3 rounded-md font-semibold transition ${
            isValid
              ? 'bg-primary-light text-background-dark hover:bg-primary-dark'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
