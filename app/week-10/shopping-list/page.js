"use client";
import { useState, useEffect } from "react";
import { ItemList } from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-deals"; 
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(""); 
  const { user } = useUserAuth();

  useEffect(() => {
    if (!user) return;

    const loadItems = async () => {
      const itemsData = await getItems(user.uid);
      setItems(itemsData);
    };

    loadItems();
  }, [user]);

  const handleItemSelect = (item) => {
    const cleanItemName = item.name.split(',')[0].replace(/[^a-zA-Z\s]/g, "").trim();
    setSelectedItemName(cleanItemName);
  };

  const handleAddItem = async (item) => {
    if (!user) return;
  
    const newItem = await addItem(user.uid, item);
    setItems([...items, { ...item, id: newItem.id }]);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="bg-gray-900 p-4">
      <h1 className="text-3xl text-white font-bold">Shopping List</h1>
      <div className="flex gap-8">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
