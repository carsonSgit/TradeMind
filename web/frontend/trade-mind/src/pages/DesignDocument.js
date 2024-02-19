import React, { useState, useEffect } from 'react';
import "./Loading.css"
import Loading from '../components/Loading';
export default function DesignDocument() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const cssRes = await fetch('https://raw.githubusercontent.com/carsonSgit/TradeMind/main/design_doc/design_doc.css')
        const css = await cssRes.text();
        const response = await fetch('https://raw.githubusercontent.com/carsonSgit/TradeMind/main/design_doc/design_doc.html');
        const html = await response.text();
        // Prepend the CSS link to the HTML content
        const htmlWithCss = html + "<style>" + css + "</style>";
        setHtmlContent(htmlWithCss);
      } catch (error) {
        console.error("Failed to fetch HTML content:", error);
        setHtmlContent('<p>Failed to load content.</p>');
      }
    };

    fetchHtmlContent();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    //<div dangerouslySetInnerHTML={{__html: htmlContent}} />
    null  ? 
        <iframe srcDoc={htmlContent} title='design' style={{width:'99%', height:'85vh', border: 'None'} }/>
        : 
        <Loading style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
  );
}
