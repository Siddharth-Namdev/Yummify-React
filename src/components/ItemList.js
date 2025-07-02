import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //console.log(items);
  if (!items || items.length === 0) return <p>No items in cart</p>;

  const dispatch = useDispatch();
  const handelAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {" "}
      {/* {items.map((item) => (
        <div key={item.card.info.id}> 
       <span>{item?.card?.info?.name} </span> 
       <span>{item?.card?.info?.price}/100</span>
       <div>{item?.card?.info?.description}</div>
        </div>
      ))} */}
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mb-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex flex-row-reverse gap-4"
        >
          {/* Image on Right */}
          <div className="absolute">
            <button
              className="m-auto bg-black text-white border cursor-pointer"
              onClick={() => handelAddItem(item)}
            >
              {" "}
              ADD +
            </button>
          </div>
          <img
            src={CDN_URL + item?.card?.info?.imageId}
            alt={item?.card?.info?.name}
            className="w-24 h-24 rounded-lg object-cover"
          />

          {/* Info on Left */}
          <div className="flex flex-col justify-between flex-1">
            <div className="flex justify-between items-start">
              <span className="text-lg font-semibold text-gray-800">
                {item?.card?.info?.name}
              </span>
              <span className="text-sm text-green-700 font-medium whitespace-nowrap">
                ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {item?.card?.info?.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
