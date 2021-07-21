import Login from './pages/Login';
import { Container } from './pages/Login/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PesquisaColaborador from './pages/PesquisaColaborador'
import CadastrarColaboradores from './pages/CadastrarColaboradores';

function App() {
  return (
      <BrowserRouter> 
      <Switch>
      <Container>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/pesquisacolaborador" exact component={PesquisaColaborador}/>
      <Route path="/cadastrarcolaboradores" exact component={CadastrarColaboradores}/>
      </Container>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
