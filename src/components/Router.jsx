import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import Header from '../pages/Header.jsx';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact/' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
