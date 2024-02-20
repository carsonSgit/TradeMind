import React, { useState, useEffect } from 'react';
import "./Loading.css"
import Loading from '../components/Loading';

export default function DesignDocument() {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add this line

  useEffect(() => {
    const fetchHtmlContent = async () => {
      setIsLoading(true); // Set isLoading to true before fetching
      try {

        const cssRes = await fetch('https://raw.githubusercontent.com/carsonSgit/TradeMind/main/design_doc/design_doc.css')
        const css = await cssRes.text();
        const response = await fetch('https://raw.githubusercontent.com/carsonSgit/TradeMind/main/design_doc/design_doc.html');
        const html = await response.text();
        const htmlWithCss = html + "<style>" + css + "</style>";


        setHtmlContent(htmlWithCss);
      } catch (error) {
        console.error("Failed to fetch HTML content:", error);
        setHtmlContent('<p>Failed to load content.</p>');
      } finally {
        setIsLoading(false); // Set isLoading to false after fetching, regardless of success or failure
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    isLoading ?  
      <Loading style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
      :  
      <iframe  
        srcDoc={htmlContent}  
        title='design'  
        style={{width:'99%', height:'85vh', border: 'None'}}  
        onLoad={() => setIsLoading(false)} // Set isLoading to false when iframe loads
      />
  );
}
