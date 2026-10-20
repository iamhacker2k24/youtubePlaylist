# 🎬 YouTube Playlist Length Counter

A full-stack web application that calculates the **total number of videos** and **total watch time** of a YouTube playlist.

🔗 **Live Demo:** https://playlist-length-counter.vercel.app/

---

## 📌 About

**YouTube Playlist Length Counter** allows you to enter a YouTube playlist URL and quickly find out:

- 🎥 Total number of videos
- ⏱️ Total duration of the playlist
- 🕐 Total watch time in a readable format

The application uses the **YouTube Data API v3** to retrieve playlist and video information.

---

## ✨ Features

- 🔗 Accept YouTube playlist URLs
- 🎥 Extract videos from playlists
- 📊 Calculate total video count
- ⏱️ Calculate total playlist duration
- 🔄 Supports playlists containing more than 50 videos
- 📱 Responsive user interface
- ⚡ Fast React frontend
- 🚀 Node.js/Express backend
- 🔐 API key stored securely using environment variables

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- JSX
- CSS

### Backend

- Node.js
- Express.js
- Axios
- YouTube Data API v3
- dotenv

---

## 📂 Project Structure

```text
youtubePlaylist/
│
├── 📁 back/
│   ├── 📁 functions/
│   │   ├── idExtracter.js
│   │   ├── timeIdextractor.js
│   │   └── totalTime.js
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── README.md
│
├── 📁 client/
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 component/
│   │   │   ├── Header.jsx
│   │   │   ├── Main.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🔄 How It Works

The application follows this flow:

```text
YouTube Playlist URL
        │
        ▼
   React Frontend
        │
        ▼
   Express Backend
        │
        ▼
 Extract Playlist ID
        │
        ▼
 YouTube Data API
        │
        ▼
   Get Video IDs
        │
        ▼
 Get Video Durations
        │
        ▼
 Calculate Total Time
        │
        ▼
 Return Result
        │
        ▼
 React displays result
```

---

# 🚀 Installation

## 1. Clone the repository

```bash
git clone https://github.com/iamhacker2k24/youtubePlaylist.git
```

```bash
cd youtubePlaylist
```

---

# 🔧 Backend Setup

Go to the backend:

```bash
cd back
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file inside the `back` directory.

```env
YT_V3_API_KEY=your_youtube_api_key
FRONTED_URL=YOUR_FRONTED_URL
```

You can use `.env.example` as a reference.

### Start the backend

```bash
node server.js
```

The backend will run on:

```text
http://localhost:3000
```

---

# 🎨 Frontend Setup

Open another terminal.

```bash
cd client
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file inside the `back` directory.

```env
VITE_ALL_FEATCH_ALL_TIME= http://localhost:3000/
VITE_COUSTOMIZED_PLAYLIST_URl= http://localhost:3000/editedplayslt

```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

---

# 🔑 YouTube Data API Setup

This project requires a **YouTube Data API v3** API key.

### Steps

1. Open Google Cloud Console.
2. Create or select a Google Cloud project.
3. Enable **YouTube Data API v3**.
4. Create an API key.
5. Add the key to `back/.env`.

Example:

```env
YT_V3_API_KEY=YOUR_API_KEY

```

### ⚠️ Keep your API key private

Never commit your `.env` file to GitHub.

Your `.gitignore` should contain:

```gitignore
.env
node_modules/
```

Use `.env.example` to show the required environment variables without exposing your actual API key.

---

# 📡 YouTube API

The backend uses the YouTube Data API v3 to retrieve playlist items and video information.

The playlist items endpoint is used to retrieve video IDs:

```text
https://www.googleapis.com/youtube/v3/playlistItems
```

The request includes parameters such as:

```text
part=contentDetails
maxResults=50
playlistId=<PLAYLIST_ID>
key=<API_KEY>
```

For subsequent pages:

```text
pageToken=<NEXT_PAGE_TOKEN>
```

---

# 📁 Backend Functions

## `idExtracter.js`

Extracts video IDs from a YouTube playlist.

It also handles playlist pagination using the `nextPageToken` returned by the YouTube API.

---

## `timeIdextractor.js`

Retrieves the information required to determine video durations.

---

## `totalTime.js`

Calculates the combined duration of the playlist videos.

---

## `server.js`

The main Express server.

It receives requests from the frontend, processes the YouTube playlist and returns the calculated result.

---

# 🖥️ Frontend

The frontend is built with React and Vite.

### Components

#### `Header.jsx`

Application header.

#### `Main.jsx`

Main application interface where users enter their YouTube playlist URL and view the result.

#### `Footer.jsx`

Application footer.

---

# 📊 Example

If a playlist contains:

```text
150 videos
```

with a combined duration of:

```text
25 hours 32 minutes 18 seconds
```

the application can display:

```text
Videos
150

Total Watch Time
25h 32m 18s
```

---

# ⚠️ Limitations

This project depends on the YouTube Data API.

Possible limitations include:

- YouTube API quota limits
- Deleted videos
- Private videos
- Unavailable videos
- Invalid playlist URLs
- Invalid API keys
- Network/API errors

---

# 🤝 Contributing

Contributions are welcome.

### Fork the repository

```bash
git clone https://github.com/iamhacker2k24/youtubePlaylist.git
```

### Create a new branch

```bash
git checkout -b feature/my-feature
```

### Make your changes

Then commit:

```bash
git add .
git commit -m "Add my feature"
```

Push your branch:

```bash
git push origin feature/my-feature
```

Then create a Pull Request.

---

# 📜 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](./LICENSE) file for more information.

---

## 👨‍💻 Author

**Debabrata Paul**

GitHub: https://github.com/iamhacker2k24

---

## ⭐ Show Your Support

If you find this project useful, consider giving it a ⭐ on GitHub.

**Live Demo:** https://playlist-length-counter.vercel.app/
