import React from "react"
import type { IAnimal } from "../Model/IAnimal";

const animals: IAnimal[] = [{ id: 1, name: 'Tiger', species: 'Panthera tigris' }, { id: 2, name: 'Giraffe', species: 'Giraffa camelopardalis' }, { id: 3, name: 'Zebra', species: 'Equus quagga' }];

const AnimalList = () => {
    return (
        <ul>
            <h2>Animals</h2>
            {animals.map(animal => (<li key={animal.id}><h3>animal: {animal.name}</h3> <p>species: {animal.species}</p></li>))}
        </ul>
    )
};

export default AnimalList;
