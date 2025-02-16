import MainConversation from "./Components/MainConversation"
import SideBar from "./Components/SideBar";
import Aside from "./Components/Aside";

function App() { 

  console.log("Hello")

  return (
    <>
      <SideBar/>
      <Aside/>
      <MainConversation/> 
    </>
  )
}

export default App