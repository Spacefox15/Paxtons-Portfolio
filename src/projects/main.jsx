import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HighlightsApp from "./HighlightsApp.jsx";

const root = document.getElementById('root');
if (root) ReactDOM.createRoot(root).render(<App />);

const highlights = document.getElementById('highlights');
if (highlights) ReactDOM.createRoot(highlights).render(<HighlightsApp />);
