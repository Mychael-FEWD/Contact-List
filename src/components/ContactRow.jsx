export default function ContactRow({ contact, onSelect }) {
  return (
    <tr
      className="contacts"
      key={contact.id}
      onClick={() => onSelect(contact.id)}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
