
import React from 'react'

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <ul>
            {stack.map((ingredient, idx) => (
                <li key={idx}>
                    <div>
                        <p>{ingredient.name}</p>
                        <button onClick={() => removeFromBurger(ingredient)}>Remove
                        </button>
                    </div>
                </li>
            ))}

        </ul>
    )
}

export default BurgerStack
