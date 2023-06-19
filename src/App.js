import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx";
import { Provider } from "react-redux";
import store from './redux/index.js'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
