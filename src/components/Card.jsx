"use client";
import React from "react";
import Link from "next/link";

const Card = ({ user }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <div className="text-white font-bold text-xl mb-4">
        Información del usuario
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <div className="text-gray-300 mb-2">ID:</div>
          <div className="text-white">{user.id}</div>
        </div>
        <div className="col-span-2">
          <div className="text-gray-300 mb-2">Nombre:</div>
          <div className="text-white">{user.name}</div>
        </div>
        <div className="col-span-2">
          <div className="text-gray-300 mb-2">Email:</div>
          <div className="text-white break-all">{user.email}</div>
        </div>
        <div className="col-span-2">
          <div className="text-gray-300 mb-2">Dirección:</div>
          <div className="text-white break-all">{user.address}</div>
        </div>
        <div className="col-span-2">
          <div className="text-gray-300 mb-2">Nacionalidad:</div>
          <div className="text-white">{user.nationality}</div>
        </div>
        <div className="col-span-2">
          <div className="text-gray-300 mb-2">Username:</div>
          <div className="text-white">{user.username}</div>
        </div>
      </div>
      <div className="mt-4">
        <Link href={`/user/${user.id}`}>
          <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver más
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
