# 📝 NewStory - LogiQuill Writing Editor

NewStory is the blog writing editor for **LogiQuill**, inspired by Medium's clean and distraction-free writing experience. It allows users to create and edit blog posts before publishing.

---

## 🚀 Features

✅ **Minimalist UI** - Focus on writing without distractions.  
✅ **Auto-Saving Drafts** - Saves drafts under "Draft in [User Name]".  
✅ **Material UI Design** - Styled with MUI for a polished look.  
✅ **Title & Body Separation** - Clear distinction between title and content.  
✅ **Full-Screen Writing** - The editor takes up the full available space.  
✅ **Responsive Layout** - Works across all screen sizes.

---

## 📂 Project Structure

```
/src
 ├── components
 │   ├── NewStory.jsx  # Main blog editor component
 │   ├── Dashboard.jsx # Dashboard with "Write" button
 │
 ├── context
 │   ├── AuthContext.jsx # Manages user authentication
 │
 ├── firebaseConfig.js # Firebase configuration (env-protected)
 ├── App.js            # Main application router
 └── index.js          # App entry point
```

---

## 🛠 Installation

1️⃣ **Clone the repository**

```sh
git clone https://github.com/your-repo/logiquill.git
cd logiquill
```

2️⃣ **Install dependencies**

```sh
npm install
```

3️⃣ **Start the development server**

```sh
npm run dev
```

---

## ✨ Usage

1. **Click the "Write" button** in the dashboard.
2. A new page (`/new-story`) opens, similar to Medium’s editor.
3. **Write your blog post** in the title and body fields.
4. **Click "Publish"** to submit your post.

---

## 🎨 Tech Stack

- **React.js** - Component-based UI
- **Material UI (MUI)** - Modern styling
- **Firebase Auth** - User authentication
- **React Router** - Page navigation

---

## 🔒 Environment Variables

Create a `.env` file and add your Firebase credentials:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Then, add `.env` to `.gitignore` to **protect secrets**:

```
# Ignore environment variables
.env
```

---

## 🎯 To-Do List

- [ ] Implement **Auto-Save** feature
- [ ] Add **Rich Text Editing** (Bold, Italics, Lists)
- [ ] Enable **Image Uploads**
- [ ] Improve **SEO & Metadata** for better discoverability

---

## 🤝 Contribution

Want to help improve LogiQuill? Feel free to fork, create a new branch, and submit a **pull request**! 🚀

📩 For any issues, [open a GitHub issue](https://github.com/your-repo/logiquill/issues).

---

## 📜 License

This project is **open-source** under the **MIT License**.
