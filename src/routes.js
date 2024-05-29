import Rodape from "componetes/Rodape";
import Menu from "./componetes/Menu";
import Inicio from "./paginas/Inicio/Index";
import SobreMim from "./paginas/SobreMim/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaginaPadrao from "componetes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
