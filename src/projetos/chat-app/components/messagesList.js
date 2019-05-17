import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div `
    grid-area: message;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
`

const MessageBox = styled.div `
    max-width: 80%;
    background-color: black;
    grid-area: message;
`
const MessageText = styled.span `
    color: white;
`

function MessagesList( { message, user } ){
    if(typeof message !== undefined && message){
        return (
            <MessageContainer>
                {
                    message.map((message) => (
                        <MessageBox>
                            <MessageText> {message.senderId} </MessageText>
                            <MessageText> {message.text} </MessageText>
                        </MessageBox>
                    ))
                }
            </MessageContainer>
        )
    }
}

export default React.memo(MessagesList)