import { useState } from "react";
import Modal from "./Modal";

function AddModalUser() {
  const [openModal, setOpenModal] = useState(false);

  return (
    // <div className='abso lute  hidden top-[30%] left-[40%] border min-w-96 min-h-48 bg-pink-100'>

    // </div>
    <Modal
      title="Add New User"
      openModal={openModal}
      setOpenModal={setOpenModal}
    >
      Add NEW uSERS
    </Modal>
  );
}

export default AddModalUser;
