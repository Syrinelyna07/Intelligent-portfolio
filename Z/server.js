import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // charge les variables d'environnement depuis .env

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// === DONNÉES PERSONNELLES === //
const personalData = {
  fr: `
Nom : Syrine Lyna
Cursus : 3ème année informatique a esi alger ayant accamplie 2ans de cycle prepa
Projets :
- Portfolio web interactif avec chatbot personnalise 
- site web prediction de cancer du sein en occasion d octobre rose 
- projet 2cp system embarqué de quiz 
Compétences : Java, JavaFX, Node.js, Express, React, Python, IA, Data Science, machin learning , llms, stramlit ,next js ,git,github
Langues : Français, Anglais, arabe ,kabyle
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

// === ROUTE DU CHATBOT === //
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
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

    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ reply: "Erreur avec l'API." });
  }
});

app.listen(PORT, () => console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`));
