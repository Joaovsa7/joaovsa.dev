import React, { useState, useEffect } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { instance, username, httpToken, roomId } from './config';
import styled from 'styled-components';
import MessagesList from './components/messagesList';
import SendMessageForm from './components/SendMessageForm';

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
`

const ChatBox = styled.div `
    max-width: 450px;
    width: 100%;
    height: 500px;
    background-color: white;
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: 
        "sidebar message message message message"
        "sidebar message message message message"
        "sidebar message message message message"
        "sidebar form form form form";
    @media only screen and (max-width: 568px){
        max-width: 80vw;
    }
`

function Chat(){

    const [messages, setMessages] = useState([{}])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {

        const chatManager = new ChatManager({
            instanceLocator: instance,
            userId: username,
            tokenProvider: new TokenProvider({
                url: httpToken
            })
        }, [])

        chatManager.connect()
        .then(currentUser => {
            setCurrentUser(currentUser)
            currentUser.subscribeToRoom({
                roomId: roomId,
                hooks: {
                    onMessage: message => {
                        messages.push(message)
                        setMessages([...messages, messages])
                    }
                }
            })
        })
        .catch(err => console.log(err)) 

    }, [])


    const sendMessage = (text) => {
        currentUser.sendMessage({
            text: text,
            roomId: "19413376"
        })
    }

    return (
            <Container>
               <ChatBox>
                   <div style={{gridArea: 'sidebar'}}>b</div>
                   <MessagesList  message={messages} />
                   <SendMessageForm sendMessage={sendMessage} />
               </ChatBox>
            </Container>
    )
}

export default React.memo(Chat)
// 7512939c-2c84-43bd-be14-40f64b102fdb:ih+168FHoyXPx9wrNZX7RRGPzg4gNjJ1Z9TAf5r+aHk=
// joaovsa.dev-chat