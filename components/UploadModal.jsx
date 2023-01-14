import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UploadModal;
