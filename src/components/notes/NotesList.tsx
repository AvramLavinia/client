import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }: { notes: Array<{ id: string; text: string; date: string }>; handleAddNote: (text: string) => void;  handleDeleteNote: (id: string) => void}) => {


    return (
        <div className='notes-list'>
            {notes.map((note: { id: string; text: string; date: string }) => (
                <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
))}
            <AddNote handleAddNote={handleAddNote } />
        </div>
    );
};
export default NotesList;