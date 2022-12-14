import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Navbar from './componenets/layout/Navbar';
import Footer from './componenets/layout/Footer';
import Alert from './componenets/layout/Alert';
import Home from './componenets/pages/Home';
import About from './componenets/pages/About';
import NotFound from './componenets/pages/NotFound';
import User from './componenets/pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
