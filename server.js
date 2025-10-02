import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// === DONNÉES PERSONNELLES === //
const personalData = {
  fr: `
Nom : Syrine Lyna
Cursus : 3ème année informatique à ESI Alger ayant accompli 2 ans de cycle prépa
Projets :
- Portfolio web interactif avec chatbot personnalisé
- Site web de prédiction de cancer du sein pour Octobre Rose
- Projet 2CP système embarqué de quiz
Compétences : Java, JavaFX, Node.js, Express, React, Python, IA, Data Science, Machine Learning, LLMs, Streamlit, Next.js, Git, GitHub
Langues : Français, Anglais, Arabe, Kabyle
`,
  en: `
Name: Syrine Lyna
Education: 3rd-year Computer Science student at ESI Algiers, having completed 2 years of preparatory cycle
Projects:
- Interactive web portfolio with personalized chatbot
- Breast cancer prediction website for Octobre Rose campaign
- Embedded system project: quiz application (2CP)
Skills: Java, JavaFX, Node.js, Express, React, Python, AI, Data Science, Machine Learning, LLMs, Streamlit, Next.js, Git, GitHub
Languages: French, English, Arabic, Kabyle
`
};

// === DÉTECTION SIMPLE DE LA LANGUE === //
function detectLanguage(message) {
  const frenchWords = ["bonjour", "projet", "compétence", "cursus", "répond", "aide"];
  return frenchWords.some(word => message.toLowerCase().includes(word)) ? "fr" : "en";
}

// === ENDPOINT DE TEST DE L'API === //
app.get("/test", async (req, res) => {
  try {
    // Test simple : on récupère juste les modèles disponibles
    const response = await axios.get("https://api.groq.com/openai/v1/models", {
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    res.json({ message: "✅ Clé API valide !", models: response.data.data });
  } catch (error) {
    console.error("Erreur API Test :", error.response?.data || error.message);
    res.status(500).json({ message: "❌ Clé API invalide ou problème réseau.", error: error.response?.data || error.message });
  }
});

// === ROUTE DU CHATBOT === //
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage) return res.status(400).json({ reply: "Message vide." });

    const lang = detectLanguage(userMessage);

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `Tu es un assistant virtuel. Tu ne réponds qu'aux questions concernant Syrine Lyna et ses informations personnelles suivantes : ${personalData[lang]}. Si la question n'est pas liée à cela, explique poliment que tu ne peux répondre qu'à propos de Syrine.`
          },
          { role: "user", content: userMessage }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.data || !response.data.choices?.[0]?.message?.content) {
      return res.status(500).json({ reply: "Erreur : réponse vide de l'API." });
    }

    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });

  } catch (error) {
    console.error("Erreur complète :", error.response?.data || error.message);
    if (error.response?.status === 401) {
      res.status(401).json({ reply: "Clé API invalide ou non autorisée." });
    } else {
      res.status(500).json({ reply: "Erreur avec l'API." });
    }
  }
});
console.log("Clé utilisée :", process.env.GROQ_API_KEY);
app.listen(PORT, () => console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`));
