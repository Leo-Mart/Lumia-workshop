import Header from './pages/Header';
import Home from './pages/Home';
import Router from './components/Router';
import { LampsProvider, LampsContext } from './Context/LampsContext';

function App() {
  return (
    <>
      <LampsProvider>
        <Router />
      </LampsProvider>
    </>
  );
}

export default App;
