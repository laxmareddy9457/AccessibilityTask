
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
        <div
            className="sidenav w-[80px] overflow-y-scroll h-[100%]  flex flex-col  items-center bg-[#f0f0f0] overflow-y-auto py-5 [@media(max-width:368px)]:hidden">
            <div className=" flex flex-col items-center p-2  w-[100%]">
                <FeatherIcon icon="grid" strokeWidth="1.5" />
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <FeatherIcon icon="home" strokeWidth="1.5" />
                <p className="text-[12px]">Home</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <FeatherIcon icon="plus-circle" strokeWidth="1.5" />
                <p className="text-[12px]">Create</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <FeatherIcon icon="folder" strokeWidth="1.5" />
                <p className="text-[12px]">folder</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={appicon} className="h-8" alt="appicon" />
                <p className="text-[12px]">Apps</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={adminicon} className="h-8" alt="Admin" />
                <p className="text-[12px]">Admin</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={outlook} className="h-8" alt="Outlook" />
                <p className="text-[12px]">Outlook</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={teams} className="h-8" alt="Teams" />
                <p className="text-[12px]">Teams</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={word} className="h-8" alt="Word" />
                <p className="text-[12px]">Word</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={excel} className="h-8" alt="Excel" />
                <p className="text-[12px]">Excel</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={powerpoint} className="h-8" alt="PowerPoint" />
                <p className="text-[12px]">PowerPoint</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">
                <img src={onenote} className="h-8" alt="OneNote" />
                <p className="text-[12px]">OneNote</p>
            </div>
            <div className="flex flex-col items-center p-2 w-[100%] ">

                <FeatherIcon icon="more-horizontal" strokeWidth="1.5" />
            </div>
        </div>
    )
}

export default sidenav