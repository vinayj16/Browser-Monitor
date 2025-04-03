document.getElementById("scanBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: scanPageContent
    });
  });
});

function scanPageContent() {
  let text = document.body.innerText;
  if (text.includes("harmful")) {
    alert("Potential harmful content detected!");
  } else {
    alert("No harmful content found.");
  }
}
