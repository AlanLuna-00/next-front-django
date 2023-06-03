"use client";
import React, { useState } from "react";
import UserForm from "@/components/UserForm";
import useCreateUser from "@/hooks/useCreateUser";

const Form = () => {
  const { createUser } = useCreateUser();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    username: "",
    address: "",
    nationality: "",
    date_of_birth: "",
  });

  const handleSubmit = async (onSubmit, values) => {
    await onSubmit(values);
  };

  return (
    <div>
      <h1>Crear usuario</h1>
      <UserForm initialValues={values} onSubmit={handleSubmit} />{" "}
    </div>
  );
};

export default Form;
