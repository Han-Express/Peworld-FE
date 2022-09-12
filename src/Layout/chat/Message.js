import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../../redux/action/addMessages'
import { getMessages } from '../../redux/action/getMessages'
import { getUser } from '../../redux/action/getUser'
import {io} from 'socket.io-client'

const Message = ({conversation}) => {
    const auth = useSelector(state => state.auth)
    // const {data: messages, loading} = useSelector(state => state.messages)
    const {data: post, loading: postLoading} = useSelector(state => state.addMessages)
    const {socket} = useSelector(state => state.socket)
    const [message, setMessage] = useState();
    const [socketMsg, setSocketMsg] = useState([])
    // const [socket, setSocket] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const [msg, setMsg] = useState(null)

    const dispatch = useDispatch()
    console.log(socketMsg[0]?.user)
    console.log(socket)
    console.log(msg, 'ini msg')
    console.log(conversation.user, 'ini user')
    // console.log(messages, 'jalan')

    // useEffect(() => {
    //     setSocket(io('http://localhost:3001'))
        
    // },[])
    // useEffect(()=> {
    //     socket?.emit("newUser", auth.data.userId)
    //   }, [socket, auth.data] )
    const handleSend = (e) => {
        dispatch(addMessages({
            conversation_id: conversation.id,
            text: message,
            sender_id: auth.data.userId
        }))
        socket.emit('sendMessage',{
            user: auth.data.userId,
            message: message,
            receiverId: conversation.user,
            header: ''
        })

    }
    useEffect( () => {
        // dispatch(getMessages(conversation.id))
        // setRefetch(!refetch)
        axios.get(`${process.env.REACT_APP_URL_BE}api/v1/chat/messages/${conversation.id}`)
            .then(res => {
                setSocketMsg([])
                setMsg(res.data.data)})
            .catch((err) => console.log(err))
    },[post, conversation])

    useEffect(() => {
        socketMsg && 
        socketMsg[0]?.sender_id == conversation.user &&
         setMsg((prev) => [...prev, ...socketMsg])
    }, [socketMsg])
    // useEffect(() => {
    //     setSocketMsg((prev) => [...prev, ...messages.data])
    // }, [messages])

    useEffect(() => {
        socket?.on('getMessage', (data) => {
            setSocketMsg((prev) => [...prev, {
                sender_id: data.user,
                text: data.message,
                receiverId: data.receiverId
            }])
        })
    }, [socket])
  return (
    <div className="text-black shadow-2xl sm:rounded-r-xl border border-sky-100 flex flex-col sm:w-3/5 bg-white sm:p-10">
                        {msg?.map((item, index) => {
                            return  <CardMessage 
                            item={item} 
                            key={index}     
                            />
                        })}
                        <div className="ml-6 mr-6 flex items-center mt-72 mb-5">
                            <input className="
                            bg-white
                            outline-none
                            border-2
                            border-[#5E50A1]
                            w-full 
                            py-2 
                            px-3 
                            focus:border-violet-900
                            shadow-sm placeholder-slate-400
                            focus:outline-none  focus:ring-1 focus:ring-[#5E50A1]
                             disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                            rounded-2xl"
                                type="text" 
                                placeholder="type message..."
                                onChange={(e) => setMessage(e.target.value)}
                             />
                            <button 
                                className="rounded-full bg-violet-900 w-8 h-8 flex items-center justify-center ml-3"
                                onClick={handleSend}    
                            >
                                <img className="" src="/img/send.svg" />
                            </button>
                        </div>
                    </div>
  )
}

const CardMessage = ({item}) => {
    const auth = useSelector(state => state.auth)
    const {data} = useSelector(state => state.user)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(item.sender_id != auth.data.userId) {
            axios.get(`${process.env.REACT_APP_URL_BE}api/v1/users/${item.sender_id}`)
                .then(res => setUser(res.data.data[0]))
                .catch(err => console.log(err))
        } else {
            axios.get(`${process.env.REACT_APP_URL_BE}api/v1/users/${auth.data.userId}`)
                .then(res => setUser(res.data.data[0]))
                .catch(err => console.log(err))
        }
    },[] )

    return(
        <> 
        
        {item.sender_id != auth.data.userId  ? 
            <div className="shadow-2xl p-3 rounded-xl flex flex-row sm:mr-4 mb-10 mt-10 mx-2 items-center">
                            <div className="avatar mr-5">
                                <div className="w-14 h-14 rounded-full">
                                    <img src={`${process.env.REACT_APP_URL_BE}static/${user?.image}`} />
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className='flex  justify-between'>
                                    <h1 className="font-bold text-lg mb-3">
                                        {user?.name}
                                    </h1>
                                    <p className='text-sm text-gray-400'>
                                        02.14 PM
                                    </p>
                                </div>

                                <p className="text-base">
                                    {item.text}
                                </p>
                            </div>
                        </div> :
                        <div className="shadow-2xl p-3 rounded-xl flex flex-row sm:mr-4 mb-10 mt-10 mx-2 items-center justify-between">
                            <div className="flex flex-1 flex-col">
                                <div className='flex justify-between'>
                                    <p className='text-sm text-gray-400'>
                                        02.14 PM
                                    </p>
                                    <h1 className="font-bold text-lg mb-3">
                                        {user?.name}
                                    </h1>

                                </div>

                                <p className="text-base">
                                    {item.text}
                                </p>
                            </div>
                            <div className="avatar ml-5">
                                <div className="w-14 h-14 rounded-full">
                                    <img src={`${process.env.REACT_APP_URL_BE}static/${user?.image}`} />
                                </div>
                            </div>
                        </div>
        }
                
        </>
    )
}

export default Message