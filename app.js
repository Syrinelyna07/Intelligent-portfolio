// === CHATBOT FRONT-END === //

const chatForm = document.getElementById("chatbot-form");
const chatInput = document.getElementById("chatbot-input");
const chatMessages = document.getElementById("chatbot-messages");

chatForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Empêche le refresh de la page

    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Affiche le message de l'utilisateur
    const userDiv = document.createElement("div");
    userDiv.classList.add("message", "user");
    userDiv.textContent = userMessage;
    chatMessages.appendChild(userDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatInput.value = "";

    try {
        const response = await fetch("https://zouak-syrine.onrender.com/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage })
        });

        // Vérifie si la réponse est OK
        if (!response.ok) {
            const text = await response.text();
            throw new Error(`Erreur serveur ${response.status}: ${text}`);
        }

        const data = await response.json();

        // Affiche la réponse du bot
        const botDiv = document.createElement("div");
        botDiv.classList.add("message", "bot");
        botDiv.textContent = data.reply || "Pas de réponse du serveur.";
        chatMessages.appendChild(botDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

    } catch (error) {
        console.error("Fetch error:", error);
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("message", "bot");
        errorDiv.textContent = `⚠️ Erreur: ${error.message}`;
        chatMessages.appendChild(errorDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

});
