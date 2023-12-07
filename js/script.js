document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for adventure ideas
    const adventureLinks = document.querySelectorAll(".category .box a.btn");

    adventureLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Extract the details from the link's parent element
            const adventureTitle = link.parentElement.querySelector("h3").innerText;
            const adventureDescription = link.parentElement.querySelector("p").innerText;
            const adventureImage = link.parentElement.querySelector("img").src;

            // Display the details in a pop-up/modal
            showAdventureDetailsPopup(adventureTitle, adventureDescription, adventureImage);
        });
    });

    // Function to create and display adventure details pop-up
    function showAdventureDetailsPopup(title, description, imageSrc) {
        // Create a container for the pop-up
        const popupContainer = document.createElement("div");
        popupContainer.classList.add("popup-container");

        // Create HTML content for the pop-up
        const popupContent = `
            <div class="popup">
                <span class="close-popup" title="Close">&times;</span>
                <h2>${title}</h2>
                <img src="${imageSrc}" alt="${title}">
                <p>${description}</p>
                <button class="btn close-popup">Close</button>
            </div>
        `;

        popupContainer.innerHTML = popupContent;

        // Append the pop-up container to the body
        document.body.appendChild(popupContainer);

        // Add an event listener to close the pop-up
        const closePopupButtons = popupContainer.querySelectorAll(".close-popup");
        closePopupButtons.forEach(button => {
            button.addEventListener("click", function () {
                // Remove the pop-up container
                popupContainer.remove();
            });
        });
    }
});
// Add an event listener to close the pop-up
const closePopupButtons = popupContainer.querySelectorAll(".close-popup");
closePopupButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Remove the pop-up container
        popupContainer.remove();
    });
});

