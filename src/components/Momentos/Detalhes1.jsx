import React from "react";
import "./Momentos.css";
import imgTeste from "../../assets/imgteste.jpg"; // Imagem temporária

const Detalhes1 = () => {
    return (
        <div className="detalhes-container">
            {/* Banner Principal */}
            <div className="detalhes-banner">
                <img src={imgTeste} alt="História de Sucesso" className="banner-imagem" />
                <div className="banner-texto">
                    <h1>A Jornada de Sucesso</h1>
                    <p>Transformamos sonhos em realizações marcantes.</p>
                </div>
            </div>

            {/* Seção 1: O Começo */}
            <section className="detalhes-secao">
                <div className="conteudo-historia">
                    <div className="texto-box">
                        <h2>O Começo de Tudo</h2>
                        <p>
                            Toda grande jornada começa com um primeiro passo. Nosso cliente,
                            movido pela determinação e inovação, iniciou seu caminho com
                            desafios que testaram sua visão e coragem.
                        </p>
                    </div>
                    <div className="imagem-box">
                        <img src={imgTeste} alt="O Começo de Tudo" />
                    </div>
                </div>
            </section>

            {/* Seção 2: O Desenvolvimento */}
            <section className="detalhes-secao invertido">
                <div className="conteudo-historia">
                    <div className="imagem-box">
                        <img src={imgTeste} alt="Desenvolvimento" />
                    </div>
                    <div className="texto-box">
                        <h2>Superando Obstáculos</h2>
                        <p>
                            Com cada desafio, surgia uma nova oportunidade. Nossa equipe
                            trabalhou lado a lado para criar soluções que combinassem
                            criatividade e eficiência, resultando em progresso constante.
                        </p>
                    </div>
                </div>
            </section>

            {/* Seção 3: A Grande Conquista */}
            <section className="detalhes-secao">
                <div className="conteudo-historia">
                    <div className="texto-box">
                        <h2>A Grande Conquista</h2>
                        <p>
                            Depois de muito trabalho e dedicação, alcançamos resultados
                            impressionantes. Essa conquista não é apenas um marco, mas um
                            testemunho da força da visão e do trabalho em equipe.
                        </p>
                    </div>
                    <div className="imagem-box">
                        <img src={imgTeste} alt="A Grande Conquista" />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="detalhes-cta">
                <h2>Conheca Mais </h2>
                <p>
                    Saiba mais sobre nossos momentos de sucesso e inspire-se com as histórias
                    que fazem a diferença.
                </p>
                <button className="cta-botao" onClick={() => window.location.href = '/momentos'}>
                    Saiba Mais
                </button>
            </section>

        </div>
    );
};

export default Detalhes1;
