"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();
  
  
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
  <div class="container h-full p-10">
    <div class="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
     
      <div class="w-full lg:w-6/12">
        <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div class="px-4 md:px-0 md:mx-6 md:p-12">
          
            <div class="text-center">
              <Image class="mx-auto w-48" src="/images/Marketminds_Logo(1).png" alt="logo" width={400} height={400}/>
              <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                We are The Marketminds Team
              </h4>
            </div>

          
            <form onSubmit={handleSubmit} class="flex flex-col gap-3">
              <h1 class="text-xl font-bold my-4">Login</h1>
              <div class="relative mb-4" data-twe-input-wrapper-init>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
                <label
                  for="exampleFormControlInput1"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >
                  Email
                </label>
              </div>


              <div class="relative mb-4" data-twe-input-wrapper-init>
  <input
    onChange={(e) => setPassword(e.target.value)}
    type="password"
    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInput11"
    placeholder="Password"
  />
  <label
    for="exampleFormControlInput11"
    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
  >
    Password
  </label>
</div>

<div class="text-right mt-2">
              <a href="/forgot_password" class="text-sm">Forgot password?</a>
            </div>
              <button class="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2">
                Login
              </button>
              {error && (
                <div class="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
            </form>

            
           

           
            <div class="flex items-center justify-center mt-4">
              <p class="text-sm">Don't have an account? </p>
              <Link href={"/registerr"} type="button" class="ml-5 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950" data-twe-ripple-init data-twe-ripple-color="light">
                Register
              </Link>
            </div>
            <br></br>
            <div className="flex justify-center">
            <p>OR</p>
            </div>
            <br></br>
            <div className="flex justify-center">
            <button onClick={() => signIn("google")} class="px-4 py-2 border flex gap-2 border-slate-200  rounded-lg text-white  hover:border-black  hover:text-black hover:bg-white  hover:shadow transition duration-150">
        <Image class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" height={6} width={6}/>
        <span>Login with Google</span>
    </button>
    </div>
          </div>
        </div>
      </div>



      
      
          
      <div class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
              style={{background: "linear-gradient(to right, #2ea1d8, #65bae1, #a4d6ec, #dfeef5)"}}>
              <div class="px-4 py-6 text-white md:mx-6 md:p-12">
              <Image src="/images/Hero (1).png" width={600} height={600}/>
                <h4 class="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p class="text-sm">
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
}

export default LoginPage
