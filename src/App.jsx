import RoutesProvider from "./routes/RoutesProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <RoutesProvider />
    </>
  );
}

export default App;
