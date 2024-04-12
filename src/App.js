import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { Footer } from "./components/Footer/Footer";
import Registration from "./pages/Registration/Registration";
import Authorize from "./pages/Authorize/Authorize";
import Tour from "./pages/Tour/Tour";
import { AuthUser } from "./store/asyncThunk/auth";
import { useEffect } from "react";
import { USER_LOCALSTORAGE_KEY } from "./store/const/actionTypes";
function App() {

   const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem(USER_LOCALSTORAGE_KEY)){
      dispatch(AuthUser());
    }
  }, [dispatch]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorize" element={<Authorize />} />
          <Route path="/tour/:id" element={<Tour />} />
          <Route path="/" />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
