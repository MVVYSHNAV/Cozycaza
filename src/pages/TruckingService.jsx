import truckingImg from '../assets/images/trucking.png';

const TruckingService = () => {
  return (
    <section className="bg-white py-14 px-6 flex flex-col items-center text-center">
      {/* Heading Section */}
      <div className="max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Kurumbalakotta Trucking</h2>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-gray-800">Pickup:</span> <strong>5:00 AM</strong> from the resort & return at <strong>8:00 PM</strong>.
        </p>
        <p className="text-lg text-gray-700 mt-1">Complimentary Tea & Snacks Provided</p>
      </div>

      {/* Truck Image Section */}
      <div className="mt-10 max-w-lg w-full rounded-lg p-4">
        <img
          src={truckingImg}
          alt="Trucking Service"
          className="w-full h-80  rounded-lg"
        />
      </div>

      {/* Additional Information */}
      <div className="mt-6 bg-white p-6 rounded-lg max-w-2xl w-full">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Experience Adventure & Comfort</h3>
        <p className="text-gray-700">
          Enjoy a seamless journey through stunning landscapes with our **expert drivers**.  
          Relax with **refreshments** as we take you to breathtaking viewpoints.  
        </p>
      </div>
    </section>
  );
};

export default TruckingService;
