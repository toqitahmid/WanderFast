import { getDestinationId } from '@/app/lib/data';
import { Button, Card, Modal, Surface } from "@heroui/react";

import { Envelope } from "@gravity-ui/icons";
import Image from 'next/image';
import EditDestinationForm from '@/components/EditDestinationForm';

const destinationDetailsPage = async({params}) => {
    const {id} = await params;
    const destinationDetails = await getDestinationId(id);
    console.log(destinationDetails)

    return (
      <div className="h-[50vh] flex justify-center items-center">
        <Card className=" items-stretch md:flex-row">
          <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
            <Image
              alt="Cherries"
              className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
              loading="lazy"
              src={destinationDetails.imageUrl}
              width="500"
              height="200"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title className="pr-8">
                {destinationDetails.destinationName}
              </Card.Title>
              <Card.Description>
                {destinationDetails.description}
              </Card.Description>
            </Card.Header>
            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  Duration: {destinationDetails.duration}
                </span>
                <span className="text-xs text-muted">
                  Departure Date: {destinationDetails.departureDate}
                </span>
                <span className="text-xs text-muted">
                  Price: {destinationDetails.price}
                </span>
              </div>
              <Modal>
                <Button variant="secondary">Open Editor Form</Button>
                <Modal.Backdrop>
                  <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                      <Modal.CloseTrigger />
                      <Modal.Header>
                        <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                          <Envelope className="size-5" />
                        </Modal.Icon>
                        
                      </Modal.Header>
                      <Modal.Body className="p-6">
                        <Surface variant="default">
                        </Surface>
                    <EditDestinationForm destinationDetails = {destinationDetails}></EditDestinationForm>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button slot="close" variant="secondary">
                          Cancel
                        </Button>
                        <Button slot="close">Send Message</Button>
                      </Modal.Footer>
                    </Modal.Dialog>
                  </Modal.Container>
                </Modal.Backdrop>
              </Modal>
            </Card.Footer>
          </div>
        </Card>
      </div>
    );
};

export default destinationDetailsPage;