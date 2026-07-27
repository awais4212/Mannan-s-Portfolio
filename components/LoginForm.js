
"use client";

import { useState } from "react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn, Loader2 } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await login(email, password);

    console.log("LOGIN DATA:", data);
    console.log("LOGIN ERROR:", error);

    if (!error) {
      router.push("/dashboard");
    } else {
      alert(error.message);
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-8 sm:px-6">

      <div className="w-full max-w-md">

        {/* Login Card */}
        <form
          onSubmit={handleLogin}
          className="
            w-full
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            sm:rounded-3xl
            p-5
            sm:p-8
            shadow-2xl
          "
        >

          {/* Header */}
          <div className="text-center mb-7 sm:mb-8">

            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-amber-400/10 flex items-center justify-center mb-4">
              <LogIn
                size={28}
                className="text-amber-400"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Admin Login
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Sign in to access your dashboard
            </p>

          </div>


          {/* Email */}
          <div className="space-y-2">

            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-300"
            >
              Email Address
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
                autoComplete="email"
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  pl-11
                  pr-4
                  py-3.5
                  text-white
                  text-sm
                  sm:text-base
                  placeholder:text-slate-500
                  outline-none
                  transition
                  focus:border-amber-400
                  focus:ring-2
                  focus:ring-amber-400/20
                "
              />

            </div>

          </div>


          {/* Password */}
          <div className="mt-5 space-y-2">

            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                autoComplete="current-password"
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  pl-11
                  pr-4
                  py-3.5
                  text-white
                  text-sm
                  sm:text-base
                  placeholder:text-slate-500
                  outline-none
                  transition
                  focus:border-amber-400
                  focus:ring-2
                  focus:ring-amber-400/20
                "
              />

            </div>

          </div>


          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              mt-6
              inline-flex
              items-center
              justify-center
              gap-2
              bg-amber-400
              hover:bg-amber-500
              active:scale-[0.98]
              disabled:opacity-50
              disabled:cursor-not-allowed
              text-slate-950
              py-3.5
              rounded-xl
              font-bold
              text-sm
              sm:text-base
              transition
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="animate-spin"
                />
                Signing In...
              </>
            ) : (
              <>
                <LogIn size={20} />
                Login
              </>
            )}
          </button>

        </form>

      </div>

    </main>
  );
}

