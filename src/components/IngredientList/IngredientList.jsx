
import React from 'react'

const IngredientList = ({ availableIngredients, addToBurger }) => {
    return (
        <ul>

            {availableIngredients.map((ingredient, idx) => (
                <li key={idx}>
                    <div>
                        <p>{ingredient.name}</p>
                        <button onClick={() => addToBurger(ingredient)}>Add
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default IngredientList;
