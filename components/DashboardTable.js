
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getContacts,
  deleteContact,
  markAsRead,
} from "@/lib/queries";

export default function DashboardTable() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchContacts = async () => {
    setLoading(true);

    const res = await getContacts();

    setContacts(res?.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleMarkAsRead = async (id, e) => {
    e.stopPropagation();

    const { error } = await markAsRead(id);

    if (error) {
      alert("Failed to mark as read: " + error.message);
      return;
    }

    setContacts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();

    if (
      confirm(
        "Are you sure you want to delete this message?"
      )
    ) {
      const { error } = await deleteContact(id);

      if (error) {
        alert(
          "Failed to delete contact: " +
            error.message
        );
        return;
      }

      setContacts((prev) =>
        prev.filter((item) => item.id !== id)
      );

      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 space-y-4 sm:space-y-6 pb-8 sm:pb-12">

      {/* =========================
          Dashboard Navbar
      ========================== */}
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl">

        {/* Logo + Navigation */}
        <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6">

          <Link
            href="/dashboard"
            className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse flex-shrink-0" />
            Admin Portal
          </Link>

          <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-400">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-lg text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 font-semibold"
            >
              Messages
            </Link>
          </div>
        </div>

        {/* Admin / Logout */}
        <div className="flex items-center justify-between sm:justify-end gap-3">

          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
            <span>Admin</span>
          </div>

          <Link
            href="/login"
            className="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-xl transition"
          >
            Logout
          </Link>
        </div>
      </nav>


      {/* =========================
          Header / Stats
      ========================== */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl">

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Contact Messages
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage inquiry submissions from your portfolio website.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">

          <span className="px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Total: {contacts.length}
          </span>

          <span className="px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Unread:{" "}
            {contacts.filter((c) => !c.read).length}
          </span>

        </div>
      </div>


      {/* =========================
          Main Content
      ========================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* =========================
            Messages Table
        ========================== */}
        <div
          className={`${
            selectedMessage
              ? "lg:col-span-2"
              : "lg:col-span-3"
          } min-w-0 transition-all`}
        >
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-xl">

            {loading ? (
              <div className="p-8 sm:p-12 text-center text-sm sm:text-base text-slate-400">
                Loading messages...
              </div>
            ) : contacts.length === 0 ? (
              <div className="p-8 sm:p-12 text-center text-sm sm:text-base text-slate-400">
                No messages found.
              </div>
            ) : (

              /*
                Horizontal scroll on mobile.
                This prevents the table from breaking
                the page layout.
              */
              <div className="overflow-x-auto">

                <table className="w-full min-w-[700px] text-left text-sm text-slate-300">

                  {/* Table Header */}
                  <thead className="bg-slate-800/60 text-xs uppercase text-slate-400 tracking-wider border-b border-slate-800">

                    <tr>
                      <th className="py-4 px-4 sm:px-6">
                        Status
                      </th>

                      <th className="py-4 px-4 sm:px-6">
                        Sender
                      </th>

                      <th className="py-4 px-4 sm:px-6">
                        Subject
                      </th>

                      <th className="py-4 px-4 sm:px-6 text-right">
                        Actions
                      </th>
                    </tr>

                  </thead>

                  {/* Table Body */}
                  <tbody className="divide-y divide-slate-800/50">

                    {contacts.map((contact) => (

                      <tr
                        key={contact.id}
                        className={`hover:bg-slate-800/40 transition duration-150 cursor-pointer ${
                          selectedMessage?.id ===
                          contact.id
                            ? "bg-slate-800/60"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedMessage(contact)
                        }
                      >

                        {/* Status */}
                        <td className="py-4 px-4 sm:px-6">

                          {contact.read ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                              Read
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                              New
                            </span>
                          )}

                        </td>


                        {/* Sender */}
                        <td className="py-4 px-4 sm:px-6">

                          <div className="font-semibold text-white max-w-[180px] truncate">
                            {contact.name}
                          </div>

                          <div className="text-xs text-slate-400 max-w-[180px] truncate">
                            {contact.email}
                          </div>

                        </td>


                        {/* Subject */}
                        <td className="py-4 px-4 sm:px-6 text-slate-300 max-w-[220px] truncate">
                          {contact.subject ||
                            "No Subject"}
                        </td>


                        {/* Actions */}
                        <td className="py-4 px-4 sm:px-6 text-right">

                          <div className="flex justify-end items-center gap-2">

                            {!contact.read && (
                              <button
                                onClick={(e) =>
                                  handleMarkAsRead(
                                    contact.id,
                                    e
                                  )
                                }
                                className="px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition whitespace-nowrap"
                              >
                                Read
                              </button>
                            )}

                            <button
                              onClick={(e) =>
                                handleDelete(
                                  contact.id,
                                  e
                                )
                              }
                              className="px-3 py-1.5 text-xs font-medium bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg transition whitespace-nowrap"
                            >
                              Delete
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>
            )}

          </div>
        </div>


        {/* =========================
            Message Details
        ========================== */}
        {selectedMessage && (

          <div className="lg:col-span-1 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col justify-between gap-6 min-w-0">

            <div className="space-y-5">

              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">

                <h3 className="text-base sm:text-lg font-bold text-white">
                  Message Details
                </h3>

                <button
                  onClick={() =>
                    setSelectedMessage(null)
                  }
                  className="text-slate-400 hover:text-white text-xs sm:text-sm whitespace-nowrap"
                >
                  ✕ Close
                </button>

              </div>


              {/* From */}
              <div className="min-w-0">

                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  From
                </p>

                <p className="text-sm font-medium text-white mt-1 break-words">
                  {selectedMessage.name}
                </p>

                <p className="text-xs text-indigo-400 break-all">
                  {selectedMessage.email}
                </p>

                {selectedMessage.phone && (
                  <p className="text-xs text-slate-400 mt-1 break-words">
                    📞 {selectedMessage.phone}
                  </p>
                )}

              </div>


              {/* Subject */}
              <div className="min-w-0">

                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Subject
                </p>

                <p className="text-sm font-medium text-slate-200 mt-1 break-words">
                  {selectedMessage.subject ||
                    "No Subject"}
                </p>

              </div>


              {/* Message */}
              <div className="min-w-0">

                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Message
                </p>

                <div className="mt-2 p-3 sm:p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs sm:text-sm text-slate-300 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto break-words">
                  {selectedMessage.message}
                </div>

              </div>

            </div>


            {/* Reply Button */}
            <div className="pt-4 border-t border-slate-800">

              <a
                href={`mailto:${selectedMessage.email}`}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition shadow-lg shadow-emerald-900/20"
              >
                Reply via Email
              </a>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

