//Libraries
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//Css
import "./index.css";

//Pages
import HomePage from "./Pages/HomePage";
import TodoPage from "./Pages/TodoPage";
import CreateTodoPage from "./Pages/CreateTodoPage.jsx";
import TodoDetailsPage from "./Pages/TodoDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import SideBarPage from "./Pages/SideBarPage.jsx";

//Mui
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";

function App() {
  return (
    <>
      <div>
        <ResponsiveAppBar />
      </div>

      <Routes>
        <Route path="home" element={<HomePage />} />

        <Route path="/todos" element={<SideBarPage />}>
          <Route index element={<TodoPage />} />

          <Route path="createTodo" element={<TodoPage />}>
            <Route index element={<CreateTodoPage />} />
          </Route>

          <Route path=":id" element={<TodoDetailsPage />} />
        </Route>

        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
