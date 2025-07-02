import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handelClick = () => {
    setShowItems(!showItems);
  };
  //console.log(data);
  return (
    <div>
      {/* Header */}
      <div
        className="w-6/12 mx-auto my-5  p-5 bg-gray-100  shadow-2xl o cursor-pointer"
       
      >
        <div className=" flex justify-between  "  onClick={handelClick}>
          <span className=" font-bold text-shadow-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>👇</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
