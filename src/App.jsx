import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from "./pages/LandingPage";
import Explore from './pages/Explore';
import Test from './pages/Test';
import './App.css'; 
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

import Bot from './pages/Bot';
import CareerDetail from './pages/CareerDetail';
import BrowseByIndustry from './pages/BrowseByIndustry';
import ResultPage from './pages/ResultPage';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <Router> 
      
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pschometric-test" element={
              <ProtectedRoute>
                <Test/>
              </ProtectedRoute>
             } />
            <Route path="/explore" element={
              <ProtectedRoute>
                <Explore/>
              </ProtectedRoute>
              } /> 



<Route path="/bot" element={
              <ProtectedRoute>
                <Bot/>
             </ProtectedRoute>
              } /> 

<Route path="/careers/:careerCode" element={
              <ProtectedRoute>
                <CareerDetail/>
              </ProtectedRoute>
              } /> 

              <Route path="/careers/browse/:industryName" element={
                <ProtectedRoute>
                <BrowseByIndustry/>
              </ProtectedRoute>
              }/>

<Route path="/psychometric-test/result" element={
                <ProtectedRoute>
                <ResultPage/>
              </ProtectedRoute>
              }/>

<Route path="/search/:searchItem" element={
                <ProtectedRoute>
                <SearchPage/>
              </ProtectedRoute>
              }/>

              

            <Route path="/login" element={<Login/>} /> 
            <Route path="/signup" element={<SignUp/>} /> 
            <Route path="/product/:id" element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }/>
          </Routes>
       
    </Router>
  );
}

export default App;
