import React, { useState, useEffect } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const validName = formData.name.trim().length >= 2;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const validPassword = formData.password.length >= 6;
    const passwordsMatch = formData.password === formData.confirmPassword && validPassword;

    setIsValid(validName && validEmail && passwordsMatch);
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
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Placeholder signup action
      setSubmitted(true);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  }

  return (
    <section className="py-10 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-primary-light select-none">Sign Up</h1>

      {submitted && (
        <div className="mb-6 p-4 bg-green-600 text-green-100 rounded-md">
          Signup successful! (This is a placeholder message)
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6"
        noValidate
        aria-label="Signup form"
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
          <label htmlFor="password" className="block mb-1 font-semibold text-gray-300">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full rounded-md bg-card-dark dark:bg-card-dark text-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition ${
              errors.password ? 'ring-2 ring-red-500' : ''
            }`}
            required
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password && (
            <p id="password-error" className="mt-1 text-red-500 text-sm">
              {errors.password}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1 font-semibold text-gray-300">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full rounded-md bg-card-dark dark:bg-card-dark text-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition ${
              errors.confirmPassword ? 'ring-2 ring-red-500' : ''
            }`}
            required
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
          />
          {errors.confirmPassword && (
            <p id="confirmPassword-error" className="mt-1 text-red-500 text-sm">
              {errors.confirmPassword}
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
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default Signup;
