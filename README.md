
# Flatdango - Movie Ticket Booking Application

Flatdango is a simple movie ticket booking application for the **Flatiron Movie Theater**. This app allows users to view movie details, see the available tickets, and purchase them directly. It also provides a movie menu where users can click to view details of different movies.

## Features

- View the details of the first movie on the page load, including its **poster**, **title**, **runtime**, **showtime**, and **available tickets**.
- A menu of all available movies that users can select to view more details.
- Ability to purchase tickets, which decreases the number of available tickets. 
- If a movie's showing is sold out, users will be notified by a "Sold Out" button.
- Clicking on a movie in the menu updates the main movie details to reflect the selected movie.
- Sold-out movies are highlighted and users can no longer buy tickets for them.

## Installation

To get started with the Flatdango application locally:

1. Fork then clone this repository to your local machine:

2. Navigate to the project folder and open the folder in a code editor eg VS code.

3. Open the `index.html` file in your preferred browser.


## Usage

1. **Viewing Movie Details**: Upon loading the page, the first movie's details will be displayed, including the movie poster, title, runtime, showtime, and available tickets.
   
2. **Select a Movie**: From the movie menu on the left, click on any movie to view its details.

3. **Buying Tickets**: When the "Buy Ticket" button is clicked, the available ticket count will decrease. If there are no available tickets, the button will be disabled and say "Sold Out".

4. **Sold Out Movies**: Once a movie is sold out (i.e., all tickets are sold), it will be marked as "sold-out" in the menu, and users will no longer be able to buy tickets for that movie.


## API Endpoints

The application interacts with the following API endpoints to retrieve movie data:

- **Get All Movies**: `GET /films`
    
