import { updateDestinationData } from "@/app/lib/actions";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";

const EditDestinationForm = async({destinationDetails}) => {

  const updateDestinationWrapper = async(formData) => {
    'use server'
    return updateDestinationData(destinationDetails._id, formData)
  }
    return (
      <div>
        <form action={updateDestinationWrapper} className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField
                name="destinationName"
                isRequired
                defaultValue={destinationDetails.destinationName}
              >
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField
              name="country"
              isRequired
              defaultValue={destinationDetails.country}
            >
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
                defaultValue={destinationDetails.category}
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField
              name="price"
              type="number"
              isRequired
              defaultValue={destinationDetails.price}
            >
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField
              name="duration"
              isRequired
              defaultValue={destinationDetails.duration}
            >
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField
                name="departureDate"
                type="date"
                isRequired
                defaultValue={destinationDetails.departureDate}
              >
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField
                name="imageUrl"
                isRequired
                defaultValue={destinationDetails.imageUrl}
              >
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField
                name="description"
                isRequired
                defaultValue={destinationDetails.description}
              >
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            Done
          </Button>
        </form>
      </div>
    );
};

export default EditDestinationForm;