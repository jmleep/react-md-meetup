import React from 'react';
import { Router, Link } from '@reach/router';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Content from '../Content/Content';
import CounterView from '../CounterView/CounterView';
import PresetCounterView from '../PresetCounterView/PresetCounterView';
import ClassView from '../ClassView/ClassView';
import styles from './App.css';
import logo from '../../static/crab.png';

document.body.style.margin = 0;

const Image = () => (
  <div className={styles.image}>
    <Link to="/">Back to Home</Link>
    <img src={logo} alt="ReactMD Logo" />
  </div>
);

const App = () => (
  <div className={styles.app}>
    <Header />
    <Router>
      <Content path="/" />
      <Intro path="intro" />
      <Image path="reactMD-logo" />
      <CounterView path="counter" />
      <PresetCounterView path="preset-counter" />
      <ClassView path="class/:name" />
      <About path="about" />
    </Router>
  </div>
);

export default App;
