import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <FontAwesomeIcon
              onClick={() => filePickerRef.current.click()}
              icon={faCamera}
              className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"
            />
            <input type="file" hidden ref={filePickerRef}></input>
            <input type="text" maxLength="150"></input>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UploadModal;
