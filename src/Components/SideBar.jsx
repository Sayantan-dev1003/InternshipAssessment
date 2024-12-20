const SideBar = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen w-60 flex flex-col items-start py-8 px-3">
                <div className="flex flex-col items-center">
                    <img src="/Logo.png" alt="" className="w-[98px] h-[42px]" />
                </div>
                <nav className="flex flex-col mt-8 w-full">
                    <ul className="space-y-4 w-full notoSans">
                        <li className="flex items-center justify-start gap-3 rounded-md p-3 hover:bg-gray-200 hover:text-black">
                            <img src="/Dashboard.png" alt="" className="w-5 h-5" />
                            <h4 className="font-bold font-mono text-base text-gray-500">Dashboard</h4>
                        </li>
                        <li className="flex items-center justify-start gap-3 rounded-md p-3 hover:bg-gray-200 hover:text-black">
                            <img src="/Students.png" alt="" className="w-5 h-5" />
                            <h4 className="font-bold font-mono text-base text-gray-500">Students</h4>
                        </li>
                        <li className="flex items-center justify-start gap-3 rounded-md p-3 hover:bg-gray-200 hover:text-black">
                            <img src="/Chapter.png" alt="" className="w-5 h-5" />
                            <h4 className="font-bold font-mono text-base text-gray-500">Chapter</h4>
                        </li>
                        <li className="flex items-center justify-start gap-3 rounded-md p-3 hover:bg-gray-200 hover:text-black">
                            <img src="/Help.png" alt="" className="w-5 h-5" />
                            <h4 className="font-bold font-mono text-base text-gray-500">Help</h4>
                        </li>
                        <li className="flex items-center justify-start gap-3 rounded-md p-3 hover:bg-gray-200 hover:text-black">
                            <img src="/Reports.png" alt="" className="w-5 h-5" />
                            <h4 className="font-bold font-mono text-base text-gray-500">Reports</h4>
                        </li>
                        <li className="flex items-center justify-start gap-3 rounded-md p-3 hover:bg-gray-200 hover:text-black">
                            <img src="/Settings.png" alt="" className="w-5 h-5" />
                            <h4 className="font-bold font-mono text-base text-gray-500">Settings</h4>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default SideBar