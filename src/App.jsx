import { useState } from "react"
import { Route, Routes } from "react-router"
import ChatScreens from "./Screens/ChatScreens/ChatScreens.jsx"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen.jsx"
import ContactDetailContextProvider from "./Context/ContactDetailContext.jsx"
import ContactListContextProvider from "./Context/ContactsListContext.jsx"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<ContactListContextProvider />}>
          <Route path="/" element={<ChatScreens />} />
          <Route path="/chat/:contact_id" element={<ContactDetailContextProvider />}>
            <Route path="/chat/:contact_id/messages" element={<MessagesScreen />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
