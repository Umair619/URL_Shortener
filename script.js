// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary elements from the DOM
    const shortenBtn = document.getElementById('shorten-btn');
    const copyBtn = document.getElementById('copy-btn');
    const shortUrlContainer = document.getElementById('short-url-container');
    const longUrlInput = document.getElementById('long-url');
    const shortUrlInput = document.getElementById('short-url');

    // Add an event listener to the shorten button
    shortenBtn.addEventListener('click', async () => {
        // Get the long URL value from the input field
        const longUrl = longUrlInput.value.trim();

        // Validate the long URL
        if (longUrl === '') {
            alert('Please enter a valid URL');
            return;
        }

        try {
            // Make a request to the URL shortening API
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(longUrl)}`);
            const data = await response.json();

            if (response.ok) {
                // Extract the shortened URL from the response
                const shortUrl = data.result.full_short_link;
                shortUrlInput.value = shortUrl;
                shortUrlContainer.style.display = 'flex';
            } else {
                throw new Error('An error occurred while shortening the URL');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('Areyyyyyyy!!!!   VALID URL ENTER KARO MIYAAAAAA');
        }
    });

    // Add an event listener to the copy button
    copyBtn.addEventListener('click', () => {
        // Copy the shortened URL to the clipboard
        shortUrlInput.select();
        document.execCommand('copy');
        alert('COPY HO GYA');
    });
});
