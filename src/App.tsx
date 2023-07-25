import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import Course from "./Pages/Course";
import Lesson from "./Pages/Lesson";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/course">
              <Route path=":slug" element={<Course />}></Route>
              <Route path="lesson/:slug" element={<Lesson />}></Route>
            </Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
