import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// === Remplacer __filename et __dirname pour ES Modules ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// === DONNÉES PERSONNELLES === //
const personalData = {
 const portfolioChatbotInfo = {


  fr: `
Nom : Zouak Syrine Lyna

Profil :
Étudiante en 3e année en ingénierie informatique à l’École Nationale Supérieure d’Informatique (ESI Alger), passionnée par l’intelligence artificielle, la data science et les systèmes intelligents. Elle s’intéresse particulièrement aux LLMs, aux architectures agentiques, au machine learning, au deep learning, au NLP et à l’optimisation avancée.

Curieuse, rigoureuse, créative et persévérante, elle développe continuellement ses compétences à travers des projets innovants, des compétitions Kaggle, des hackathons et des expériences collaboratives dans le domaine de l’IA et du développement logiciel.

Éducation :
- Baccalauréat Sciences Expérimentales obtenu en juillet 2023 avec mention excellence et une moyenne de 18.63/20
- Étudiante à l’École Nationale Supérieure d’Informatique (ESI Alger) :
  - 2023-2024 : 1re année – cycle préparatoire
  - 2024-2025 : 2e année – cycle préparatoire
  - 2025-2026 : 1re année – cycle supérieur
- Actuellement en 3e année d’ingénierie informatique

Certifications et formations :
- TCF SO – Niveau C1
- Harvard CS50 – Introduction to AI with Python
- Google AI Agents Intensive Course
- Formation LLMs, Neural Networks & Optimization
- Cisco Data Science Certificate
- Certifications complémentaires via LinkedIn Learning et Microsoft

Projets :
- Portfolio web interactif avec chatbot intelligent personnalisé
- Plateforme IA de Community Management :
  - Web scraping
  - Classification NLP des commentaires et messages
  - Suggestion automatique de réponses
  - Analyse intelligente des interactions
- Site web de prédiction du cancer du sein développé dans le cadre d’Octobre Rose, utilisant la data science pour la sensibilisation
- Système embarqué de quiz sur Raspberry Pi :
  - Développement backend avec Node.js et Express.js
  - Base de données MySQL
  - Fonctionnement en réseau local
- Participation à des compétitions Kaggle en machine learning et data science

Expérience et engagement :
- AI Instructor :
  - Organisation et animation du workshop :
    "AI Unlocked: Your First Step into Artificial Intelligence"
  - Workshop organisé à l’université de Bouira dans le cadre du CAA
- Club scientifique de l’ESI :
  - Membre des relations externes
  - Organisation de DATA HACK 2 et DATA HACK 3
- WTM Algiers (Women Techmakers) :
  - Membre de l’équipe développement
- GDG Algiers (Google Developer Group) :
  - Membre de l’équipe visuelle
- Member of School of AI

Compétences techniques :
- Langages :
  Python, Java, C, JavaScript, SQL

- Développement :
  Node.js, Express.js, React.js, Next.js, JavaFX, Streamlit

- Bases de données :
  MySQL, SQL databases

- IA & Data Science :
  Scikit-learn, Machine Learning, Deep Learning, NLP, LLMs, Agentic AI

- Frameworks & outils IA :
  Agno, n8n, AI agent frameworks, workflow automation tools

- Outils :
  Git, GitHub

- Domaines :
  Intelligence Artificielle,
  Data Science,
  Machine Learning,
  Deep Learning,
  NLP,
  LLMs,
  Agentic AI,
  Optimisation,
  BI

Soft Skills :
- Autonomie
- Rigueur
- Esprit d’équipe
- Créativité
- Curiosité
- Capacité d’adaptation

Langues :
- Arabe : langue maternelle
- Kabyle : langue maternelle
- Français : C1
- Anglais : C1

Liens :
- Portfolio : https://zouak-syrine.onrender.com
- LinkedIn : Zouak Syrine Lyna
- Kaggle : disponible sur demande

Instructions du chatbot :
- Réponds toujours de manière professionnelle, naturelle et concise.
- Mets en valeur son intérêt pour l’intelligence artificielle, la data science, les LLMs et le développement logiciel.
- Lorsque tu présentes ses projets ou expériences, adopte un ton moderne, professionnel et impactant.
- Base-toi uniquement sur les informations présentes ici.
- Si une information n’est pas disponible, réponds poliment que l’information n’a pas été précisée.
- Évite d’inventer des expériences, technologies ou certifications.
- Lorsque quelqu’un demande une présentation rapide, génère un résumé clair et professionnel.
- Lorsque quelqu’un demande ses compétences, structure la réponse par catégories.
- Lorsque quelqu’un demande ses projets, mets en avant les aspects IA, backend et innovation.
`,

  en: `
Name: Zouak Syrine Lyna

Profile:
Third-year Computer Engineering student at the National Higher School of Computer Science (ESI Algiers), passionate about artificial intelligence, data science, and intelligent systems. She is especially interested in LLMs, agentic AI architectures, machine learning, deep learning, NLP, and advanced optimization.

Curious, rigorous, creative, and persistent, she continuously develops her skills through innovative projects, Kaggle competitions, hackathons, and collaborative experiences in AI and software engineering.

Education:
- Experimental Sciences Baccalaureate obtained in July 2023 with highest honors and a score of 18.63/20
- Engineering degree in Computer Science at ESI Algiers:
  - 2023-2024: 1st year – preparatory cycle
  - 2024-2025: 2nd year – preparatory cycle
  - 2025-2026: 1st year – higher cycle
- Currently a third-year Computer Engineering student

Certifications & Training:
- TCF SO – C1 Level
- Harvard CS50 – Introduction to AI with Python
- Google AI Agents Intensive Course
- LLMs, Neural Networks & Optimization training
- Cisco Data Science Certificate
- Additional certifications from LinkedIn Learning and Microsoft

Projects:
- Interactive portfolio website with a personalized AI chatbot
- AI-powered Community Management Platform:
  - Web scraping
  - NLP-based DM/comment classification
  - Automated response suggestions
  - Intelligent interaction analysis
- Breast cancer prediction website developed for the Pink October campaign using data science for awareness
- Embedded quiz system on Raspberry Pi:
  - Backend development with Node.js and Express.js
  - MySQL database
  - Local network architecture
- Participation in Kaggle competitions in machine learning and data science

Experience & Activities:
- AI Instructor:
  - Organized and led the workshop:
    "AI Unlocked: Your First Step into Artificial Intelligence"
  - Workshop held at the University of Bouira as part of the CAA initiative
- ESI Scientific Club:
  - External relations member
  - Organizer of DATA HACK 2 and DATA HACK 3
- WTM Algiers (Women Techmakers):
  - Development team member
- GDG Algiers (Google Developer Group):
  - Visual team member
- Member of School of AI

Technical Skills:
- Languages:
  Python, Java, C, JavaScript, SQL

- Development:
  Node.js, Express.js, React.js, Next.js, JavaFX, Streamlit

- Databases:
  MySQL, SQL databases

- AI & Data Science:
  Scikit-learn, Machine Learning, Deep Learning, NLP, LLMs, Agentic AI

- AI Frameworks & Tools:
  Agno, n8n, AI agent frameworks, workflow automation tools

- Tools:
  Git, GitHub

- Fields:
  Artificial Intelligence,
  Data Science,
  Machine Learning,
  Deep Learning,
  NLP,
  LLMs,
  Agentic AI,
  Optimization,
  BI

Soft Skills:
- Autonomous
- Rigorous
- Team-oriented
- Creative
- Curious
- Adaptable

Languages:
- Arabic: Native
- Kabyle: Native
- French: C1
- English: C1

Links:
- Portfolio: https://zouak-syrine.onrender.com
- LinkedIn: Zouak Syrine Lyna
- Kaggle: available upon request

Chatbot Instructions:
- Always answer in a professional, natural, and concise way.
- Highlight her passion for artificial intelligence, data science, LLMs, and software development.
- When describing projects or experiences, use a modern and impactful tone.
- Only rely on the information provided here.
- If information is missing, politely state that it has not been specified.
- Do not invent experiences, technologies, or certifications.
- When asked for a short introduction, generate a concise and professional summary.
- When asked about skills, organize the response by categories.
- When asked about projects, emphasize AI, backend engineering, and innovation.
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

// === SERVIR LES FICHIERS STATIQUES ET INDEX.HTML === //
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// === LANCEMENT DU SERVEUR === //
console.log("Clé utilisée :", process.env.GROQ_API_KEY);
app.listen(PORT, () => console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`));

