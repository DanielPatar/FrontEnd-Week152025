// app/actions.ts
'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// CREATE: Menambah data
export async function addNote(formData: FormData) {
  const content = formData.get("content") as string;

  if (!content) return;

  await prisma.note.create({
    data: {
      content,
    },
  });

  // Refresh halaman agar data baru muncul
  revalidatePath("/"); 
}

// DELETE: Menghapus data
export async function deleteNote(id: number) {
  await prisma.note.delete({
    where: { id },
  });

  revalidatePath("/");
}