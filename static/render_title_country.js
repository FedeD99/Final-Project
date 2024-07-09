window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    if (country) {
        document.title = country;
    }
});
