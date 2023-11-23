"use client"

import React from "react";
import Nav from "../../components/Nav/Nav";


export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
    <Nav/>
      <div className="flex flex-col mt-20 grow items-center justify-center mx-auto px-2 ">
        {children}
      </div>
    </div>
  );
}