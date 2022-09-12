import { useState } from "react"
import { useSelector } from "react-redux"
import ChatList from "./ChatList"
import Message from "./Message"

const ChatLayout = () => {
    const auth = useSelector(state => state.auth)
    const [conversation, setConversation] = useState({
        id: 0,
        user: ''
    })
    console.log(conversation, "ini conversation")
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>

            
            <main className="flex flex-col ">
                <div className='sm:flex flex-row sm:mx-32 my-20 rounded-2xl'>
                    <ChatList
                        setConversation={setConversation}
                        conversation={conversation}
                    />
                    {/* batas */}
                    <Message
                        conversation={conversation}
                    />
                </div>
            </main>
        </>
    )
}

export default ChatLayout