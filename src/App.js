import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import Home from './Components/Screen/Home';
import Navbar from './Components/utils/Navbar';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Business from './Components/Screen/Business';

const App = () => {

  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/business' element={<Business/>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
