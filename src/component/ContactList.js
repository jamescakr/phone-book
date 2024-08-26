import React from "react";
import SearchBox from "./SearchBox";
import ContactInfo from "./ContactInfo";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.filteredContactList);
  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <ContactInfo item={item} />
      ))}
    </div>
  );
};

export default ContactList;
