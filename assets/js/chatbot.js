document.addEventListener("DOMContentLoaded", function () {
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbotContainer = document.getElementById("chatbot-container");
  const chatbotHeader = document.getElementById("chatbot-header");
  const chatbotClose = document.getElementById("chatbot-close");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.style.display = "block";
  });

  chatbotClose.addEventListener("click", function () {
    chatbotContainer.style.display = "none";
  });

  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !chatbotContainer.contains(event.target) &&
      event.target !== chatbotIcon
    ) {
      chatbotContainer.style.display = "none";
    }
  });

  function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
      appendMessage("user", userMessage);
      handleUserInput(userMessage);
      userInput.value = "";
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageElement.classList.add(
      sender === "user" ? "user-message" : "bot-message"
    );
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function handleUserInput(message) {
    // Generate a response based on user input
    const response = generateResponse(message);
    appendMessage("👽", response);
  }

  function generateResponse(userMessage) {
    // Implement your logic to generate responses based on user input
    // You can use conditional statements, switch cases, or any other approach

    // Example logic:
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("help")) {
      return "Sure! I'm here to help. What do you need assistance with?";
    } else {
      return "I'm sorry, I didn't understand that. Can you please rephrase your message?";
    }
  }
});
