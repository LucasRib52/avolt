import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Importa o ScrollToTop
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Painel from "./components/Painel/Painel";
import Projetos from "./components/Projetos/Projetos";
import Certificacao from "./components/Certificacao/Certificacao";
import Tecnologia from "./components/Tecnologia/Tecnologia";
import Footer from "./components/Footer/Footer";

// Importando as páginas específicas
import BaixaTensao from "./components/Painel/BaixaTensao";
import Contato from "./components/Contato/Contato";
import Sobre from "./components/Sobre/Sobre";
import Momentos from "./components/Momentos/Momentos";
import Detalhes1 from "./components/Momentos/Detalhes1";
import Essencia from "./components/Essencia/Essencia";

// Importando os novos componentes das tecnologias
import EngenhariaDos5Ps from "./components/Tecnologia/EngenhariaDos5Ps";
import ProtecaoContraArcoEletrico from "./components/Tecnologia/ProtecaoContraArcoEletrico";
import ShelterMTTrafoBT from "./components/Tecnologia/ShelterMTTrafoBT";
import AutomacaoETelemetria from "./components/Tecnologia/AutomacaoETelemetria";
import Retrofit from "./components/Tecnologia/Retrofit";

// Importando as novas páginas da pasta Essencia
import Sustentabilidade from "./components/Essencia/Sustentabilidade";
import Software from "./components/Essencia/Software";
import Servicos from "./components/Essencia/Servicos";
import SetorSaude from "./components/Essencia/SetorSaude";
import Saneamento from "./components/Essencia/Saneamento";
import PaineisEventos from "./components/Essencia/PaineisEventos";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Adicionado aqui para monitorar todas as rotas */}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Painel />
              <Tecnologia />
              <Projetos />
              <Certificacao />
              <Essencia />
            </>
          }
        />
        <Route path="/baixa-tensao" element={<BaixaTensao />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/momentos" element={<Momentos />} />
        <Route path="/momentos/detalhes1" element={<Detalhes1 />} />
        <Route path="/essencia" element={<Essencia />} />
        <Route path="/engenharia-dos-5ps" element={<EngenhariaDos5Ps />} />
        <Route path="/protecao-contra-arco-eletrico" element={<ProtecaoContraArcoEletrico />} />
        <Route path="/shelter-mt-trafo-bt" element={<ShelterMTTrafoBT />} />
        <Route path="/automacao-e-telemetria" element={<AutomacaoETelemetria />} />
        <Route path="/retrofit" element={<Retrofit />} />
        {/* Adicionando as novas rotas da pasta Essencia */}
        <Route path="/sustentabilidade" element={<Sustentabilidade />} />
        <Route path="/software" element={<Software />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/saude" element={<SetorSaude />} />
        <Route path="/saneamento" element={<Saneamento />} />
        <Route path="/eventos" element={<PaineisEventos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
