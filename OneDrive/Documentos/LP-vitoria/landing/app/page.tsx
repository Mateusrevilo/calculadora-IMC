import HeroSection from "./components/HeroSection";
import DescricaoPrata from "./components/Cards/DescricaoPrata";
import DescricaoSemiJoia from "./components/Cards/DescricaoSemiJoia";
import DescricaoBijuteria from "./components/Cards/DescricaoBijuteria";

export default function Home() {

  //Aqui estão os dados da HeroSection
  const contentHero = {
    title: "Conto de Pratas",
    subtitle: "Pratas e Acessórios",
    btnText: "Compre Agora"
  }

  //Aqui estão os cards de diferenca entre pratas e semijoias

  //card de Pratas
  const cardPrata = {
    titulo: "Pratas",
    texto: "Durabilidade e Investimento de Longo Prazo",
    texto2: "Brilho e Elegância Atemporal",
    texto3: "É Hipoalergênica",
    texto4: "Extrema Versatilidade",
    texto5: "Acessibilidade como Joia"
  }

  //card de semiJoia

  const cardSemiJoia = {
    titulo: "Semijoias",
    texto: "Versatilidade para Combinar",
    texto2: "Hipoalergenicidade",
    texto3: "Potencial de Revitalização (Limpeza)",
    texto4: "Acessibilidade com Status de Joia",
    texto5: "Durabilidade Estrutural"
  }

  // Card de BiJuteria

  const cardBijuteria = {
    titulo: "Semijoias",
    texto: "Durabilidade Extremamente Baixa",
    texto2: "Risco Alto de Alergias e Irritações na Pele",
    texto3: "Escurecimento Rápido e Irreversível",
    texto4: "Falta de Sustentabilidade",
    texto5: "Aparência e Acabamento Inferiores"
  }


  return (
    <div>
      <h1>Há Uma Nova História. Conheça o Conto de Prata!</h1>
      <HeroSection hero={contentHero} />
      <DescricaoPrata descricao={cardPrata} />
      <DescricaoSemiJoia descricao={cardSemiJoia} />
      <DescricaoBijuteria descricao={cardBijuteria} />
    </div>
  );
}
