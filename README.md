🛡️ Browser Monitor – AI-Powered Content Filter Extension

A **Chrome extension** that helps monitor and block harmful, explicit, or unauthorized content on social media and across the web in real time. Designed for digital well-being and safety, it protects users by analyzing page content using smart keyword detection and redirecting unsafe activity.

---

 🚀 Features

* ✅ **Real-time detection** of harmful keywords (e.g., "porn", "violence", "dark web", etc.)
* 🚫 **Blocks unauthorized searches** and redirects to Safe Search
* 🔍 **Content scanning** on every page load
* 📣 **User alerts** for detected violations
* 📄 **Popup UI** with informative messages
* 🧠 Modular structure for future AI/NLP & image moderation integration

---

 🧠 Keywords Detected

Monitors harmful or inappropriate words including:

```
sex, porn, drugs, violence, fake news, dark web, hacking, nsfw, gambling, how to kill anyone
```

---

 🧩 Tech Stack

* **Manifest V3** Chrome Extension
* **JavaScript (ES6)** – content & background scripts
* **HTML/CSS** – popup interface
* **Modular Structure** – for detectors, utils, styles
* **Declarative Net Request API** – for search redirection rules

---

 🗂️ Directory Structure

```
vinayj16-browser-monitor/
├── README.md
└── Browser-Extension/
    ├── manifest.json
    ├── popup.html
    ├── rules.json
    ├── assets/
    │   └── icon*.png
    ├── _metadata/
    ├── src/
    │   ├── background.js
    │   ├── content.js
    │   ├── popup.js
    │   ├── detector/
    │   │   ├── imageAnalysis.js
    │   │   └── textAnalysis.js
    │   ├── styles/
    │   │   └── popup.css
    │   └── utils/
    │       └── helper.js
```

---

 🛠️ Installation (For Developers)

1. **Clone or Download** this repository
2. Open Chrome and go to:

   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode** (top-right corner)
4. Click **Load Unpacked**
5. Select the `Browser-Extension` folder
6. The extension will appear in your toolbar

---

 💡 How It Works

 🔄 Background Script (`background.js`)

* Monitors tab updates
* Checks URLs for harmful keywords
* Redirects unsafe searches to Safe Search on Google

 🧠 Content Script (`content.js`)

* Scans page text after load
* Detects harmful content
* Replaces page with a warning if violations found

 ⚙️ Declarative Rules (`rules.json`)

* Automatically blocks harmful search queries with redirects

 📊 Popup UI (`popup.html`)

* Displays the protection status
* Includes a redirect button for safe browsing

---

 🧪 Development Notes

* Placeholder files like `imageAnalysis.js` are ready for computer vision/NLP integration in future updates.
* The project uses clean modular code separation for maintainability.
* Helper utilities are stored in `utils/` to support logging and reusability.

---

 📌 Permissions Used

| Permission              | Reason                                        |
| ----------------------- | --------------------------------------------- |
| `activeTab`             | To access the current page content            |
| `storage`               | For user preferences or settings (future use) |
| `tabs`                  | To track and modify open tabs                 |
| `webNavigation`         | To monitor navigation for harmful sites       |
| `declarativeNetRequest` | To block/redirect harmful queries             |
| `host_permissions`      | `<all_urls>` – Needed for full web scanning   |

---

 🧱 Future Enhancements

* [ ] 🔍 AI-based image moderation
* [ ] 🧠 Text classification with NLP models (e.g., toxicity score)
* [ ] 🧾 Safe mode parental dashboard
* [ ] 🌙 Dark mode UI
* [ ] 📊 Logging and analytics dashboard

---

 👨‍💻 Contributing

Contributions are welcome! Open an issue or fork and submit a pull request. Suggestions, bugs, or improvements are always appreciated.

---

 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋 Contact

* GitHub: [@vinayj16](https://github.com/vinayj16)
* Email: `vinays15201718@gmail.com`

---
