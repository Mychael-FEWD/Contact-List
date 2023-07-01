// import { useState } from "react";

export default function ContactRow({ contact, onSelect }) {
  return (
    <tr key={contact.id} onClick={() => onSelect(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
