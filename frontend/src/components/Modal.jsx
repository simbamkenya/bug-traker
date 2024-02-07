import React from 'react';
import { useState } from 'react';

function Modal({children, openModal, setOpenModal}) {
    
    return (
        <div className={`${openModal ? 'absolute' : 'hidden '} w-96 p-2 mx-4 min-h-48 bg-gray-800 rounded`}>
           <div className="flex justify-between">
           <h1 className="font-bold text-xl text-white">Title</h1> 
           <span className='text-white font-bold p-2' onClick={() => setOpenModal(false)}>X</span>
           </div>
            {children}
            <div className="flex justify-end gap-2">
                <button className="bg-red-300 font-bold text-sm px-4 py-2 rounded">Cancel</button>
                <button className="bg-blue-300 font-bold text-sm   px-4 py-2 rounded">Save</button>
            </div>
        </div>
    );
}

export default Modal;