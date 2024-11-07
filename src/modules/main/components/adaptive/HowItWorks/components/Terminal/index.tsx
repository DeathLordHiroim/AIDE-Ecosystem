import React from 'react';
import styles from '../../styles/index.module.css';

interface TerminalProps {
  content: string;
}

const Terminal: React.FC<TerminalProps> = ({ content }) => {
  return (
    <div className={styles.terminalContent}>
      <pre>{content}</pre>
    </div>
  );
};

export default Terminal; 