export const Header = () => {
    return (
      <header className="flex justify-between items-center mb-5">
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-orange-400 text-white rounded-md">Bookings Status</button>
          <button className="px-4 py-2 bg-orange-400 text-white rounded-md">Staff Status</button>
          <button className="px-4 py-2 bg-orange-400 text-white rounded-md">Booking Calendar</button>
        </div>
        <div className="flex items-center">
          <span className="mr-2">User Name</span>
          <span className="w-4 h-4 bg-red-400 rounded-full"></span>
        </div>
      </header>
    );
  };
  