import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }: { id: string, text: string, date: string;  handleDeleteNote: (id: string) => void;}) => {

    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em"/>
            </div>
        </div>
    );
};

export default Note;