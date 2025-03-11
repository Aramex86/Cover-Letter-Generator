let count = 0;
export default async function getOpenAIResponse(prompt: string) {
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GROCK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
      }),
    }
  );

  const data = await response.json();

  if (data) {
    count = count + 1;
  }

  return count <= 5
    ? data.choices[0]?.message.content.trim()
    : "Thank you! That's it for today?";
}
