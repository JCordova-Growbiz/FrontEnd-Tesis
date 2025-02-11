import { useState } from "react"
import MainConversation from "./Components/MainConversation"
import SideBar from "./Components/SideBar";
import Aside from "./Components/Aside";

function App() {

  const [selectedConversationId, setSelectedConversationId] = useState(null);
  console.log("render")

  return (
    <>
      <SideBar/>
      <Aside/>
      <MainConversation conversationId={selectedConversationId}/>
    </>
  )
}

export default App