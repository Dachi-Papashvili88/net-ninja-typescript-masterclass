import { DataResourse } from "../services/DataResource";

export interface PizzaProp {
    title: string, 
    description: string, 
    toppings: string[],
    price: number
}

export const Pizza = new DataResourse<PizzaProp>(
    ' http://localhost:3000/pizzas'
);

