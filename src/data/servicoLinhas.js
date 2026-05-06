import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";

/**
 * Seis linhas de serviço (nomes e bullets alinhados ao site legado).
 * Imagens: 9–13; Momentos reutiliza 9 por falta de sexta foto dedicada.
 */
export const SERVICO_LINHAS = [
  {
    id: "baixa-tensao",
    title: "BAIXA TENSÃO",
    items: [
      "Painéis de distribuição",
      "Painéis de comando",
      "Banco de capacitores",
      "Painéis certificados",
    ],
    image: img9,
    imageAlt:
      "Soluções em baixa tensão: painéis de distribuição e comando AVOLT",
    to: "/baixa-tensao",
  },
  {
    id: "media-tensao",
    title: "MÉDIA TENSÃO",
    items: [
      "Cabines tipo semi-enterrada metálica",
      "Cubículos principais",
      "Soluções de proteção",
      "Outros painéis certificados",
    ],
    image: img12,
    imageAlt: "Cubículos e soluções de média tensão AVOLT",
    to: "/media-tensao",
  },
  {
    id: "abrigos-eletrocentro",
    title: "ABRIGOS E ELETROCENTRO",
    items: [
      "Eletrocentros customizados",
      "Soluções modulares",
      "Projetos chave na mão",
      "Instalações robustas e seguras",
    ],
    image: img13,
    imageAlt: "Shelter e eletrocentro AVOLT para usinas e indústria",
    to: "/shelter-mt-trafo-bt",
  },
  {
    id: "automacao",
    title: "AUTOMAÇÃO",
    items: [
      "Programação de CLPs",
      "Integração de sistemas industriais",
      "Monitoramento remoto",
      "Sistemas SCADA",
    ],
    image: img11,
    imageAlt: "Painéis de automação industrial e CLPs AVOLT",
    to: "/automacao-e-telemetria",
  },
  {
    id: "missao-critica",
    title: "MISSÃO CRÍTICA",
    items: [
      "Infraestruturas de alta confiabilidade",
      "Soluções de redundância elétrica",
      "Gerenciamento de energia ininterrupta",
      "Projetos para data centers e hospitais",
    ],
    image: img10,
    imageAlt: "Infraestrutura elétrica de missão crítica AVOLT",
    to: "/missao-critica",
  },
  {
    id: "momentos-sucesso",
    title: "MOMENTOS DE SUCESSO",
    items: [
      "Cases de projetos realizados",
      "Depoimentos de clientes",
      "Histórias de inovação",
      "Implementações bem-sucedidas",
    ],
    image: img9,
    imageAlt: "Cases e projetos de sucesso AVOLT",
    to: "/momentos",
  },
];
