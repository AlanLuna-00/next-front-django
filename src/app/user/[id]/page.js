"use client";
import React, { useState } from "react";
import Link from "next/link";
import UserForm from "@/components/UserForm";
import useUpdateUser from "@/hooks/useUpdateUser";
import useGetUser from "@/hooks/useGetUser";
import useDeleteUser from "@/hooks/useDeleteUser";
import { useRouter } from "next/navigation";

export default function User({ params }) {
  const { id } = params;
  const { user, loading } = useGetUser(id);
  const { updateUser } = useUpdateUser(id);
  const [editMode, setEditMode] = useState(false);
  const { deleteUser, loading: deleting } = useDeleteUser(id);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      router.push("/");
    } catch (error) {
      console.log("Error al eliminar el usuario", error);
    }
  };

  const handleUpdate = async (values) => {
    try {
      const resolvedValues = await values();
      await updateUser(resolvedValues);
      setEditMode(false);
    } catch (error) {
      console.log("Error al actualizar el usuario", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="text-white">Cargando...</div>
      ) : (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg relative">
          <div className="text-white font-bold text-xl mb-4">
            Información del usuario
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-300 mb-2">ID:</div>
              <div className="text-white">{user.id}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Nombre:</div>
              <div className="text-white">{user.name}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Email:</div>
              <div className="text-white">{user.email}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Username:</div>
              <div className="text-white">{user.username}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Dirección:</div>
              <div className="text-white">{user.address}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Nacionalidad:</div>
              <div className="text-white">{user.nationality}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Fecha de nacimiento:</div>
              <div className="text-white">{user.date_of_birth}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Teléfono:</div>
              <div className="text-white">{user.phone}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Creado el:</div>
              <div className="text-white text-sm">{user.created_at}</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Actualizado el:</div>
              <div className="text-white text-sm">{user.updated_at}</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <span className="text-gray-800 text-sm hover:text-gray-300">
              PASS: {user.password}
            </span>
          </div>
          <div className="mt-4">
            <Link href="/">
              <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Volver
              </span>
            </Link>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => setEditMode(true)} // Activar el modo de edición al hacer clic en "Editar"
            >
              Editar
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}

      {/* Mostrar el formulario de edición si el modo de edición está activado */}
      {!loading && editMode && (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg mt-4">
          <div className="text-white font-bold text-xl mb-4">
            Editar usuario
          </div>
          <UserForm
            initialValues={user}
            onSubmit={handleUpdate}
            isEditing={true}
          />
        </div>
      )}
    </div>
  );
}
