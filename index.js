
document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "http://localhost:3000/films";
    const filmsList = document.getElementById("films");
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const availableTickets = document.getElementById("available-tickets");
    const buyTicketBtn = document.getElementById("buy-ticket");

    let currentMovie = {};

    // Fetch all movies
    fetch(BASE_URL)
        .then(response => response.json())
        .then(films => {
            filmsList.innerHTML = ""; // Clear placeholder
            films.forEach(film => {
                const li = document.createElement("li");
                li.textContent = film.title;
                li.className = "film item";
                li.addEventListener("click", () => loadMovieDetails(film));
                if (film.capacity - film.tickets_sold <= 0) {
                    li.classList.add("sold-out");
                }
                filmsList.appendChild(li);
            });
            loadMovieDetails(films[0]); // Load first movie details by default
        });

    // Load movie details
    function loadMovieDetails(film) {
        currentMovie = film;
        poster.src = film.poster;
        title.textContent = film.title;
        runtime.textContent = film.runtime;
        showtime.textContent = film.showtime;
        const ticketsLeft = film.capacity - film.tickets_sold;
        availableTickets.textContent = ticketsLeft;
        buyTicketBtn.disabled = ticketsLeft <= 0;
        buyTicketBtn.textContent = ticketsLeft > 0 ? "Buy Ticket" : "Sold Out";
    }

    // Handle ticket purchase
    buyTicketBtn.addEventListener("click", () => {
        const ticketsLeft = currentMovie.capacity - currentMovie.tickets_sold;
        if (ticketsLeft > 0) {
            currentMovie.tickets_sold++;
            availableTickets.textContent = ticketsLeft - 1;
            buyTicketBtn.textContent = ticketsLeft - 1 > 0 ? "Buy Ticket" : "Sold Out";
            buyTicketBtn.disabled = ticketsLeft - 1 <= 0;

            // Update sold-out status in the menu
            const filmItems = filmsList.querySelectorAll(".film.item");
            filmItems.forEach(item => {
                if (item.textContent === currentMovie.title && ticketsLeft - 1 <= 0) {
                    item.classList.add("sold-out");
                }
            });
        }
    });
});
