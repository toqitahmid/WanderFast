import { Button, Card} from "@heroui/react";
import Image from "next/image";

const getDestinations = async() => {
    const res = await fetch("http://localhost:5000/destination");
    const data = res.json();
    return data;
}

const Destinations = async() => {
    const destinations = await getDestinations();

    console.log(destinations)
    return (
      <div className="grid lg:grid-cols-2 gap-2 lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
        {destinations.map((destination) => (
          <Card
            key={destination._id}
            className="w-full items-stretch md:flex-row"
          >
            <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
              <Image
                alt="Cherries"
                className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                loading="lazy"
                src={destination.imageUrl}
                width="500"
                height="200"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <Card.Header className="gap-1">
                <Card.Title className="pr-8">
                  {destination.destinationName}
                </Card.Title>
                <Card.Description>{destination.description}</Card.Description>
              </Card.Header>
              <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    Duration: {destination.duration}
                  </span>
                  <span className="text-xs text-muted">
                    Departure Date: {destination.departureDate}
                  </span>
                  <span className="text-xs text-muted">
                    Price: {destination.price}
                  </span>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                  See Details
                </Button>
              </Card.Footer>
            </div>
          </Card>
        ))}
      </div>
    );
};

export default Destinations;