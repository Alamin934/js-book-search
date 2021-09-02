//Search Books
const searchBooks = () => {
    const searchText = document.getElementById('searchText').value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
    document.getElementById('searchText').value = '';
};

//Display Books
const displayBooks = books => {
    const bookDetails = document.getElementById('book-details');
    bookDetails.textContent = '';
    //slice/get only 20 books
    const bookSliced = books.slice(0, 35);
    //Total Books Count
    const totalBooks = document.getElementById('total-books-found');
    if (bookSliced.length) {
        totalBooks.innerText = `${bookSliced.length} Results Found`;
    } else {
        totalBooks.innerText = `No Result Found`;
    };
    //Show Total Books
    document.getElementById('total-books-found').style.display = 'block';

    bookSliced.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        const imgNotFound = `https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png`;
        const coverImg = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        div.innerHTML = `
            <div class="card h-100">
                <img src="${coverImg ? coverImg : imgNotFound}" class="card-img-top img-size" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${book.title}</h4>
                        <p class="card-title fw-bold">Author: <span class="fw-normal">${book.author_name ? book.author_name : 'name not found'}</span></p>
                        <p class="card-title fw-bold">Publisher: <span class="fw-normal">${book.publisher}</span></p>
                        <p class="card-title fw-bold">First Publish Year: <span class="fw-normal">${book.first_publish_year}</span></p>
                    </div>
        </div>
        `;
        bookDetails.appendChild(div);
    });

}