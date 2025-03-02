import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ManageRooms from "./components/ManageRooms";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-5">
        <Header />
        <ManageRooms />
      </main>
    </div>
  );
};

export default Dashboard;
