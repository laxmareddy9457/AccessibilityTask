
import FeatherIcon from 'feather-icons-react'

import appicon from "../../resources/appicon.png";
import adminicon from "../../resources/adminicon.png";
import outlook from "../../resources/outllok.png";
import teams from "../../resources/teams.png";
import word from "../../resources/word.png";
import excel from "../../resources/excel.png";
import powerpoint from "../../resources/powerpoint.png";
import onenote from "../../resources/onenote.png";

const sidenav = () => {
    return (
        <nav
            aria-label="Sidebar navigation"
            className="sidenav w-[80px] overflow-y-scroll h-[100%]  flex flex-col  items-center bg-[#f0f0f0] overflow-y-auto py-5 [@media(max-width:368px)]:hidden">
            <button className=" flex flex-col items-center p-2  w-[100%]" aria-label="Open app grid">
                <FeatherIcon icon="grid" strokeWidth="1.5" />
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="Home">
                <FeatherIcon icon="home" strokeWidth="1.5" />
                <p className="text-[12px]">Home</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="create">
                <FeatherIcon icon="plus-circle" strokeWidth="1.5" />
                <p className="text-[12px]">Create</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="folder">
                <FeatherIcon icon="folder" strokeWidth="1.5" />
                <p className="text-[12px]">folder</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="Apps">
                <img src={appicon} className="h-8" alt="appicon" />
                <p className="text-[12px]">Apps</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label='Admin'>
                <img src={adminicon} className="h-8" alt="adminicon" />
                <p className="text-[12px]">Admin</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="outlook">
                <img src={outlook} className="h-8" alt="Outlookicon" />
                <p className="text-[12px]">Outlook</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="Teams">
                <img src={teams} className="h-8" alt="Teamsicon" />
                <p className="text-[12px]">Teams</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="Word">
                <img src={word} className="h-8" alt="wordicon" />
                <p className="text-[12px]">Word</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="Excel">
                <img src={excel} className="h-8" alt="excelicon" />
                <p className="text-[12px]">Excel</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="PowerPoint">
                <img src={powerpoint} className="h-8" alt="Powerpointicon" />
                <p className="text-[12px]">PowerPoint</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label='oneNote'>
                <img src={onenote} className="h-8" alt="Onenoteicon" />
                <p className="text-[12px]">OneNote</p>
            </button>
            <button className="flex flex-col items-center p-2 w-[100%] " aria-label="More options">

                <FeatherIcon icon="more-horizontal" strokeWidth="1.5" />

            </button>
        </nav>
    )
}

export default sidenav