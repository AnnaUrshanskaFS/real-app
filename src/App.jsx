import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import SignUp from "./components/signUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/signIn";
function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header className="">
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<SignUp redirect="/" />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
