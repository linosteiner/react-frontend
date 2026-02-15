# Assignment 9
- Removed boilerplate code
- Added core components for the app
    - Added styling for the components

# Assignment 10
- Added new `Countries` component. This is used to display the list of countries and their attributes.
  - Added `Country` and `City` interfaces to represent the data.
  - Added `countries.ts` and `cities.ts` to provide static data. Loading of cities and currency data could be improved,
  as it relies on the expected values to be there, otherwise the component does not properly render.
  - Dynamic loading of data with locale-respeting format.
  - Added flags assets from the previous assignment to the table.
- Added proper routing
- Adjust `currencies.ts` to match new requirements.
- Added the necessary styling for the new component.

# Assignment 11
- Added `Currency` component. This is used to convert between currencies.
- Added proper routing
- Converted `City` and `Country` interfaces to types.

# Assignment 12
- Added backend integration
  - Configured Vite proxy to forward API requests to the backend service.
- Updated `Calculator` component
  - Implemented automatic calculation triggers on input changes.
  - Added persistence logic to save transactions to the database via REST API.
- Added `Transactions` component
  - Created a view to fetch and display the history of saved transactions.
- Updated Routing and Navigation
  - Added a new route and header link for the Transactions page.
