
import React, { useState, useEffect } from "react";
import { marked } from "marked";
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState("");  // State for markdown text
  const [previewContent, setPreviewContent] = useState("");  // State for HTML preview

  // useEffect to update previewContent whenever markdown changes
  useEffect(() => {
    const htmlContent = marked(markdown); // Parse markdown to HTML
    setPreviewContent(htmlContent); // Update the preview content
  }, [markdown]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        placeholder="Write your markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: previewContent }}
      ></div>
    </div>
  );
};

export default App;
