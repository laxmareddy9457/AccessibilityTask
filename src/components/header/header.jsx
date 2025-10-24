
import FeatherIcon from 'feather-icons-react';
const header = () => {
    return (
        <div className="h-20  bg-gray flex items-center justify-between px-6">
            <section>
                <h1 className="text-red text-sm md:text-xl lg:text-2xl">Microsoft 365</h1>
            </section>
            <section className="w-[50%] flex gap-4 p-2 bg-white rounded border border-gray-300">
                <i data-feather="search" className="text-red-600 mr-2"></i>
                <input type="text" placeholder="Search" className="w-[100%] outline-none" />
            </section>
            <section>
                <div className="hidden md:flex items-center gap-4">
                    <FeatherIcon icon="calendar" strokeWidth="1" />
                    <FeatherIcon icon="settings" strokeWidth="1" />
                    <FeatherIcon icon="help-circle" strokeWidth="1" />
                    <button
                        className="border-2 border-gray-300 rounded-full p-1 w-10 h-10 flex items-center justify-center bg-gray-200">
                        <span className="font-medium">S</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default header