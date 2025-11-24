import { prisma } from "@/lib/prisma";
import { addNote, deleteNote } from "./crud";

export default async function Home() {
  // READ: Mengambil data dari database
  const notes = await prisma.note.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Latihan CRUD SQLite + Prisma</h1>

      {/* Form CREATE */}
      <form action={addNote} className="flex gap-2 mb-8">
        <input
          type="text"
          name="content"
          placeholder="Tulis catatan..."
          className="border p-2 rounded w-full text-black"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tambah
        </button>
      </form>

      {/* List READ & DELETE */}
      <ul className="space-y-3">
        {notes.map((note) => (
          <li key={note.id} className="border p-4 rounded flex justify-between items-center bg-gray-800 text-white">
            <span>{note.content}</span>
            
            {/* Tombol Delete dibungkus form karena memanggil server action */}
            <form action={deleteNote.bind(null, note.id)}>
              <button 
                type="submit" 
                className="text-red-400 hover:text-red-600 text-sm"
              >
                Hapus
              </button>
            </form>
          </li>
        ))}
        
        {notes.length === 0 && (
          <p className="text-gray-500 text-center">Belum ada catatan.</p>
        )}
      </ul>
    </main>
  );
}