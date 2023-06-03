"use client";

const { useEffect, useState } = require("react");

export default function useGetUser(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://alanluna.pythonanywhere.com/users/api/users/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  return { user, loading };
}
