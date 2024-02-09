import React from 'react';
import { useState } from 'react';

function Modal({children, openModal, setOpenModal, title=""}) {
    
    return (
        <div className={`${openModal ? 'absolute' : 'hidden '} w-96 p-2 mx-4 bg-white border border-gray-200 rounded`}>
           <div className="flex justify-between">
           <h1 className="font-medium text-md">{title}</h1> 
           <span className='font-bold p-2 hover:text-gray-400' onClick={() => setOpenModal(false)}>X</span>
           </div>
            {children}
            {/* <div className="flex justify-end gap-2">
                <button className="bg-red-300 font-bold text-sm px-4 py-2 rounded">Cancel</button>
                <button className="bg-blue-300 font-bold text-sm   px-4 py-2 rounded">Save</button>
            </div> */}
        </div>
    );
}

export default Modal;