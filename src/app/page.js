"use client";
import useGetUsers from "@/hooks/useGetUsers";
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  const { users, loading } = useGetUsers();

  return (
    <div className="container mx-auto p-4">
      <div className="text-white font-bold text-xl mb-4">
        <Link href="/create">
          <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear usuario
          </span>
        </Link>
      </div>
      {loading ? (
        <div className="text-white">Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
