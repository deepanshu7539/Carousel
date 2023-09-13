// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button");

let imageIndex = 1;
let intervalId;

// Define a function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 3000);
};

// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = (index) => {
  // Calculate the updated image index
  imageIndex = index < 0 ? images.length - 1 : index % images.length;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add a mouseover event listener to the wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

// Add a mouseleave event listener to the wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
