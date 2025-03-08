import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [showAccessGranted, setShowAccessGranted] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [terminalText, setTerminalText] = useState([]);
  
    const handleAccess = () => {
        setShowAccessGranted(true);
        const randomStr = Math.random().toString(36).substring(1);
        setSearchText(randomStr);
        
        // Sequential text display
        setTimeout(() => {
            setTerminalText(['Initiating access protocol...']);
        }, 0);
        
        setTimeout(() => {
            setTerminalText(prev => [...prev, 'Authenticating user...']);
        }, 1000);
        
        setTimeout(() => {
            setTerminalText(prev => [...prev, `Search key: ${randomStr}`]);
        }, 2000);
        
        setTimeout(() => {
            setTerminalText(prev => [...prev, 'Access Granted...']);
        }, 3000);
        
        // Navigate after all text is shown
        setTimeout(() => {
            navigate('/main');
        }, 4000);
    };
  
    return (
        <div className="landing-container">
            <div className="sanskrit-text">
                ॐ सर्वे भवन्तु सुखिनः
            </div>
            <button className="access-button" onClick={handleAccess}>
                Click here to access the portal
            </button>
            
            {showAccessGranted && (
                <div className="access-overlay">
                    <div className="terminal-window">
                        <div className="terminal-text">
                            {terminalText.map((text, index) => (
                                <div key={index} className="terminal-line">
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;