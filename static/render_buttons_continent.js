window.addEventListener('DOMContentLoaded', function() {
    function renderButtons(data) {
        // Create the form element
        const form = document.createElement('form');
        form.action = '/continent';
        form.method = 'post';

        // Create the <h2> element
        const heading = document.createElement('div');
        heading.classList.add('mb-3');
        const headingText = document.createElement('h2');
        headingText.textContent = 'By what country would you like to narrow down your search?';
        heading.appendChild(headingText);
        form.appendChild(heading);

        // Generate buttons dynamically based on the fetched data
        data.forEach(item => {
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('mb-3');
            const button = document.createElement('a');
            button.href = '/country?country=' + encodeURIComponent(item.Country);
            button.innerHTML = `<button type="button">${item.Country}</button>`;
            buttonContainer.appendChild(button);
            form.appendChild(buttonContainer);
        });

        // Replace the content of the {% block main %} with the form
        const mainBlock = document.querySelector('#main-content');
        mainBlock.innerHTML = '';
        mainBlock.appendChild(form);

        data = JSON.parse(mainBlock.dataset.mydata);
        console.log(data);
    }
    renderButtons(data)
});
