let count = 0;
export default async function getOpenAIResponse(prompt: string) {
  console.log(import.meta.env.VITE_GROCK_API_KEY, "VITE_GROCK_API_KEY");
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
        max_tokens: 400,
      }),
    }
  );

  const data = await response.json();
  console.log(data, "data");
  if (data) {
    count = count + 1;
  }

  console.log(count, "count");
  return count <= 5
    ? data.choices[0]?.message.content.trim()
    : "Thank you! That's it for today?";
}
