const harmfulKeywords = [
  "sex", "porn", "xnxx","xxx", "nude", "nsfw", "18+", "drugs", "violence", 
  "gambling", "illegal content", "fake news", "hacking", "dark web","how to kill anyone",
];

// Function to scan and disable execution
function scanAndBlockContent() {
  const bodyText = document.body.innerText.toLowerCase();
  const currentURL = window.location.href.toLowerCase();

  // ✅ Ignore Google's Safe Search page to prevent false blocks
  if (currentURL.includes("google.com/search?q=safe+search+enabled")) {
    console.log("✅ Safe Search page detected. No blocking applied.");
    return;
  }

  harmfulKeywords.forEach((keyword) => {
    if (bodyText.includes(keyword) || currentURL.includes(keyword)) {
      console.warn("⚠️ Blocked Content Detected:", keyword);

      // Block JavaScript execution and display warning
      document.body.innerHTML = `
        <div style="text-align:center;padding:50px;font-size:20px;">
          <h2>🚨 Warning: Restricted Content Detected</h2>
          <p>Safe Search is enabled. You cannot access this content.</p>
          <p>🔒 This page contains restricted or inappropriate material.</p>
          <button onclick="window.location.href='https://www.google.com/'">Go to Safe Search</button>
        </div>`;

      document.title = "Blocked Content";
    }
  });
}

// Run check when the page loads
window.addEventListener("load", scanAndBlockContent);
