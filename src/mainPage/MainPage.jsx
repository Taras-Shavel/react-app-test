/* eslint-disable prettier/prettier */
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function MainPage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainPage
