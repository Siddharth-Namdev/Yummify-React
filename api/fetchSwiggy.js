// File: /api/fetchSwiggy.js

// Note: Vercel's environment supports top-level await,
// so we can use a slightly cleaner import for node-fetch.
import fetch from 'node-fetch';

export default async function handler(request, response) {
  const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const apiResponse = await fetch(API_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
      },
    });

    if (!apiResponse.ok) {
      return response.status(apiResponse.status).send(apiResponse.statusText);
    }

    const data = await apiResponse.json();

    // Set CORS headers to allow your frontend to call this function
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');

    return response.status(200).json(data);

  } catch (error) {
    console.error('Error fetching from Swiggy API:', error);
    return response.status(500).json({ error: 'Failed to fetch data' });
  }
}