"use client";

import { ItemList } from "./item-list";
import { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  }

    return (
      <main className="bg-gray-900">
        <h1 className="text-3xl p-2 text-white font-bold"> Shopping List</h1>
        <ul className="grid grid-cols-1 gap-4 p-2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList item={items}/>
        </ul>
      </main>
    );
}