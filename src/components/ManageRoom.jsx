export const ManageRooms = () => {
    const [rooms, setRooms] = useState([
      { id: 1, name: "Deluxe Room", type: "Single", amenities: "Wi-Fi, AC", description: "Cozy room", availability: "Available", price: "$100" },
      { id: 2, name: "Luxury Suite", type: "Double", amenities: "Pool, AC", description: "Spacious suite", availability: "Available", price: "$200" }
    ]);
  
    return (
      <section className="bg-gray-800 text-white p-5 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Manage Rooms</h2>
          <div className="space-x-3">
            <button className="px-3 py-1 bg-orange-500 rounded">Add</button>
            <button className="px-3 py-1 bg-orange-500 rounded">Filter</button>
            <button className="px-3 py-1 bg-orange-500 rounded">Sort</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    );
  };
  