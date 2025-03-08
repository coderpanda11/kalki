import React, { useState, useEffect } from 'react';
import '../styles/MainPage.css';

const MainPage = () => {
    const [terminalHistory, setTerminalHistory] = useState([]);
    const [currentCommand, setCurrentCommand] = useState('');

    const virtualFiles = {
      'bio.txt': 'Full-stack developer with a passion for cybersecurity and web development.',
      'skills.txt': 'Languages: JavaScript, Python, Java\nFrameworks: React, Node.js, Express\nTools: Git, Docker, AWS',
      'projects.txt': '1. Cybersecurity Dashboard\n2. Web Vulnerability Scanner\n3. Portfolio Website',
      'contact.txt': 'Email: sidharthpandarpg1@gmail.com\nLinkedIn: linkedin.com/in/yourprofile'
  };

  const commands = {
      'help': `Available commands:
ls                     List all files
cat <filename>         Display file contents
clear                  Clear terminal screen
social                 Show social media links
download resume        Download my resume`,
      
      'ls': Object.keys(virtualFiles).join('    '),
      'clear': 'clear',
      'social': `Platform                Link
------------------------------------------
Medium          https://medium.com/@yourusername
Twitter         https://twitter.com/yourusername
Instagram       https://instagram.com/yourusername`,
      'download resume': 'Downloading resume...'
  };

  const handleCommand = (e) => {
      if (e.key === 'Enter') {
          const cmd = currentCommand.trim().toLowerCase();
          const newHistory = [...terminalHistory, { type: 'input', text: `$ ${currentCommand}` }];
          
          if (cmd === 'clear') {
              setTerminalHistory([]);
          } else if (cmd === 'ls') {
              newHistory.push({ type: 'output', text: commands['ls'] });
          } else if (cmd.startsWith('cat ')) {
              const fileName = cmd.slice(4);
              if (virtualFiles[fileName]) {
                  newHistory.push({ type: 'output', text: virtualFiles[fileName] });
              } else {
                  newHistory.push({ type: 'output', text: `cat: ${fileName}: No such file` });
              }
          } else if (commands[cmd]) {
              if (cmd === 'download resume') {
                  window.open('/path-to-your-resume.pdf', '_blank');
              }
              newHistory.push({ type: 'output', text: commands[cmd] });
          } else {
              newHistory.push({ type: 'output', text: `Command '${cmd}' not found. Type "help" for available commands.` });
          }
          
          setTerminalHistory(cmd === 'clear' ? [] : newHistory);
          setCurrentCommand('');
      }
  };

    return (
        <div className="main-container">
            <h1 className="glitch-text">Sidharth Panda</h1>

            <div className='content-wrapper'>
              <div className='nav-links'>
                <a href='/blog' className='nav-link'>Blogs</a>
                <a href='/notes' className='nav-link'>Notes</a>
              </div>
            </div>
            
            <div className="terminal-container">
                <div className="terminal-header">
                    <div className="terminal-button"></div>
                    <div className="terminal-button"></div>
                    <div className="terminal-button"></div>
                </div>
                <div className="terminal-body">
                    {terminalHistory.map((item, index) => (
                        <div key={index} className={`terminal-line ${item.type}`}>
                            {item.text}
                        </div>
                    ))}
                    <div className="terminal-input">
                        $ <input 
                            type="text"
                            value={currentCommand}
                            onChange={(e) => setCurrentCommand(e.target.value)}
                            onKeyPress={handleCommand}
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;