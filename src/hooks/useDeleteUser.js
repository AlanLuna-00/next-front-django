import { useState } from "react";

export default function useDeleteUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    setDeleted(false);

    try {
      const response = await fetch(
        `https://alanluna.pythonanywhere.com/users/api/users/${id}/`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("No se pudo eliminar el usuario");
      }

      setDeleted(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleted, deleteUser };
}
