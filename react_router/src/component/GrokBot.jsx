import React, { useState } from "react";

// ⚠️ Demo only — exposing API key in frontend is unsafe!
const GROQ_API_KEY = "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";

// 🧠 Developer sets what info to fetch here
const GROQ_QUERY = `
You are a villager in a small, mystical village that has recently been cursed by black magic. You are talking directly to a visitor (the main player) about yourself. Introduce yourself in a lively and unique first-person style. Your response should include:

1. Your name  and a little about your personality

2. Your daily life and routines – your job, errands, chores, or hobbies in the village.

3. Your relationship with the other villagers 

4. Hints of your mood or style of speaking – maybe humorous, 

5. A suspicion level (0–50%) – a number representing how suspicious you seem in general but don't tell the exact number in response . Remember, you are not the imposter; this is just a hint for the main player to guess.

Your reply should read naturally, as if a real villager is talking. Keep it colorful and engaging, with little phrases or sayings that show your personality.

Notes:
- The suspicion level should never exceed 50%, because no actual villager has done the black magic.
- Encourage varied talking styles: some villagers can be talkative, some cryptic, some humorous.
- Make each villager feel distinct: different jobs, habits, or sayings.
- Optional: add a “quirk” or “catchphrase” unique to each villager to make them memorable.
-every etime name and proffesion should be different 
-your response should not exceed 200 words
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
