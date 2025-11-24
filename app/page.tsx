import Link from "next/link"; 


              <div className="absolute top-2 right-2 flex gap-2">
                
                <Link 
                  href={`/edit/${note.id}`} 
                  className="text-gray-400 hover:text-[#00e054] transition p-1 bg-[#14181c] rounded-full bg-opacity-50 hover:bg-opacity-100"
                  title="Edit Review"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                </Link>

                <form action={deleteNote.bind(null, note.id)}>
                  <button 
                    type="submit" 
                    className="text-gray-400 hover:text-red-500 transition p-1 bg-[#14181c] rounded-full bg-opacity-50 hover:bg-opacity-100"
                    title="Delete Review"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                </form>
              </div>