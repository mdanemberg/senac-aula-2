import React, { useState, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Socket from 'socket.io-client'

const ws = Socket('https://senac-shopping-list-api.herokuapp.com', {
  transports: ['websocket'],
  jsonp: false
})

// {
//     _id: 1,
//     text: 'My message',
//     createdAt: new Date(),
//     user: {
//         _id: 2,
//         name: 'React Native',
//     }
// }

const myId = 1

const Chat = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        ws.connect()
        ws.on('message', message => {
            if (myId !== message.user._id) {
                setMessages(GiftedChat.append(messages, [message]))
            }
        })
    }, [messages])

    const sendMessage = newMessages => {
        setMessages(GiftedChat.append(messages, newMessages))
        ws.emit('message', newMessages[0])
    }
    console.log(messages)
    return (
        <GiftedChat
            messages={messages}
            onSend={sendMessage}
            renderAvatar={null}
            user={{
                _id: myId
            }}
        />
    )
}

export default Chat