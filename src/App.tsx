import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import MockTest from './components/MockTest';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='mock-test' element={<MockTest />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
