import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import Container from './components/Container'

import MainPage from './mainPage/MainPage'

function App() {
  return (
    <div className="mainPage">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Container />} />
        </Route>
      </Routes>
      {/* <Header /> */}
      {/* <Container /> */}
    </div>
  )
}

export default App
