// ParentComponent.jsx
"use client"
import React from 'react';
import MyDynamicForm from './MyDynamicForm'; // Assuming the form component is in the same directory
import { z, ZodError } from 'zod';

const ParentComponent = () => {
  // Sample JSON array
  const formDataArray = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'age', label: 'Age', type: 'number' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
  ];

  // Define the Zod schema for the form data
  const schema = z.object({
    firstName: z.string().min(3).max(50),
    lastName: z.string().min(3).max(50),
    email: z.string().email(),
    age: z.string(),
    address: z.string().min(5).max(100),
    gender: z.string().optional(),
  });

  const onSubmit = (data) => {
    console.log('Form data submitted from ParentComponent:', data);
    // Handle form submission logic here
  };
  return (
    <div>
      <h2>Parent Component</h2>
      <MyDynamicForm formDataArray={formDataArray} schema={schema} onSubmit={onSubmit}/>
    </div>
  );
};

export default ParentComponent;
