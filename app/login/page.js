"use client";

import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return <>
  <nav className="flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl">
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-lg font-bold text-white tracking-wide flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></span>
            Admin Portal
          </Link>

          <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-400">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition"
            >
              Home
            </Link>
            
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Admin</span>
          </div>

         
        </div>
      </nav>
  <LoginForm />;
  </>
}