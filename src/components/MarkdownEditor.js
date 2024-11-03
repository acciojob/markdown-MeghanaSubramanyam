import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('');
    const [preview, setPreview] = useState('');
    const [loading, setLoading] = useState(true);

    // Update preview whenever markdown changes
    useEffect(() => {
        const timer = setTimeout(() => {
            setPreview(marked.parse(markdown));
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer); // Clear timeout on component unmount or markdown change
    }, [markdown]);

    // Handle textarea input
    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
        setLoading(true);
    };

    return (
        <div className="markdown-editor">
            <textarea
                className="textarea"
                placeholder="Write your markdown here..."
                value={markdown}
                onChange={handleMarkdownChange}
            ></textarea>

            <div className="preview">
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: preview }} />
                )}
            </div>
        </div>
    );
}

export default MarkdownEditor;

