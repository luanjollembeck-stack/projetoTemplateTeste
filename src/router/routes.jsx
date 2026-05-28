import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Estadios from "../pages/Estadios";
import Jogadores from "../pages/Jogadores";
import Jogos from "../pages/Jogos";
import Selecoes from "../pages/Selecoes";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/estadios", element: <Estadios />},
    {path: "/Jogadores", element: <Jogadores />},
    {path: "/Jogos", element: <Jogos />},
    {path: "/Selecoes", element: <Selecoes />},
])

export default router;