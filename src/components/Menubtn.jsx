import React from 'react'
import { RiMenuLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarToggleAction } from '../Store';

function Menubtn() {
    const Dispatch = useDispatch();

    const SidebarToggle = useSelector((slice) => slice.SideToggle)

    return (
        <RiMenuLine className='menuToggle' onClick={() => Dispatch(SidebarToggleAction.ToggleSideBar(SidebarToggle))} />
    )
}

export default Menubtn
