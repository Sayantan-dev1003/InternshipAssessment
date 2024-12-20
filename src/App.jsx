import Dashboard from "./Components/Dashboard"
import Header from "./Components/Header"
import SideBar from "./Components/SideBar"

const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-1 bg-slate-200">
          <Header />
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App