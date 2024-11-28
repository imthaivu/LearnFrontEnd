// import logo from './logo.svg';
import './App.css';

function App() {
  let name = "vu quoc thai";
  const css = {
    color:"red",
    backgroundColor:"blue"
  }

  return (
    <div className="test" style={css}>
      Hello {name}
    </div>
  );
}

export default App;
