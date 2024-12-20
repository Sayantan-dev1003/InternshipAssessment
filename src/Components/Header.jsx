const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center px-4 py-2 gap-10">
                <div className="w-1/2">
                    <img src="/Search.png" alt="" className="h-4 w-4 relative top-8 left-5" />
                    <input type="text" placeholder="Search your course" className="w-full rounded-xl py-3 px-12" />
                </div>
                <div className="flex items-center justify-between gap-9">
                    <img src="/Help2.png" alt="" className="w-5 h-5" />
                    <img src="/Message.png" alt="" className="w-5 h-5" />
                    <img src="/Settings2.png" alt="" className="w-5 h-5" />
                    <img src="/Notification.png" alt="" className="w-5 h-5" />
                    <img src="/profilePic.jpg" alt="" className="w-10 h-10 rounded-lg" />
                    <p className="notoSans font-semibold text-lg">Sayantan Halder</p>
                </div>
            </div>
        </>
    )
}

export default Header