import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><a href="bootstrap"></a></svg>
        <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="https://github.com/jroller33/react-weather-app" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="https://github.com/jroller33/react-weather-app" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="https://github.com/jroller33/react-weather-app" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="https://github.com/jroller33/react-weather-app" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="https://github.com/jroller33/react-weather-app" className="nav-link">About</a></li>
      </ul>
    </header>
    </div>
  );
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
