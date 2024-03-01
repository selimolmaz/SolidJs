import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import HomePage from './pages/Home';
import { A, Route, Router } from '@solidjs/router';
import ReactivityPage from './pages/ReactivityPage';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <Router>
          <Route path="/reactivity" component={ReactivityPage} />
          <Route path="/" component={HomePage} />
        </Router>
      </header>
    </div>
  );
};

export default App;
