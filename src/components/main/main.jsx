
import outlook from "../../resources/outllok.png";
import teams from "../../resources/teams.png";
import word from "../../resources/word.png";
import excel from "../../resources/excel.png";
import powerpoint from "../../resources/powerpoint.png";
import onenote from "../../resources/onenote.png";
import FeatherIcon from 'feather-icons-react';
import microsoftoffice from "../../resources/microsoftoffice.png";
import micro365 from "../../resources/microsoft365.png";
import onedrive from "../../resources/Onedrive.png";
import appstudio from "../../resources/Appstudio.png";
import assignmenticon from "../../resources/assignmenticon.png";
import excelfull from "../../resources/excelfull.png";
import powerbi from "../../resources/powerbi.png";
import powerpointfull from "../../resources/powerpointfull.png";
import taskmodule from "../../resources/taskmodule.png";
import wordfull from "../../resources/wordfull.png";

const main = () => {
    return (
        <div
            className="content rounded-tl-xl overflow-y-auto pb-16 h-lvh bg-gray shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
            <div
                className="rounded-tl-xl flex items-center bg-gradient-to-r from-red-100 to-blue-100 py-4 px-4 text-sm">
                <img src={microsoftoffice} className="ml-auto  h-6 mr-2 " alt="microsoftoffice" />

                <FeatherIcon icon="arrow-right" strokeWidth="1" className="mr-2" />
                <img src={micro365} className="h-6 mr-2" alt="micro365" />
                <span>
                    The Office app is becoming the new Microsoft 365 app. Your home to
                    find, create, and share your content and ideas.
                    <span className="text-red-600  cursor-pointer">Learn More</span>
                </span>
                <FeatherIcon icon="x" strokeWidth="1" className="ml-auto cursor-pointer" />
            </div>
            <div className="mt-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="flex items-center justify-between p-2">
                    <h2 id="apps" className="text-xl font-semibold">Apps</h2>
                    <button
                        className="flex items-center bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700">
                        <FeatherIcon icon='plus-square' classNameName='mr-1' /> Add apps
                    </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                    <div
                        className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition">
                        <img src={teams} className="h-12" alt="teams" />
                        <p className="mt-2 text-sm font-medium">Teams</p>
                    </div>
                    <div
                        className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition">
                        <img src=
                            {word} className="h-12" alt="word" />
                        <p className="mt-2 text-sm font-medium">Word</p>
                    </div>
                    <div
                        className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition">
                        <img src={excel} className="h-12" alt="excel" />
                        <p className="mt-2 text-sm font-medium">Excel</p>
                    </div>
                    <div
                        className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition">
                        <img src={powerpoint} className="h-12" alt="powerpoint" />
                        <p className="mt-2 text-sm font-medium">PowerPoint</p>
                    </div>
                    <div
                        className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition">
                        <img src={outlook} className="h-12" alt="outlook" />
                        <p className="mt-2 text-sm font-medium">Outlook</p>
                    </div>
                    <div
                        className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition">
                        <img src={onedrive} className="h-12" alt="onedrive" />
                        <p className="mt-2 text-sm font-medium">OneDrive</p>
                    </div>
                    <div
                        className="bg-white shadow p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition">
                        <img src={onenote} className="h-12" alt="onenote" />
                        <p className="mt-2 text-sm font-medium">OneNote</p>
                    </div>
                </div>

                <div className="text-right">
                    <button className="text-red-600 hover:underline text-sm">
                        All apps →
                    </button>
                </div>
                <div>
                    <h3 id="previously added" className="text-lg font-semibold mt-4 mb-3">Previously added</h3>
                    <div className="grid md:grid-cols-3 gap-3">
                        <div className="flex items-center  p-3 rounded-md hover:shadow-lg transition cursor-pointer">
                            <img src={appstudio} alt="appstudio" className="h-8 mr-3" />
                            <p>App Studio</p>
                        </div>
                        <div className="flex items-center  p-3 rounded-md hover:shadow-lg transition cursor-pointer">
                            <img src={assignmenticon} className="h-8 mr-3" alt="assignmenticon" />
                            <p>Assignments</p>
                        </div>
                        <div className="flex items-center  p-3 rounded-md hover:shadow-lg transition cursor-pointer">
                            <img src={excelfull} className="h-8 mr-3" alt="excel" />
                            <p>Excel</p>
                        </div>
                        <div className="flex items-center  p-3 rounded-md hover:shadow-lg transition cursor-pointer">
                            <img src={powerbi} className="h-8 mr-3" alt="powerbi" />
                            <p>Power BI</p>
                        </div>
                        <div className="flex items-center  p-3 rounded-md hover:shadow-lg transition cursor-pointer">
                            <img src={powerpointfull} className="h-8 mr-3" alt="powerpoint" />
                            <p>PowerPoint</p>
                        </div>
                        <div className="flex items-center  p-3 rounded-md hover:shadow-lg transition cursor-pointer">
                            <img src={taskmodule} className="h-8 mr-3" alt="taskmodule" />
                            <p>Task Module Sample</p>
                        </div>
                        <div className="flex items-center  p-3 rounded-md hover:shadow-lg transition cursor-pointer">
                            <img src={wordfull} className="h-8 mr-3" alt="word" />
                            <p>Word</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                    <button
                        className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition">
                        Productivity
                    </button>
                    <button
                        className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition">
                        Utilities
                    </button>
                    <button
                        className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition">
                        Education
                    </button>
                    <button
                        className="border border-gray-400 rounded-full px-4 py-1 text-sm hover:bg-black hover:text-white transition">
                        4 more+
                    </button>
                </div>
            </div>
        </div>
    )
}

export default main