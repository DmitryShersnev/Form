import "./App.css";
import RegistrationForm1 from "./RegistrationForm1";
import RegistrationForm2 from "./RegistrationForm2";
import { Routes, Route, NavLink } from "react-router";
function App() {
  return (
    <>
      <nav>
        <NavLink to="/rhf">React Hook Form</NavLink>
        <br></br>
        <NavLink to="/formik">Formik with Yup</NavLink>
      </nav>
      <Routes>
        <Route path="/rhf" element={<RegistrationForm1 />} />
        <Route path="/formik" element={<RegistrationForm2 />} />
      </Routes>
    </>
  );
}

export default App;
