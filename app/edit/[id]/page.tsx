import { prisma } from "@/lib/prisma";
import { updateNote } from "@/app/crud"; 
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    redirect("/");
  }

  const note = await prisma.note.findUnique({
    where: { id },
  });

  if (!note) {
    redirect("/");
  }

  const updateAction = updateNote.bind(null, note.id);

  return (
    <div className="min-h-screen bg-[#14181c] text-white p-6 font-sans flex items-center justify-center">
      <div className="w-full max-w-2xl bg-[#2c3440] p-8 rounded-lg shadow-xl border border-gray-700">
        
        <h1 className="text-2xl font-bold mb-2 text-white">EDIT REVIEW</h1>
        <p className="text-[#99aabb] text-sm mb-6 uppercase tracking-widest">
           Editing Review #{note.id}
        </p>

        <form action={updateAction} className="flex flex-col gap-4">
          <label className="text-[#00e054] text-xs font-bold uppercase tracking-wider">
            Your Review
          </label>
          
          <textarea
            name="content"
            defaultValue={note.content}
            className="bg-[#14181c] text-white p-4 rounded border border-gray-700 focus:outline-none focus:border-[#00e054] w-full h-40 resize-none font-serif text-lg leading-relaxed"
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <Link 
              href="/" 
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded text-sm uppercase tracking-wider transition flex items-center"
            >
              Cancel
            </Link>

            <button 
              type="submit" 
              className="bg-[#00e054] hover:bg-[#00c045] text-white font-bold py-2 px-6 rounded text-sm uppercase tracking-wider transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}