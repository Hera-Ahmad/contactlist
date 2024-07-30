
import React  from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import { db } from '../config/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclouse from "../hooks/useDisclouse";


const ContactCard = ({ contact }) => {
    const { isOpen, onClose, onOpen } = useDisclouse();

    const deleteContact = async (id) => {
        try 
        { 
            console.log(id)
           const docRef =doc(db, "contacts", id);
           await deleteDoc(docRef).then(()=>{console.log("Contact is Deleted successfully");})
           alert("Contact is deleted successfully");
           console.log(docRef);
        }
        catch (error)
        {
            console.log("Error deleting contact:", error);
    }
}

  return (
    <>
    <div
      key={contact.id}
      className="flex items-center justify-between rounded-lg bg-yellow p-2 text-black"
    >
      <div className="flex items-center gap-2">
        
        <HiOutlineUserCircle className="text-4xl text-orange" />
        <div>
          <h2 className="font-bold">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-3xl">
        
        <RiEditCircleLine  
        onClick={onOpen}
        className="cursor-pointer" />
        
        <IoMdTrash 
         onClick={() => deleteContact(contact.id)}
        className="cursor-pointer text-orange" />
      </div>
    </div>
    <AddAndUpdateContact 
    contact={contact} 
    isUpdate 
    isOpen={isOpen} 
    onClose={onClose}  />
   </>
  );
};
 

export default ContactCard;
