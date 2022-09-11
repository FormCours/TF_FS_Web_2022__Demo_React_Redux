import { Route, Routes } from 'react-router-dom';
import './App.css';
import BaseLayout from './layout/base-layout';
import HomePage from './pages/home/home';
import PersonAddPage from './pages/person/pages/person-add';
import PersonDetailPage from './pages/person/pages/person-detail';
import PersonListPage from './pages/person/pages/person-list';
import PersonPage from './pages/person/person';

function App() {
  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path='person' element={<PersonPage />}>
          <Route index element={<PersonListPage />} />
          <Route path=':id' element={<PersonDetailPage />} />
          <Route path='add' element={<PersonAddPage />} />
        </Route>
      </Route>
      {/* <Route path='/admin' element={<AdminLayout />}>

      </Route> */}
    </Routes>
  );
}

export default App;
