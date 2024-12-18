import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-mono: ui-monospace, "Cascadia Mono", "Segoe UI Mono", "Liberation Mono", Menlo, Monaco, Consolas, monospace;
    --text-color: #cccccc;
    --highlight-color: #00ff00;
    --background-color: #000000;
    --border-color: #333333;
    --line-height: 1.6;
    --measure: 66ch;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background: var(--background-color);
  }

  body {
    background: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-mono);
    line-height: var(--line-height);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }

  #root {
    background: var(--background-color);
    width: 100%;
    max-width: var(--measure);
    padding: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    font-variant-numeric: tabular-nums;
    line-height: 1.4;
  }

  th, td {
    text-align: left;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color);
  }

  th {
    font-weight: normal;
    border-bottom-width: 2px;
  }

  input {
    background-color: var(--background-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 0.5rem;
    font-family: var(--font-mono);
    
    &:focus {
      border-color: var(--highlight-color);
      outline: none;
    }
  }

  button {
    font-family: var(--font-mono);
    background: none;
    border: 1px solid var(--border-color);
    color: var(--text-color);
    cursor: pointer;
    
    &:hover {
      background-color: var(--highlight-color);
      color: var(--background-color);
      border-color: var(--highlight-color);
    }
  }

  pre {
    margin: 0;
    padding: 0;
  }
`;
