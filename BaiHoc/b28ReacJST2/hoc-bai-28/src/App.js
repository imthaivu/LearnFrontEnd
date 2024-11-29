// import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavigationMenu from './components/NavigationMenu';

function App() {


  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content text="Content 1" number={10} active = {true}/>
        <MainContent />
        <Content  text="Content 2"  number={5} active = {false}/>
      </div>

      <Footer />
    </>
  );
}

export default App;
