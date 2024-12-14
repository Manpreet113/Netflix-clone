console.log("Netflix Clone Skeleton Ready!");

document.addEventListener("DOMContentLoaded", () => {
  const emailInputs = document.querySelectorAll("input[placeholder='Email address']");
  const getStartedButtons = document.querySelectorAll("button");
  const faqButtons = document.querySelectorAll(".faq-button");

  // Function to validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to handle Get Started button click
  function handleGetStartedClick() {
    const email = emailInputs[0].value.trim();
    if (validateEmail(email)) {
      document.getElementById('error-message').innerText = `Welcome! Your membership journey with this email has started: ${email}`;
    } else {
      document.getElementById('error-message').innerText = 'Please enter a valid email address.';
    }
  }

  // Function to reset button states
  function resetButtonStates(buttons) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      btn.querySelector("h2").style.color = "white";
    });
  }

  // Event listener for Get Started buttons
  getStartedButtons.forEach(button => {
    if (button.textContent.includes("Get Started")) {
      button.addEventListener("click", handleGetStartedClick);
    }
  });

  // Event listener for FAQ buttons
  faqButtons.forEach(button => {
    let isActive = false;
    button.addEventListener("click", () => {
      resetButtonStates(faqButtons);
      if (!isActive) {
        button.classList.add("active");
        button.querySelector("h2").style.color = "red";
        isActive = true;
      } else {
        button.classList.remove("active");
        button.querySelector("h2").style.color = "white";
        isActive = false;
      }
    });
  });

  // Movie Carousel Animation (Optional: Add later)
  const movieContainer = document.querySelector(".movie-container");
  let scrollAmount = 0;

  setInterval(() => {
    if (movieContainer) {
      scrollAmount += 2;
      movieContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Reset scroll when reaching the end
      if (
        scrollAmount >=
        movieContainer.scrollWidth - movieContainer.clientWidth
      ) {
        scrollAmount = 0;
      }
    }
  }, 50); // Adjust speed as needed
});
