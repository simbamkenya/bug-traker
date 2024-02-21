import { useState } from "react";
import Modal from "./Modal";

function AddModalProject() {
  const [openModal, setOpenModal] = useState(false);
  return (
    // <div className="absolu te hidden top-[270%] left-[40%] min-w-96 min-h-48 bg-green-100">
    //     dddddddddddd
    // </div>
    <Modal
      title="Add New Project"
      openModal={openModal}
      setOpenModal={setOpenModal}
    >
      Add new projects
    </Modal>
  );
}

export default AddModalProject;
