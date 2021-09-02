//Search Books
const searchBooks = () => {
    const searchText = document.getElementById('searchText').value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))

    //clear Search Field
    document.getElementById('searchText').value = '';
};

//Display Books
const displayBooks = books => {
    const bookDetails = document.getElementById('book-details');
    bookDetails.textContent = '';
    //slice/get Max 35 books
    const sliceBook = books.slice(0, 35);

    const totalResultFound = document.getElementById('total-result-found');
    //Total Books Count and Result Found Condition
    if (sliceBook.length) {
        totalResultFound.innerText = `${sliceBook.length} Results Found`;
    } else {
        totalResultFound.innerText = `No Result Found`;
    };
    //Show Total Book Result
    document.getElementById('total-result-found').style.display = 'block';
    //forEach on slice Array
    sliceBook.forEach(book => {
        //create div element
        const div = document.createElement('div');
        //add css class
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-size" alt="...">
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