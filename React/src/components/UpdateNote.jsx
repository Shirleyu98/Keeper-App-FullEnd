import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

function UpdateNote(props) {
  const [draft, updateDraft] = useState({
    title: props.originTitle,
    content: props.originContent,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    updateDraft((preDraft) => {
      return { ...preDraft, [name]: value };
    });
  }

  function handleUpdateCheck(event) {
    props.handleUpdate(draft);
    event.preventDefault();
  }

  return (
    <div>
      <form className="update-note">
        <input name="title" onChange={handleChange} value={draft.title} />

        <textarea
          name="content"
          onChange={handleChange}
          value={draft.content}
        />

        <button onClick={handleUpdateCheck}>
          <CheckIcon />
        </button>
      </form>
    </div>
  );
}

export default UpdateNote;
