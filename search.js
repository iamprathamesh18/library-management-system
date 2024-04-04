document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let query = document.getElementById('searchInput').value.toLowerCase(); // Get search query
    let results = searchBooks(query); // Search for books
    displayResults(results); // Display search results
  });
  
  function searchBooks(query) {
    // Perform book search based on query (dummy data for demonstration)
    let books = [
      { title: 'digital circuits', author: 'technical publication', edition: '1st Edition' },
      { title: 'electronic circuit', author: 'tech neo ', edition: '2nd Edition' },
      { title: 'engineering mathematics 3', author: 'wesley publication', edition: '3rd Edition' }
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
  