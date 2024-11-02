
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading time for the preview

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdown = () => {
    return marked(markdown, { gfm: true, breaks: true });
  };

  return (
    <div>
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleChange}
        rows={10}
      />
      <div className="preview">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: getMarkdown() }} />
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
