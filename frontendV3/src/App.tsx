import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="appContainer">
      <aside className="appSidebar">
        <Sidebar />
        {/* Sidebar */}
      </aside>
      <main className="appContent">
        <RouterProvider router={router} />
        {/* main content */}
      </main>
    </div>
  );
}

export default App;
