export const RoomCard = ({ room }) => {
    return (
      <div className="flex space-x-4 bg-gray-700 p-4 rounded-md">
        <div className="w-1/3 bg-gray-500 flex items-center justify-center text-gray-300 text-sm">
          Upload your Image
        </div>
        <div className="flex-1">
          <p>Room Name: {room.name}</p>
          <p>Room Type: {room.type}</p>
          <p>Room Features & Amenities: {room.amenities}</p>
          <p>Room Description: {room.description}</p>
          <div className="mt-2 flex justify-between">
            <button className="px-3 py-1 bg-orange-400 rounded">Edit</button>
            <span className="bg-green-400 text-xs px-2 py-1 rounded">{room.availability}</span>
            <p>Price: {room.price}</p>
          </div>
        </div>
      </div>
    );
  };
  