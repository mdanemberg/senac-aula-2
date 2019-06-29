import React from 'react'
import { AsyncStorage } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import Socket from 'socket.io-client'

import { store, getMessages } from '../database'

const ws = Socket('https://senac-shopping-list-api.herokuapp.com', {
  transports: ['websocket'],
  jsonp: false
})

const myId = 'joao'
const perPage = 10

class Chat extends React.Component {
    render () {
        return (
            <GiftedChat
                // isLoadingEarlier={isLoading}
                // loadEarlier={page <= totalPages}
                // onLoadEarlier={loadNextPage}
                // messages={messages}
                // onSend={sendMessage}
                renderAvatar={null}
                renderUsernameOnMessage
                user={{
                    _id: myId
                }}
            />
        )
    }
}

export default Chat