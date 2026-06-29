'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addNewDestinations = async(formData) => {

    const newDestination = Object.fromEntries(formData.entries());
    const res = await fetch("http://localhost:5000/destination",{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newDestination)
    });
    const data = await res.json();
    if(data.insertedId){
        revalidatePath('/destination')
        redirect('/destinations')
    }
    return data;
}