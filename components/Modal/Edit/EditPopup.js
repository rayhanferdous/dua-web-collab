import React from "react";

function EditPopup({ children }) {
  return (
    <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none" style={{ maxWidth: "435px" }}>
      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-red-100 bg-clip-paddingoutline-none text-current ">
        <div className="modal-body relative ">
          <div className="mt-4 mb-4 flex justify-start">
            <div className="px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPopup;
