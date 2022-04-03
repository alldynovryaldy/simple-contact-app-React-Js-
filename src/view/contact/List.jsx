import { useState } from "react";
import ContactList from "../component/ContactList";

const List = () => {
   const [contacts, setContacts] = useState([
      { id: 1, name: "Alldy", number: "082138534673" },
      { id: 2, name: "Novryaldy", number: "082222222" },
      { id: 3, name: "empat", number: "082222222" },
      { id: 4, name: "Lima", number: "082222222" },
   ]);

   // init handleDelet
   const handleDelete = (idContact) => {
      // How to it work
      // 1. filter semua data yang id nya tidak sama dengan id yang di parsing dan di tampung di dalam variable filterContact
      const filterContact = contacts.filter((value) => value.id !== idContact);

      // 2. update state contact dgn data baru
      setContacts(filterContact);

      // note : data akan reset jika halaman di refresh, karena data hanya di simpan dalam variable objek, bukan database
   };

   // parsing state contact & event handler ke Child component yaitu contactlist.jsx
   return <ContactList contacts={contacts} handleDelete={handleDelete} />;
};

export default List;
