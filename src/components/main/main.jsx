
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
        <main
            role="main"
            aria-label="Explore Microsoft 365"
            className="content rounded-tl-xl overflow-y-auto pb-16 h-lvh bg-gray shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
            <div aria-label="notification"
                className="flex items-center px-4 py-4 text-sm rounded-tl-xl bg-gradient-to-r from-red-100 to-blue-100">
                <img src={microsoftoffice} className="h-6 ml-auto mr-2 " alt="microsoftoffice" />

                <FeatherIcon icon="arrow-right" strokeWidth="1" className="mr-2" />
                <img src={micro365} className="h-6 mr-2" alt="micro365" />
                <span>
                    The Office app is becoming the new Microsoft 365 app. Your home to
                    find, create, and share your content and ideas.
                    <span className="text-red-800 cursor-pointer">Learn More</span>
                </span>
                <button className="ml-auto " aria-label="clear notification" >
                    <FeatherIcon icon="x" strokeWidth="1" className="cursor-pointer" />
                </button>
            </div>
            <div className="px-4 mt-12 sm:px-8 md:px-12 lg:px-16 xl:px-20" role-="contentinfo" aria-label="content">
                <div aria-labelledby="apps" className="flex items-center justify-between p-2">
                    <h2 id="apps" className="text-xl font-semibold">Apps</h2>
                    <button
                        aria-label="Add apps"
                        className="flex items-center px-3 py-1 text-sm text-white bg-red-800 rounded-md hover:bg-red-700">
                        <FeatherIcon icon='plus-square' className='mr-1' /> Add apps
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" aria-labelledby="apps">
                    <button
                        className="flex flex-col items-center p-4 transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
                        <img src={teams} className="h-12" alt="teamslogo" />
                        <p className="mt-2 text-sm font-medium">Teams</p>
                    </button>
                    <button
                        className="flex flex-col items-center p-4 transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
                        <img src=
                            {word} className="h-12" alt="wordlogo" />
                        <p className="mt-2 text-sm font-medium">Word</p>
                    </button>
                    <button
                        className="flex flex-col items-center p-4 transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
                        <img src={excel} className="h-12" alt="excellogo" />
                        <p className="mt-2 text-sm font-medium">Excel</p>
                    </button>
                    <button
                        className="flex flex-col items-center p-4 transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
                        <img src={powerpoint} className="h-12" alt="powerpointlogo" />
                        <p className="mt-2 text-sm font-medium">PowerPoint</p>
                    </button>
                    <button
                        className="flex flex-col items-center p-4 transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
                        <img src={outlook} className="h-12" alt="outlooklogo" />
                        <p className="mt-2 text-sm font-medium">Outlook</p>
                    </button>
                    <button
                        className="flex flex-col items-center p-4 transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
                        <img src={onedrive} className="h-12" alt="onedrivelogo" />
                        <p className="mt-2 text-sm font-medium">OneDrive</p>
                    </button>
                    <button
                        className="flex flex-col items-center p-4 transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
                        <img src={onenote} className="h-12" alt="onenotelogo" />
                        <p className="mt-2 text-sm font-medium">OneNote</p>
                    </button>
                </div>

                <div className="text-right">
                    <button className="text-sm text-red-800 hover:underline">
                        All apps →
                    </button>
                </div>
                <div role="region" aria-label="previous added apps">
                    <h3 id="previouslyadded" className="mt-4 mb-3 text-lg font-semibold">Previously added</h3>
                    <div className="grid gap-3 md:grid-cols-3" aria-label="previous added apps">
                        <button className="flex items-center p-3 transition rounded-md cursor-pointer hover:shadow-lg">
                            <img src={appstudio} alt="appstudio" className="h-8 mr-3" />
                            <p>App Studio</p>
                        </button>
                        <button className="flex items-center p-3 transition rounded-md cursor-pointer hover:shadow-lg">
                            <img src={assignmenticon} className="h-8 mr-3" alt="assignmenticon" />
                            <p>Assignments</p>
                        </button>
                        <button className="flex items-center p-3 transition rounded-md cursor-pointer hover:shadow-lg">
                            <img src={excelfull} className="h-8 mr-3" alt="excel" />
                            <p>Excel</p>
                        </button>
                        <button className="flex items-center p-3 transition rounded-md cursor-pointer hover:shadow-lg">
                            <img src={powerbi} className="h-8 mr-3" alt="powerbi" />
                            <p>Power BI</p>
                        </button>
                        <button className="flex items-center p-3 transition rounded-md cursor-pointer hover:shadow-lg">
                            <img src={powerpointfull} className="h-8 mr-3" alt="powerpoint" />
                            <p>PowerPoint</p>
                        </button>
                        <button className="flex items-center p-3 transition rounded-md cursor-pointer hover:shadow-lg">
                            <img src={taskmodule} className="h-8 mr-3" alt="taskmodule" />
                            <p>Task Module Sample</p>
                        </button>
                        <button className="flex items-center p-3 transition rounded-md cursor-pointer hover:shadow-lg">
                            <img src={wordfull} className="h-8 mr-3" alt="word" />
                            <p>Word</p>
                        </button>
                    </div>
                </div>
                <div aria-label="categories" className="flex flex-wrap gap-2 mt-6">
                    <button
                        className="px-4 py-1 text-sm transition border border-gray-400 rounded-full hover:bg-black hover:text-white">
                        Productivity
                    </button>
                    <button
                        className="px-4 py-1 text-sm transition border border-gray-400 rounded-full hover:bg-black hover:text-white">
                        Utilities
                    </button>
                    <button
                        className="px-4 py-1 text-sm transition border border-gray-400 rounded-full hover:bg-black hover:text-white">
                        Education
                    </button>
                    <button
                        className="px-4 py-1 text-sm transition border border-gray-400 rounded-full hover:bg-black hover:text-white">
                        4 more+
                    </button>
                </div>
            </div>
        </main >
    )
}

export default main