import AddNewDestinationForm from "@/components/AddNewDestinationForm";
import { addNewDestinations } from "../lib/actions";


const AddNewDestinationPage = () => {

    return (
      <div>
        <AddNewDestinationForm addNewDestinationAction = {addNewDestinations}></AddNewDestinationForm>
      </div>
    );
};

export default AddNewDestinationPage;