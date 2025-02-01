import { ItemList } from "./item-list";

export default function Page() {
    return (
      <main className="bg-gray-900">
        <h1 className="text-3xl p-2 text-white font-bold"> Shopping List</h1>
        <ul className="grid grid-cols-1 gap-4 p-2">
            <ItemList/>
        </ul>
      </main>
    );
}