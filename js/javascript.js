// searchbar
const books = [
    
];

function searchBooks()
    [const input = document
    .getElementById("searchInput")
    .ariaValueMax.toLowerCase();
]

const results = books.filter(book=> 
    book.toLowerCase().includes(input)
);

document.getElementById("results").innerHTML =
    {results.length
        ? results.map(book =>`<p>{book}</p>`).join("")
            :"<p>No books found.</p>";
}

document.getElementById("searchInput")
    .addEventListener("keydown",function(event) {
        if (event.key === "Enter") {
            searchBooks();
        }
    });


