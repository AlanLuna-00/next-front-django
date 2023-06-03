"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useCreateUser from "@/hooks/useCreateUser";
import useUpdateUser from "@/hooks/useUpdateUser";

const UserForm = ({ initialValues, onSubmit, isEditing }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const { createUser } = useCreateUser();
  const { updateUser } = useUpdateUser(initialValues?.id || null);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      if (isEditing) {
        await onSubmit(updateUser(values));
      } else {
        await onSubmit(createUser, values);
        console.log("values", values);
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!values.name) {
      errors.name = "Nombre es requerido";
    }
    if (!values.email) {
      errors.email = "Email es requerido";
    }
    if (!values.password) {
      errors.password = "Contraseña es requerida";
    }
    if (!values.phone) {
      errors.phone = "Teléfono es requerido";
    }
    if (!values.username) {
      errors.username = "Username es requerido";
    }
    if (!values.address) {
      errors.address = "Dirección es requerida";
    }

    if (!values.date_of_birth) {
      errors.date_of_birth = "Fecha de nacimiento es requerida";
    }

    if (!values.nationality) {
      errors.nationality = "Nacionalidad es requerida";
    }

    return errors;
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name && "border-red-500"
            }`}
            id="name"
            name="name"
            type="text"
            value={values.name || ""}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email && "border-red-500"
            }`}
            id="email"
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password && "border-red-500"
            }`}
            id="password"
            name="password"
            type="password"
            value={values.password || ""}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phone && "border-red-500"
            }`}
            id="phone"
            name="phone"
            type="text"
            value={values.phone || ""}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Nombre de usuario
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.username && "border-red-500"
            }`}
            id="username"
            name="username"
            type="text"
            value={values.username || ""}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Dirección
          </label>
          <input
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.address && "border-red-500"
            }`}
            id="address"
            name="address"
            type="text"
            value={values.address || ""}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date_of_birth"
          >
            Fecha de nacimiento
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date_of_birth"
            name="date_of_birth"
            type="date"
            onChange={handleChange}
          />
        </div>
        {errors.date_of_birth && (
          <p className="text-red-500 text-xs mt-1">{errors.date_of_birth}</p>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nationality"
          >
            Nacionalidad
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nationality"
            name="nationality"
            type="text"
            onChange={handleChange}
          />
        </div>
        {errors.nationality && (
          <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>
        )}
        <div className="mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isEditing ? "Actualizar" : "Crear"}
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            type="button"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
