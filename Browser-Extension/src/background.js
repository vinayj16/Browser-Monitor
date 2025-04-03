chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    const blockedKeywords = ["badword", "illegal", "hack", "dark web"];

    blockedKeywords.forEach((keyword) => {
      if (tab.url && tab.url.includes(keyword)) {
        chrome.tabs.update(tabId, {
          url: "https://www.google.com/search?q=safe+search+enabled"
        });
      }
    });
  }
});
chrome.runtime.onInstalled.addListener(() => {
  console.log("Social Media Monitor Extension Installed - Safe Search is ON");
});
