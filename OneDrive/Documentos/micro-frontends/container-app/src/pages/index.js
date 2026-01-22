import dynamic from "next/dynamic";
import Image from "next/image";

import('cardapio/globals.css');

const Cardapio = dynamic(() => import("cardapio/Cardapio"), { ssr: false });
const Carrinho = dynamic(() => import("carrinho/Carrinho"), { ssr: false });

export default function Home() {
  return (
    <>
     
      <Cardapio />
      <Carrinho />
    </>

  );
}
