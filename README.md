# CropCare Advisor Frontend

This project is a **Next.js + Tailwind CSS** frontend for a crop recommendation and plant disease detection system.

## Features

- **Crop Recommendation**: existing module where users input crop type, soil, and season to receive fertilizer and pesticide advice.
- **Plant Disease Detection (Frontend only)**: new interface allowing users to upload a photograph of a leaf; the app sends it to /api/detect and displays the returned diagnosis.

## How to Use

1. Start the backend server on http://localhost:8080 (unchanged).
2. Run the Next.js frontend with 
pm run dev from the root of my-app.
3. Navigate to:
   - /recommend for nutrient recommendations.
   - /disease for the disease detection UI.

> **Note:** No backend code has been modified. The disease detection front end expects a POST route at /api/detect that accepts multipart/form-data and returns JSON. If that endpoint isn't implemented yet, submissions will result in a fetch error message displayed in the UI.

## Components Added

- DiseaseForm.js – handles file selection and submission.
- DiseaseResult.js – renders the diagnosis response.
- disease/page.js – layout and state management for the new feature.
- Updated navigation and home page to include links to the new flow.
- pi.js extended with detectDisease service function.

## Styling

Uses existing Tailwind utility classes for consistency; the new pages follow the same design patterns as the recommendation module.

---

This README provides an overview of the frontend changes only; all backend routes and logic remain untouched.
