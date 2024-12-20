const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center p-4 gap-10">
                <input type="text" placeholder="Search your course" className="w-1/2 rounded-xl py-3 px-5" />
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