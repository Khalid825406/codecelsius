// Services Section (Slider)
document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    // Ensure slider container and buttons exist
    if (sliderContainer && prevBtn && nextBtn) {
      let currentIndex = 0; // Current position
      const cardWidth = document.querySelector(".service-card")?.offsetWidth + 20; // Include gap
      const visibleCards = 3; // Number of cards visible at once
      const totalCards = sliderContainer.children.length;
  
      // Set the max translate value
      const maxIndex = totalCards - visibleCards;
  
      // Update Slider Position
      const updateSliderPosition = () => {
        sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      };
  
      // Next Button Logic
      nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateSliderPosition();
        }
      });
  
      // Prev Button Logic
      prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
        }
      });
    } else {
      console.error("Slider elements not found. Check the HTML structure.");
    }
  });
  