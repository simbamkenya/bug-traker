import React from 'react';
import Sidebar from '../components/Sidebar';

function Board(props) {
    return (
        <div className='flex w-full min-h-screen bg-gray-100'>
            <Sidebar />
        </div>
    );
}

export default Board;