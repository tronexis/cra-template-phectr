import tw, { styled } from "twin.macro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Providers from "./providers";
import Home from './pages/Home';

const App = ({ ...props }) => {
  return (
    <Providers>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </Router>
    </Providers>
  );
};

const Container = styled.div`
  ${tw``}
`;

export default App;
