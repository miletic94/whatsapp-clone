import React, { useRef } from 'react'
import { Container, Form, Button } from "react-bootstrap"
import { v4 as uuidV4 } from "uuid"

export default function Login({ onIdSubmit }) {
    localStorage.clear()
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        
        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }
    return (
        <Container className="align-items-center justify-content-center d-flex" style={{height: "100vh"}}>
           <Form className="w-100" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Enter Your Id</Form.Label>
                <Form.Control type="text" ref={idRef} required />
            </Form.Group>
            <Button type="submit" className="mr-2">Log In</Button>
            <Button onClick={createNewId} variant="secondary">Create a New IDs</Button>
           </Form>
           
        </Container>
    )
}
