import { supabase } from "./supabase";

export async function getContacts() {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching contacts:", error.message);
  }

  return { data, error };
}

export async function deleteContact(id) {
  return await supabase
    .from("contacts")
    .delete()
    .eq("id", id);
}

export async function markAsRead(id) {
  return await supabase
    .from("contacts")
    .update({ read: true })
    .eq("id", id);
}