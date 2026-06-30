'use client';
import { Button, Card} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DeleteDestinations = ({ destination, DeleteDestinationActions }) => {

    const handleDeleteAction = async(id) => {
        await DeleteDestinationActions(id);
    }
  return (
    <div>
      <Card key={destination._id} className="w-full items-stretch md:flex-row">
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
            <Link href={`/destinations/${destination._id}`}>
              <Button variant="outline" className="w-full sm:w-auto">
                See Details
              </Button>
            </Link>
            <Button
              variant="danger"
              className="w-full sm:w-auto"
                onClick={() => handleDeleteAction(destination._id)}
            >
              Delete Destination
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default DeleteDestinations;