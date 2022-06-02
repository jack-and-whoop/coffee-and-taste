import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import MenuListPage from './MenuListPage';

export default function App() {
  return (
    <BrowserRouter basename="/coffee-and-taste">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu-groups/:menuGroupId" element={<MenuListPage />} />
      </Routes>

    </BrowserRouter>
  );
}
