import React, { useState, useEffect } from 'react';
import { aboutMeLines } from '../constants/index.js';
import '../index.css';

const CodeEditorModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);



  useEffect(() => {
    if (isOpen) {
      setTypedLines([]);
      setCurrentLineIndex(0);
      setCurrentCharIndex(0);
    }
  }, [isOpen]);


  useEffect(() => {
    if (activeTab !== 0 || currentLineIndex >= aboutMeLines.length) return;

    const currentLine = aboutMeLines[currentLineIndex];
    const typingSpeed = currentLine.type === 'empty' ? 5 : 1;

    if (currentCharIndex < currentLine.content.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {

      const timer = setTimeout(() => {
        setTypedLines(prev => [...prev, currentLine]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex]);


  const renderCodeLine = (line, index, isCurrentLine = false) => {
    const { type, content } = line;

    if (type === 'comment') {
      return (
        <div key={index} className="code-line">
          <span className="comment">{content}</span>
        </div>
      );
    }

    if (type === 'empty') {
      return <div key={index} className="code-line"></div>;
    }


    const parseCode = (text) => {
      const keywords = ['const', 'return', 'export', 'default'];
      const parts = [];
      let remaining = text;
      let key = 0;

      while (remaining.length > 0) {
        let matched = false;


        const stringMatch = remaining.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/);
        if (stringMatch) {
          parts.push(<span key={key++} className="string">{stringMatch[1]}</span>);
          remaining = remaining.slice(stringMatch[1].length);
          matched = true;
          continue;
        }


        for (const keyword of keywords) {
          if (remaining.startsWith(keyword) && (remaining[keyword.length] === ' ' || remaining[keyword.length] === undefined)) {
            parts.push(<span key={key++} className="keyword">{keyword}</span>);
            remaining = remaining.slice(keyword.length);
            matched = true;
            break;
          }
        }
        if (matched) continue;


        const functionMatch = remaining.match(/^([a-zA-Z_]\w*)\s*\(/);
        if (functionMatch) {
          parts.push(<span key={key++} className="function">{functionMatch[1]}</span>);
          remaining = remaining.slice(functionMatch[1].length);
          matched = true;
          continue;
        }


        const propertyMatch = remaining.match(/^([a-zA-Z_]\w*)(?=:)/);
        if (propertyMatch) {
          parts.push(<span key={key++} className="property">{propertyMatch[1]}</span>);
          remaining = remaining.slice(propertyMatch[1].length);
          matched = true;
          continue;
        }


        const numberMatch = remaining.match(/^(\d+)/);
        if (numberMatch) {
          parts.push(<span key={key++} className="value">{numberMatch[1]}</span>);
          remaining = remaining.slice(numberMatch[1].length);
          matched = true;
          continue;
        }


        if (remaining.startsWith('true') || remaining.startsWith('false')) {
          const bool = remaining.startsWith('true') ? 'true' : 'false';
          parts.push(<span key={key++} className="value">{bool}</span>);
          remaining = remaining.slice(bool.length);
          matched = true;
          continue;
        }


        if (remaining.startsWith('//')) {
          parts.push(<span key={key++} className="comment">{remaining}</span>);
          remaining = '';
          matched = true;
          continue;
        }


        parts.push(<span key={key++} className="punctuation">{remaining[0]}</span>);
        remaining = remaining.slice(1);
      }

      return parts;
    };

    return (
      <div key={index} className="code-line">
        {parseCode(isCurrentLine ? content.slice(0, currentCharIndex) : content)}
        {isCurrentLine && <span className="cursor"></span>}
      </div>
    );
  };

  const tabs = [
    { icon: '📄', name: 'about.js' },
    { icon: '⚙️', name: 'skills.json' },
    { icon: '📋', name: 'experience.ts' }
  ];

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}>
      <div className="editor-window" onClick={(e) => e.stopPropagation()}>
        <div className="editor-titlebar">
          <div className="titlebar-left">
            <div className="editor-icon"></div>
            <span className="titlebar-text">DocDeveloper - Visual Studio Code</span>
          </div>
          <div className="titlebar-controls">
            <div className="control-button control-minimize"></div>
            <div className="control-button control-maximize"></div>
            <div className="control-button control-close" onClick={onClose}></div>
          </div>
        </div>

        <div className="editor-tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.name}
            </div>
          ))}
        </div>

        <div className="editor-content">
          <div className="line-numbers">
            {Array.from({ length: 25 }, (_, i) => (
              <React.Fragment key={i}>
                {i + 1}
                <br />
              </React.Fragment>
            ))}
          </div>
          <div className="code-area">

            <div className={`tab-content ${activeTab === 0 ? 'active' : ''}`}>
              {typedLines.map((line, index) => renderCodeLine(line, index))}
              {currentLineIndex < aboutMeLines.length &&
                renderCodeLine(aboutMeLines[currentLineIndex], currentLineIndex, true)}
            </div>


            <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
              <div className="code-line"><span className="punctuation">{'{'}</span></div>
              <div className="code-line">  <span className="property">"frontend"</span><span className="punctuation">:</span> <span className="punctuation">{'{'}</span></div>
              <div className="code-line">    <span className="property">"primary"</span><span className="punctuation">:</span> <span className="punctuation">[</span><span className="string">"React"</span><span className="punctuation">,</span> <span className="string">"JavaScript"</span><span className="punctuation">,</span> <span className="string">"TypeScript"</span><span className="punctuation">],</span></div>
              <div className="code-line">    <span className="property">"styling"</span><span className="punctuation">:</span> <span className="punctuation">[</span><span className="string">"CSS3"</span><span className="punctuation">,</span> <span className="string">"Tailwind"</span><span className="punctuation">,</span> <span className="string">"Styled Components"</span><span className="punctuation">],</span></div>
              <div className="code-line">    <span className="property">"proficiency"</span><span className="punctuation">:</span> <span className="value">95</span></div>
              <div className="code-line">  <span className="punctuation">{'}'}</span><span className="punctuation">,</span></div>
              <div className="code-line">  <span className="property">"backend"</span><span className="punctuation">:</span> <span className="punctuation">{'{'}</span></div>
              <div className="code-line">    <span className="property">"runtime"</span><span className="punctuation">:</span> <span className="string">"Node.js"</span><span className="punctuation">,</span></div>
              <div className="code-line">    <span className="property">"frameworks"</span><span className="punctuation">:</span> <span className="punctuation">[</span><span className="string">"Express"</span><span className="punctuation">],</span></div>
              <div className="code-line">    <span className="property">"apis"</span><span className="punctuation">:</span> <span className="punctuation">[</span><span className="string">"REST"</span><span className="punctuation">,</span> <span className="string">"GraphQL"</span><span className="punctuation">],</span></div>
              <div className="code-line">    <span className="property">"proficiency"</span><span className="punctuation">:</span> <span className="value">90</span></div>
              <div className="code-line">  <span className="punctuation">{'}'}</span><span className="punctuation">,</span></div>
              <div className="code-line">  <span className="property">"database"</span><span className="punctuation">:</span> <span className="punctuation">[</span><span className="string">"MongoDB"</span><span className="punctuation">,</span> <span className="string">"PostgreSQL"</span><span className="punctuation">,</span> <span className="string">"Redis"</span><span className="punctuation">],</span></div>
              <div className="code-line">  <span className="property">"devops"</span><span className="punctuation">:</span> <span className="punctuation">[</span><span className="string">"Docker"</span><span className="punctuation">,</span> <span className="string">"AWS"</span><span className="punctuation">,</span> <span className="string">"CI/CD"</span><span className="punctuation">],</span></div>
              <div className="code-line">  <span className="property">"tools"</span><span className="punctuation">:</span> <span className="punctuation">[</span><span className="string">"Git"</span><span className="punctuation">,</span> <span className="string">"VS Code"</span><span className="punctuation">,</span> <span className="string">"Postman"</span><span className="punctuation">]</span></div>
              <div className="code-line"><span className="punctuation">{'}'}</span><span className="cursor"></span></div>
            </div>


            <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
              <div className="code-line"><span className="comment">// experience.ts - Professional Journey</span></div>
              <div className="code-line"><span className="keyword">interface</span> <span className="type">Experience</span> <span className="punctuation">{'{'}</span></div>
              <div className="code-line">  <span className="property">company</span><span className="punctuation">:</span> <span className="type">string</span><span className="punctuation">;</span></div>
              <div className="code-line">  <span className="property">role</span><span className="punctuation">:</span> <span className="type">string</span><span className="punctuation">;</span></div>
              <div className="code-line">  <span className="property">period</span><span className="punctuation">:</span> <span className="type">string</span><span className="punctuation">;</span></div>
              <div className="code-line">  <span className="property">highlights</span><span className="punctuation">:</span> <span className="type">string</span><span className="punctuation">[];</span></div>
              <div className="code-line"><span className="punctuation">{'}'}</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="keyword">const</span> <span className="property">journey</span><span className="punctuation">:</span> <span className="type">Experience</span><span className="punctuation">[]</span> <span className="punctuation">=</span> <span className="punctuation">[</span></div>
              <div className="code-line">  <span className="punctuation">{'{'}</span></div>
              <div className="code-line">    <span className="property">company</span><span className="punctuation">:</span> <span className="string">"Infosys Pvt. Ltd."</span><span className="punctuation">,</span></div>
              <div className="code-line">    <span className="property">role</span><span className="punctuation">:</span> <span className="string">"Full Stack Developer"</span><span className="punctuation">,</span></div>
              <div className="code-line">    <span className="property">period</span><span className="punctuation">:</span> <span className="string">"2022 - Present"</span><span className="punctuation">,</span></div>
              <div className="code-line">    <span className="property">highlights</span><span className="punctuation">:</span> <span className="punctuation">[</span></div>
              <div className="code-line">      <span className="string">"Led team of 3 developers"</span><span className="punctuation">,</span></div>
              <div className="code-line">      <span className="string">"Built scalable microservices architecture"</span><span className="punctuation">,</span></div>
              <div className="code-line">      <span className="string">"Reduced API response time by 60%"</span></div>
              <div className="code-line">    <span className="punctuation">]</span></div>
              <div className="code-line">  <span className="punctuation">{'}'}</span></div>
              <div className="code-line"><span className="punctuation">];</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span className="keyword">export</span> <span className="punctuation">{'{'}</span> <span className="property">journey</span> <span className="punctuation">{'}'};</span><span className="cursor"></span></div>
            </div>
          </div>
        </div>

        <div className="status-bar">
          <div className="status-left">
            <span>⚡ Ln {typedLines.length + 1}, Col {currentCharIndex}</span>
            <span>UTF-8</span>
            <span>JavaScript</span>
          </div>
          <div className="status-right">
            <span>Prettier</span>
            <span>ESLint</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorModal;
