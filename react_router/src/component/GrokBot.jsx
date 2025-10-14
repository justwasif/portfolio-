import React, { useState } from "react";

// ⚠️ Demo only — exposing API key in frontend is unsafe!
const GROQ_API_KEY='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'


// 🧠 Developer sets what info to fetch here
const GROQ_QUERY = `
You are a villager in a mystical village cursed by black magic. Speak directly to the visitor (the player) in lively, first-person style. Introduce yourself with:

Name – your full name or nickname.

Role – your village job or purpose.

Appearance – a short vivid description.

Personality – 2–3 unique traits.

Background – a brief story or link to the curse.

Quirk – a memorable habit or saying.

Keep it lively, mystical, and memorable."
`;








export default function GroqBot() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant. Be concise and accurate.",
            },
            {
              role: "user",
              content: GROQ_QUERY, // 👈 uses constant
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || "Groq API call failed");
      }

      const data = await res.json();
      setResponse(data.choices?.[0]?.message?.content || "No response.");
    } catch (err) {
      console.error(err);
      setResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">🤖 Groq Fixed Info Bot</h1>

      <button
        onClick={handleSend}
        disabled={loading}
        className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition"
      >
        {loading ? "Fetching..." : "Fetch Info"}
      </button>

      <div className="mt-6 p-4 w-96 bg-gray-800 rounded-xl text-left whitespace-pre-wrap">
        {response || "Click the button to fetch info!"}
      </div>
    </div>
  );
}
