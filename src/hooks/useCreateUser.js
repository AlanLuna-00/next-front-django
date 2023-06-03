"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const useCreateUser = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const createUser = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://alanluna.pythonanywhere.com/users/api/users/",
        userData
      );
      console.log("Respuesta del servidor:", response.data);
      router.push("/");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
    setLoading(false);
  };

  return {
    loading,
    createUser,
  };
};

export default useCreateUser;
