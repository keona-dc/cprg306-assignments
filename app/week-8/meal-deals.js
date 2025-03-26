"use client";
import { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className='text-xl font-bold mb-2'>Meal Ideas</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map(meal => (
            <li key={meal.idMeal}>
              {meal.strMeal}
            </li>
          ))
        ) : (
          <li>
            No meal ideas found for {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
  
};

export default MealIdeas;
