import React from 'react';
import Modal from './Modal/Modal';
import { Field, Form, Formik } from 'formik';
import { addDoc, collection, Firestore } from 'firebase/firestore';
import { db } from '../config/firebase';


const AddAndUpdateContact = ({ onClose, isOpen }) => {

    const addContact = async (contact) => {
        try 
        {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
        }
        catch (error)
        {
            console.log(error);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>


            <div className="ml-4  mb-4 p-4">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                    }}

                    onSubmit={(values) => {
                        console.log(values);
                        addContact(values);
                    }}
                >
                    <Form className='flex flex-col gap-4'>
                        <h2 className="text-xl font-bold mt-0 mb-2 text-center">Welcome to the Contact Manager</h2>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name " className='font-medium'>Name</label>
                            <Field name="name"
                                className="=h-10 border" />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='font-medium'>Email</label>
                            <Field type="email" name="email"
                                className="=h-10 border" />
                        </div>
                        <button className='border bg-orange px-3 py-1.5 self-end text-zinc-950' >Add Contact</button>
                    </Form>
                </Formik>



                {/* <p>We're glad to have you here. Use the search bar to find contacts and the plus icon to add new ones. Click on a contact to view more details.</p> */}
            </div>
        </Modal>
    );
};

export default AddAndUpdateContact;
