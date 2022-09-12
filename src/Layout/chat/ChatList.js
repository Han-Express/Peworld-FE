import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConversation } from '../../redux/action/getConversation'
import { getUser } from '../../redux/action/getUser'

const ChatList = ({setConversation}) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {data, loading, error} = useSelector(state => state.conversation)
    
    useEffect(() => {
        dispatch(getConversation(auth.data.userId))
    }, [])

    // useEffect(() => {
    //     data?
    //     setConversation()
    // })
    console.log(data, 'ini data')

  return (
    <div className="sm:w-2/5 bg-[#5E50A1] p-10 sm:rounded-l-xl mx-2">
                        <div className='flex justify-flex justify-center items-center mb-7 sm:mx-8'>
                            <input className='
                            bg-white
                            px-5
                            h-12
                            text-xl
                            rounded-3xl
                            w-full
                        ' type='text' placeholder="search chat..." />

                        </div>
                        <h1 className="mb-10 text-white font-bold text-lg text-center">
                            Choose a staff you want to talk with
                        </h1>
                        
                        
                        <div className="flex flex-col mr-4 mb-10 text-white">
                        {data?.data.map((item) => {
                            return(
                                <ConversationCard 
                                    key={item.conversation_id}
                                    item={item}
                                    setConversation={setConversation}
                                />
                                                           )
                        })}    
                        </div>
                    </div>
  )
}

const ConversationCard = ({item, setConversation}) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {data, loading, error} = useSelector(state => state.user)
    const [users, setUsers] = useState(null)
    // useEffect(() => {
    //     dispatch(getUser(auth.data.userId === item.receiver_id ? item.sender_id : item.receiver_id))
    // }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL_BE}api/v1/users/${
            auth.data.userId === item.receiver_id ? item.sender_id : item.receiver_id}`)
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
    }, [item])
    return(
        
        <>
        {users?.data?.map((user) => {
            return(
            <div className='flex'
                onClick={() => setConversation((prev) => ({
                    ...prev,
                    id: item.conversation_id,
                    user: user.user_id,
                }))}
            >
            <div className="avatar mr-5">
                <div className="w-20 h-20 rounded-full">
                    {user.image ? 
                        <img src={`https://coral-app-3yjfb.ondigitalocean.app/static/${user.image}`} />
                    :  <img src='/img/companyProfile.png' />}
                   
                </div>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-lg">
                    {user.name}
                </p>
                <p className="text-base">
                    Hey, I'm {user.name}, Let's talk and share whats on your thoughts!
                </p>
            </div>
            <hr />
            </div>
            )
        })}
            
        </>
 
    )
}

export default ChatList