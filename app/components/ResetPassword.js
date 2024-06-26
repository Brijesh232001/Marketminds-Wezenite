"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from "next/image";

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [color, setColor] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setMessage('Invalid or expired token.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    setIsSubmitting(true); // Start submission

    try {
      const form = e.target;
      // Disable all form fields
      const formElements = form.elements;
      for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
      }
      const response = await fetch('/api/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, password })
      });
      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        window.history.replaceState({}, document.title, window.location.pathname); // removes token from search bar after successfull try..
        router.push('/login');
      }
    } catch (error) {
      setMessage('Error resetting password. Please try again.');
    } finally {
      setIsSubmitting(false); // End submission
    }
  };


  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full lg:w-6/12">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="px-4 md:px-0 md:mx-6 md:p-12">
                <div className="text-center">
                  <Image className="mx-auto w-48" src="/images/Marketminds_Logo(1).png" alt="logo" width={400} height={400} />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    We are The Marketminds Team
                  </h4>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <h1 className="text-xl font-bold my-4">Email Address Verified Successfully</h1>
                  <p className="mb-4">Set new password</p>

                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      value={password}
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                      required
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                  </div>

                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      value={confirmPassword}
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2"
                      placeholder="Confirm Password"
                      required
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Confirm Password
                    </label>
                  </div>

                  <button type="submit" className="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Verify'}
                  </button>

                  {message && (
                    <div className={`bg-${color}-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
            style={{ background: "linear-gradient(to right, #2ea1d8, #65bae1, #a4d6ec, #dfeef5)" }}>
            <div className="px-4 py-6 text-white md:mx-6 md:p-12">
              <Image src="/images/Hero (1).png" width={600} height={600} />
              <h4 className="mb-6 text-xl font-semibold">
                We are more than just a company
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
