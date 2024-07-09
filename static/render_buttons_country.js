window.addEventListener('DOMContentLoaded', function() {
    function renderButtons(data, adjective) {
        console.log('renderButtons function called');
        // Create the form element
        const form = document.createElement('form');
        form.action = '/country';
        form.method = 'post';

        // Create the <h2> element
        const heading = document.createElement('div');
        heading.classList.add('mb-3');
        const headingText = document.createElement('h2');
        headingText.textContent = 'By what dining experience would you like to narrow down your search?';
        heading.appendChild(headingText);
        form.appendChild(heading);

        // Generate buttons dynamically based on the fetched data
        data.forEach(item => {
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('mb-3');
            const button = document.createElement('a');
            button.target = '_blank';

            // Check if item.Dining is "No Preference"
            if (item.Dining === "No Preference") {
                // Construct the search URL without "No Preference"
                button.href = `https://www.google.com/search?q=${adjective}+restaurant+near+me`;
            } else {
                // Construct the search URL with item.Dining
                button.href = `https://www.google.com/search?q=${adjective}+${item.Dining}+restaurant+near+me`;
            }

                // Capitalize the first letter of each word in item.Dining for the button text
            const capitalizedDining = item.Dining.replace(/\b\w/g, function(match) {
                return match.toUpperCase();
            });

            button.innerHTML = `<button type="button">${capitalizedDining}</button>`;
            buttonContainer.appendChild(button);
            form.appendChild(buttonContainer);
        });

        // Replace the content of the {% block main %} with the form
        const mainBlock = document.querySelector('#main-content');
        mainBlock.innerHTML = '';
        mainBlock.appendChild(form);

        data = JSON.parse(mainBlock.dataset.mydata);
        adjective = JSON.parse(mainBlock.dataset.adjective);
        console.log('data:', data);
        console.log('adjective:', adjective);
    }
    renderButtons(data, adjective)
});
