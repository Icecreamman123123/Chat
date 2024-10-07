document.getElementById("send-btn").addEventListener("click", sendMessage);

document.getElementById("chat-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const inputBox = document.getElementById("chat-input");
    const message = inputBox.value.trim();

    if (message === "") return;

    const chatBox = document.getElementById("chat-box");

    // Create a new message bubble
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "user");
    messageElement.textContent = message;

    // Append the message to the chat box
    chatBox.appendChild(messageElement);

    // Clear the input
    inputBox.value = "";

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate a response from the "other user"
    setTimeout(() => {
        const responseElement = document.createElement("div");
        responseElement.classList.add("message");
        responseElement.textContent = "This is an automated reply.";
        chatBox.appendChild(responseElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
