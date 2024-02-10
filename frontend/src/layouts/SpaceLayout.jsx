import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavBar from '../components/MainNavBar';
function SpaceLayout(props) {
    return (
        <div>
            <MainNavBar/>
            <div className='min-h-12 min-w-full bg-gray-100 border-t border-b'>
                <p className="font-bold text-md p-4">Simba</p>
            </div>
            <Outlet />            
        </div>
    );
}

export default SpaceLayout;