import { AsyncStorage } from 'react-native'

const getPage = (messages = [], perPage = 10, page = 1) => {
    const pages = messages.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/perPage)

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }
        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
    return pages[(page - 1)]
}

export const store = async message => {
    const messages = await AsyncStorage.getItem('messages')
    await AsyncStorage.setItem('messages',
        JSON.stringify([message, ...(messages && messages)])
    )
}

export const getMessages = async (page, perPage) => {
    const messages = await AsyncStorage.getItem('messages')
    return {
        messages: messages ? getPage(JSON.parse(messages), perPage, page) : [],
        page,
        perPage
    }
}