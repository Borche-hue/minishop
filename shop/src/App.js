import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Data from './Components/Data'



const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})


function App() {

  return (
    <Router>
      <ApolloProvider client={client}>
          <Data />
      </ApolloProvider>
    </Router>
  );
}

export default App;
