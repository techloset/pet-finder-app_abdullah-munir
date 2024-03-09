import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/home/Home';
import Detail from './src/pages/detail/Detail';



function Router(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default Router;
