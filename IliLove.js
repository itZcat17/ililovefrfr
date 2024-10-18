// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const heartLoader = document.querySelector('.heart-loader');
    const content = document.querySelector('.content');
    const heartsContainer = document.querySelector('.hearts-container');
    const flowersContainer = document.querySelector('.flowers-container');
    const scrollReveal = document.querySelector('.scroll-reveal');

    // Function to create floating elements (hearts or flowers)
    function createFloatingElements(container, className, count) {
        for (let i = 0; i < count; i++) {
            const element = document.createElement('div');
            element.classList.add(className);
            // Randomize position and animation delay
            element.style.left = `${Math.random() * 100}vw`;
            element.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(element);
        }
    }

    // Function to handle the loading animation and reveal content
    function revealContent() {
        // Start fading out the heart loader
        heartLoader.style.animation = 'fadeOut 2s forwards';

        // Once the fade-out is complete, show the main content
        setTimeout(() => {
            heartLoader.style.display = 'none'; // Hide the loader
            content.style.display = 'flex'; // Display the content
            content.style.animation = 'revealContent 2s forwards'; // Animate content reveal

            // Generate floating hearts and flowers
            createFloatingElements(heartsContainer, 'heart-float', 20); // 20 hearts
            createFloatingElements(flowersContainer, 'flower-float', 10); // 10 flowers
        }, 2000); // Delay to allow fade-out animation to finish
    }

    // Initialize loading and content reveal
    function init() {
        // Show the loader for 3 seconds before revealing content
        setTimeout(revealContent, 3000);
    }

    // Function to handle scroll reveal of the special message
    function handleScrollReveal() {
        const revealPosition = scrollReveal.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Check if the user has scrolled to reveal the message
        if (scrollPosition > revealPosition - 150) { // Trigger it slightly earlier
            scrollReveal.classList.add('active'); // Activate scroll reveal
            window.removeEventListener('scroll', handleScrollReveal); // Remove the event listener after activation
        }
    }

    // Set up event listeners
    window.addEventListener('scroll', handleScrollReveal);
    init(); // Start the loading process
});
