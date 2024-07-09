// Get all the anchor tags on the page
const anchors = document.querySelectorAll('a');

// Loop through each anchor
anchors.forEach(function(anchor) {
  // Add a click event listener to each anchor
  anchor.addEventListener('click', function(event) {
    // Get the target URL from the anchor's href attribute
    const targetUrl = anchor.href;

    // Get the button text from the anchor's text content
    const buttonText = anchor.textContent.trim();

    // Check if the URL is an HTML link
    if (!targetUrl.includes('https://www.google.com/search')) {
      handleHtmlLink(targetUrl, buttonText);
    } else {
      handleGoogleSearch(buttonText);
    }
  });
});

// Function to handle HTML links
function handleHtmlLink(targetUrl, buttonText) {
  // Append the button text as a query parameter
  const urlWithTitle = `${targetUrl}?title=${encodeURIComponent(buttonText)}`;

  // Navigate to the target URL with the title as a query parameter
  window.location.href = urlWithTitle;

  // Listen for the 'load' event on the window object
  window.addEventListener('load', function() {
    // Get the title from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const titleFromUrl = urlParams.get('title');

    // Get the current document title
    const currentTitle = document.title;

    // Set the title based on the query parameter if the current title is blank or a placeholder
    if ((currentTitle === '') {
      document.title = decodeURIComponent(titleFromUrl);
    }
  }, { once: true });
}

// Function to handle Google searches
function handleGoogleSearch(buttonText) {
  // Get the search query from the database
  const searchQuery = getSearchQueryFromDatabase(buttonText);

  // Construct the Google search URL with the search query
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;

  // Open the Google search URL in a new tab
  window.open(googleSearchUrl, '_blank');
}

// Placeholder function to get the search query from the database
function getSearchQueryFromDatabase(buttonText) {
    // Replace this with your actual code to fetch the adjective from the database
    // based on the button text (country name)
    const adjective = fetchAdjective(buttonText);
    const searchQuery = `${adjective} restaurant near me`;
    return searchQuery;
}

// Placeholder function to fetch the adjective from the database
function fetchAdjective(countryName) {
    // Replace this with your actual code to fetch the adjective from the database
    // based on the country name
    return 'spanish'; // Replace with the actual adjective fetching logic
}
