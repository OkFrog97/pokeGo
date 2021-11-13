// import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
          <Header/>
      </div>
  );
}

function Header(props){
  const name = props?.name;
  const headerTag = (
      <header>
        <h1>Pokemon! {name ? `Hello, ${name}` : ''}</h1>
      </header>
  );
  return headerTag
}


export default App;




// first react
// (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
// );