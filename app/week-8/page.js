"use client";

import { useState } from "react";
import { ItemList } from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-deals"; // Import the MealIdeas component

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // State to hold selected item name

  const handleItemSelect = (item) => {
    const cleanItemName = item.name.split(',')[0].replace(/[^a-zA-Z\s]/g, "").trim(); // Clean up item name
    setSelectedItemName(cleanItemName);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-gray-900 p-4">
      <h1 className="text-3xl text-white font-bold">Shopping List</h1>
      <div className="flex gap-8">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList item={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />} {/* Pass selectedItemName to MealIdeas */}
        </div>
      </div>
    </main>
  );
}
