import { Routes, Route } from "react-router-dom";
import Sidebar  from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard";


const App =()=>{
  return(
    <div className="flex h-screen bg-[#f8f9fb]">
      <Sidebar/>
      <div className="flex flex-col flex-1">
        <Header/>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;