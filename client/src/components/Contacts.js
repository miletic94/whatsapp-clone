import React from 'react'
import { useContacts } from "../contexts/ContactsProvider"
import {ListGroup } from "react-bootstrap"

export default function Contacts() {
    const { contacts } = useContacts()

    return (
        <ListGroup variant="flash">
            {contacts.map((contact) => (
                <ListGroup.Item id={contact.id}>{contact.name}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}
