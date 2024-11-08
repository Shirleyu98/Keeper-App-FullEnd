import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function OriginalNote(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={props.handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default OriginalNote;
