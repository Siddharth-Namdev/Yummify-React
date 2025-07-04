// export const CDN_URL =
//   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// export const LOGO_URL =
//   "https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg";

// export const MENU_URL =
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.957458998489876&lng=76.81631579798633&restaurantId=";

// export const RESTAURANT_DATA =
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"


// Replace with your hosted backend once I give you link (e.g. Render)
export const BACKEND_BASE = "https://yummify-proxy.onrender.com";

export const RESTAURANT_DATA = `${BACKEND_BASE}/restaurants`;
export const MENU_URL = `${BACKEND_BASE}/menu/`; // append restaurantId
