import React, { useState } from "react";
import OriginalNote from "./OgrinalNote";
import UpdateNote from "./UpdateNote";
import EditIcon from "@mui/icons-material/Edit";

function Note(props) {
  const [isEditClicked, setEditStatus] = useState(false);

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function updateNote(updatedNote) {
    props.onUpdate(props.id, updatedNote);
    setEditStatus((prev) => !prev);
  }

  function handleEditClick() {
    setEditStatus((prev) => !prev);
  }

  return (
    <div className="note">
      <div>
        {!isEditClicked && (
          <OriginalNote
            title={props.title}
            content={props.content}
            handleClick={handleDeleteClick}
          />
        )}
      </div>
      <div>
        {isEditClicked && (
          <UpdateNote
            originTitle={props.title}
            originContent={props.content}
            handleUpdate={updateNote}
          />
        )}
      </div>
      <button onClick={handleEditClick}>
        <EditIcon />
      </button>
    </div>
  );
}

export default Note;
