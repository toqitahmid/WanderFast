import DeleteDestinations from "@/components/DeleteDestinations";
import { deleteDestination } from "../lib/actions";

const getDestinations = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const data = await res.json();
  return data;
};

const Destinations = async () => {

  const destinations = await getDestinations();
  console.log(destinations);
  return (
    <div className="grid lg:grid-cols-2 gap-2 lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
      {destinations.map((destination) => (
        <div key={destination._id}>
          <DeleteDestinations destination = {destination}
          DeleteDestinationActions = {deleteDestination}
          ></DeleteDestinations>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
