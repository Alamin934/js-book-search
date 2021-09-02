const searchResult = () => {
    const searchText = document.getElementById('searchText').value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
    document.getElementById('searchText').value = '';
};

const displayBooks = books => {
    const bookDetails = document.getElementById('book-details');
    bookDetails.textContent = '';

    books.forEach(book => {
        // console.log(book.author_name);
        /* if (book.author_name?.length > 1 || book.author_name?.length == 1) {
            const singleAuthor = book.author_name[0];
        } */

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-size" alt="...">
            <div class="card-body">
                <h4 class="card-title">${book.title}</h4>
                <p class="card-title fw-bold">Author: <span class="fw-normal">${book.author_name}</span></p>
                <p class="card-title fw-bold">Publisher: <span class="fw-normal">${book.publisher}</span></p>
                <p class="card-title fw-bold">First Publish Year: <span class="fw-normal">${book.first_publish_year}</span></p>
            </div>
        </div>
        `;
        bookDetails.appendChild(div);
    })
}