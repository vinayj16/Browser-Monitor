export function analyzeText(content) {
  const bannedWords = ["violence", "hate", "attack"];
  return bannedWords.some(word => content.toLowerCase().includes(word));
}
