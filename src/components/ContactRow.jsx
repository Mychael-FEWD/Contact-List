// import { useState } from "react";

export default function ContactRow({ contact }) {
  return (
    <tr key={contact.id}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
