export const Sidebar = () => {
    return (
      <aside className="w-1/5 bg-orange-200 p-5">
        <h1 className="text-xl font-bold">CozyCaza</h1>
        <p className="text-sm text-gray-700">Dashboard</p>
        <nav className="mt-5">
          <ul className="space-y-3">
            <li className="p-2 bg-white rounded-md cursor-pointer">Manage Rooms</li>
            <li className="p-2 bg-white rounded-md cursor-pointer">Manage Booking</li>
            <li className="p-2 bg-white rounded-md cursor-pointer">Package Management</li>
            <li className="p-2 bg-white rounded-md cursor-pointer">Customers & Reviews</li>
            <li className="p-2 bg-white rounded-md cursor-pointer">User Management</li>
          </ul>
        </nav>
      </aside>
    );
  };