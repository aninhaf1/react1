import Header from './components/Header/Header';
import Home from './components/paginas/Principal';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import CreateStyledGlobal, { ContainerMain, TelaInteira } from './styledGlobal';


function App() {

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <>
    <CreateStyledGlobal/>
    <TelaInteira>

      <Header/>

      <ContainerMain>
        <Nav/>

        <Home reproduz={reproduzVideo}/>

      </ContainerMain>

      <Footer/>
    </TelaInteira>
       
  </>
  );
}
export default App;