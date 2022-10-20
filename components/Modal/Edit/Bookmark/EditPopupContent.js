import React from "react";
import EditPopupCont from "./EditPopupCont";

function EditPopupContent() {
  return (
    <div className="modal-body relative px-8 ">
      <div className="mt-4 mb-4 flex justify-start">
        <EditPopupCont />
      </div>
    </div>
  );
}

export default EditPopupContent;
