"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const useUpdateUser = (userId) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const updateUser = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `https://alanluna.pythonanywhere.com/users/api/users/${userId}/`,
        userData
      );
      console.log("Respuesta del servidor:", response.data);
      router.push("/");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
    setLoading(false);
  };

  return {
    loading,
    updateUser,
  };
};

export default useUpdateUser;
