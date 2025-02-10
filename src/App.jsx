import { useState } from 'react'
import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {

  const [stack, setStack] = useState([])

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const addToBurger = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient])
  }

  const removeFromBurger = (ingredient) => {
    setStack((prevStack) => prevStack.filter((ing) => ing.name !== ingredient.name))
  }

  return (
<main style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-start" }}>
      <section style={{ width: "40%"}}>
        <h2>Ingredients</h2>
        <IngredientList
          availableIngredients={availableIngredients}
          addToBurger={addToBurger}
        />
      </section>
      <section style={{ width: "40%"}}>
        <h2>Burger Stacker</h2>
        <BurgerStack
          stack={stack}
          removeFromBurger={removeFromBurger}
        />
      </section>
    </main>
  );
};

export default App;
