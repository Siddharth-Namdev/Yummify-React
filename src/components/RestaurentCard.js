import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div
      className="p-5 m-2 w-[300px] h-[400px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200 hover:bg-blue-100"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="w-full h-50 object-cover rounded-2xl "
        src={CDN_URL + resData.info.cloudinaryImageId}
      />

      <div className="p-4 flex flex-col justify-between flex-grow">
        <h4 className="font-bold text-lg mb-1">{name}</h4>
        <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
        <div className="mt-auto">
          <p className="text-sm text-gray-800 font-semibold">{avgRating} ⭐</p>
          <p className="text-sm text-gray-700">{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
