import {useState} from "react";

export const useSelectedRestaurant = (initalValue) => {
    const [selectedRestaurant, setRestaurant] = useState(initalValue);

    const update = (value) => {
        setRestaurant(value);
    };

    return {
        selectedRestaurant,
        update
    }
}
