import React from "react";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import  useDisclouse from "./hooks/useDisclouse"


const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse(); 



  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactsLists);
      } catch (error) { }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className=" mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2 ">
          <div className=" relative flex items-center flex-grow ">
            <CiSearch className="ml-1 absolute text-white text-3xl" />

            <input
              type="text"
              className=" flex-grow border bg-transparent
        border-white rounded-md h-10 text-white pl-10"
            />
          </div>
          <div>
            <FaCirclePlus onClick={onOpen} className="text-5xl cursor-pointer text-white " />
          </div>
        </div>
        <div className="mt-10  gap-3 flex  flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact   onClose={onClose}   isOpen={isOpen}/>

    </>
  );
};

export default App;
