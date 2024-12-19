

import { redirect } from 'next/navigation';
import { saveMeal } from "./meals";

function isInvalidText(text){
  return !text || text.trim()==='';
}

export async function ShareMeal(formdata){
    const meal={
      title:formdata.get('title'),
      summary:formdata.get('summary'),
      instructions:formdata.get('instructions'),
      image:formdata.get('image'),
      creator:formdata.get('name'),
      creator_email:formdata.get('email')
    }

    // console.log(meal);

    if(isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(instructions) || isInvalidText(creator) || isInvalidText(creator_email) || meal.creator_email.includes('@')){
      throw new Error("Invalid Input");
    }

    await saveMeal(meal);

    redirect('/meals');
  }