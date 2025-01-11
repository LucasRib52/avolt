import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Move a visualização para o topo da página
  }, [pathname]); // Executa toda vez que o caminho da rota muda

  return null; // Não renderiza nada
};

export default ScrollToTop;
