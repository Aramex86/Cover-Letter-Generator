export default async function getOpenAIResponse(prompt: string) {
  console.log(import.meta.env.VITE_OPENAI_API_KEY, "key");
  console.log(prompt, "prompt");
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      prompt,
      maxTokens: 150,
    }),
  });

  const { choices } = await response.json();
  return choices[0].text.trim();
}
