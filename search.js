document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let query = document.getElementById('searchInput').value.toLowerCase(); // Get search query
    let results = searchBooks(query); // Search for books
    displayResults(results); // Display search results
  });
  
  function searchBooks(query) {
    // Perform book search based on query (dummy data for demonstration)
    let books = [
      { title: 'Book 1', author: 'Author 1', edition: '1st Edition' },
      { title: 'Book 2', author: 'Author 2', edition: '2nd Edition' },
      { title: 'Book 3', author: 'Author 3', edition: '3rd Edition' }
    ];
  
    return books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.edition.toLowerCase().includes(query)
    );
  }
  
  function displayResults(results) {
    let resultList = document.getElementById('resultsList');
    resultList.innerHTML = '';
  
    if (results.length === 0) {
      resultList.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    results.forEach(book => {
      let bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `<h3>${book.title}</h3><p>Author: ${book.author}</p><p>Edition: ${book.edition}</p>`;
      resultList.appendChild(bookElement);
    });
  
    document.getElementById('searchResults').style.display = 'block';
  }
  