import React, { useState } from 'react';
import styled from 'styled-components';

const FormBox = styled.div `
    height: 100%;
    grid-area: form;
`

const Form = styled.form `
    height: 100%;
    display: flex;
    align-items: center;
`

const UserInput = styled.input `
    width: 80%;
    height: 50px;
    background-color: #c1c1c1;
    border-radius: 100px;
    padding: 0px 20px;
`
function SendMessageForm( { sendMessage } ){

    const [query, setQuery] = useState("")

    const onSubmit = e => {
        e.preventDefault();
        if(query.length > 0){
            sendMessage(query)
        }
        setQuery('')
    }

    const handleChange = e => {
        setQuery(e.target.value)
    }

    return(
            <FormBox>
                <Form onSubmit={onSubmit}>
                    <UserInput onChange={handleChange} value={query} />
                </Form>
            </FormBox>
    )
}

export default React.memo(SendMessageForm);