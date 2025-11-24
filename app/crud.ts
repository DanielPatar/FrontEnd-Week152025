'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; 

export async function addNote(formData: FormData) {
  const content = formData.get("content") as string;
  if (!content) return;

  await prisma.note.create({
    data: { content },
  });

  revalidatePath("/");
}

export async function deleteNote(id: number) {
  await prisma.note.delete({
    where: { id },
  });
  revalidatePath("/");
}

export async function updateNote(id: number, formData: FormData) {
  const content = formData.get("content") as string;

  if (!content) return;

  await prisma.note.update({
    where: { id },
    data: {
      content,
    },
  });

  revalidatePath("/");
  redirect("/"); 
}