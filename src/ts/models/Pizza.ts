import { DataResourse } from "../services/DataResource";

export interface PizzaProps {
    title: string, 
    description: string, 
    toppings: string[],
    price: number
}

export const Pizza = new DataResourse<PizzaProps>(
    ' http://localhost:3000/pizzas'
);

