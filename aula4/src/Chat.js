import React, { useState, useEffect } from 'react'
import { AsyncStorage, Button, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Socket from 'socket.io-client'
import * as Speech from 'expo-speech';
import Camera from './components/Camera'

import { store, getMessages } from '../database'

const ws = Socket('https://senac-shopping-list-api.herokuapp.com', {
  transports: ['websocket'],
  jsonp: false
})

const myId = 'joao'
const perPage = 10

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [isCameraVisible, setIsCameraVisible] = useState(false)
    const [image, setImage] = useState(null)

    useEffect(() => {
        // clear()
        ws.connect()
        ws.on('message', message => {
            setMessage(message)
            if (myId !== message.user._id) {
                setMessages(GiftedChat.append(messages, [message]))
            }
        })
    }, [messages])

    // useEffect(() => {
    //     if (messages[0]) {
    //         Speech.speak(messages[0].text, { language: 'pt-br' })
    //     }
    // }, [messages])

    useEffect(() => {
        listMessages()
    }, [page])

    const clear = async () => {
        await AsyncStorage.clear()
    }

    const setMessage = async message => {
        await store(message)
    }

    const listMessages = async () => {
        const messagesList = await getMessages(page, perPage)
        console.log('messagesList', messagesList)
        setTotalPages(messagesList.totalPages)
        setIsLoading(false)
        setMessages(
            GiftedChat.prepend(messages, messagesList.messages)
        )
    }

    const sendMessage = newMessages => {
        if (newMessages[0].text.length < 5) {
            alert('Mensagem tem que ter mais de 5 caracteres')
        }
        const imageMessage = [{...newMessages[0], image}]
        const namedMessage = [
            {
                ...imageMessage[0],
                user: {_id: myId, name: myId}
            }
        ]
        setMessages(GiftedChat.append(messages, namedMessage))
        setImage(null)
        ws.emit('message', namedMessage[0])
    }

    const loadNextPage = () => {
        setIsLoading(true)
        setPage(page + 1)
    }

    return (
        <React.Fragment>
            <Camera
                visible={isCameraVisible}
                close={() => setIsCameraVisible(false)}
                callback={setImage}
            />
            <GiftedChat
                isLoadingEarlier={isLoading}
                loadEarlier={page <= totalPages}
                onLoadEarlier={loadNextPage}
                messages={messages}
                onSend={sendMessage}
                renderAvatar={null}
                renderUsernameOnMessage
                alwaysShowSend
                renderActions={() =>
                    <Button
                        title='camera'
                        onPress={() => setIsCameraVisible(true)}
                    />
                }
                user={{
                    _id: myId
                }}
            />
        </React.Fragment>
    )
}

export default Chat