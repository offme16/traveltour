import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { Footer } from "./components/Footer/Footer";
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userActions.initAuthData());
  // }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" />
        </Routes>
        <Footer />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
