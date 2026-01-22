import styles from './Cardapio.module.css';

const Cardapio = () => {

    const hamburguer = [
        {
            id: 1,
            nome: "Classic Cheese",
            descricao: "Pão brioche, blend bovino 160g, queijo cheddar fatiado e maionese da casa.",
            preco: 28.90,
            emoji: "🧀"
        },
        {
            id: 2,
            nome: "Bacon Blast",
            descricao: "Hambúrguer bovino, muito bacon crocante, cebola caramelizada e molho barbecue.",
            preco: 34.50,
            emoji: "🥓"
        },
        {
            id: 3,
            nome: "Veggie Fresh",
            descricao: "Hambúrguer de grão-de-bico, alface americana, tomate, picles e molho de ervas.",
            preco: 31.00,
            emoji: "🥬"
        }
    ];

    const sorvete = [
        {
            id: 4,
            nome: "Casquinha Trufada",
            descricao: "Sorvete de baunilha em casquinha crocante recheada com chocolate belga.",
            preco: 12.00,
            emoji: "🍨"
        },
        {
            id: 5,
            nome: "Sundae de Morango",
            descricao: "Duas bolas de sorvete de creme, calda artesanal de morango e pedaços da fruta.",
            preco: 18.50,
            emoji: "🍓"
        },
        {
            id: 6,
            nome: "Milkshake de Pistache",
            descricao: "Batido com sorvete premium de pistache e finalizado com chantilly.",
            preco: 24.00,
            emoji: "🥜"
        }
    ];


    const bebidas = [
  {
    id: 7,
    nome: "Limonada Suíça",
    descricao: "Suco de limão batido com leite condensado e gelo (500ml).",
    preco: 14.00,
    emoji: "🍋"
  },
  {
    id: 8,
    nome: "Refrigerante Artesanal",
    descricao: "Sabor cola com extrato natural de baunilha e menos açúcar.",
    preco: 9.50,
    emoji: "🥤"
  },
  {
    id: 9,
    nome: "Cerveja IPA",
    descricao: "Cerveja artesanal encorpada com notas cítricas e amargor equilibrado.",
    preco: 22.00,
    emoji: "🍺"
  }
]

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Cardápio de Hambúrgueres</h1>
                <div className={styles.grid}>
                    {hamburguer.map(item => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageSectionHamburguer}>
                                {/* aqui tem uma imagem */}
                                <div className={styles.emojiContainer}>
                                    <div className={styles.emojiHamburguer}>
                                        <span className={styles.emoji}>{item.emoji}</span>
                                    </div>
                                    <h3 className={styles.itemName}>{item.nome}</h3>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <p className={styles.description}>{item.descricao}</p>
                                <div className={styles.footer}>
                                    <span className={styles.price}>R$ {item.preco.toFixed(2)}</span>
                                    <button className={styles.buttonHamburguer} onClick={() => {window.dispatchEvent(new CustomEvent("adicionarCarrinho", {detail: hamburguer }))}}>
                                        ADICIONAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>,

            <div className={styles.container}>
                <h1 className={styles.title}>Cardápio de Sorvetes </h1>
                <div className={styles.grid}>
                    {sorvete.map(item => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageSectionSorvete}>
                                {/* aqui tem uma imagem */}
                                <div className={styles.emojiContainer}>
                                    <div className={styles.emojiSorvete}>
                                        <span className={styles.emoji}>{item.emoji}</span>
                                    </div>
                                    <h3 className={styles.itemName}>{item.nome}</h3>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <p className={styles.description}>{item.descricao}</p>
                                <div className={styles.footer}>
                                    <span className={styles.price}>R$ {item.preco.toFixed(2)}</span>
                                    <button className={styles.buttonSorvete} onClick={() => {window.dispatchEvent(new CustomEvent("adicionarCarrinho", {detail: sorvete}))}} >
                                        ADICIONAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>,
             <div className={styles.container}>
                <h1 className={styles.title}>Cardápio de Bebidas </h1>
                <div className={styles.grid}>
                    {bebidas.map(item => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageSectionBebidas}>
                                {/* aqui tem uma imagem */}
                                <div className={styles.emojiContainer}>
                                    <div className={styles.emojiBebidas}>
                                        <span className={styles.emoji}>{item.emoji}</span>
                                    </div>
                                    <h3 className={styles.itemName}>{item.nome}</h3>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <p className={styles.description}>{item.descricao}</p>
                                <div className={styles.footer}>
                                    <span className={styles.price}>R$ {item.preco.toFixed(2)}</span>
                                    <button className={styles.buttonBebidas}   onClick={() => {window.dispatchEvent(new CustomEvent("adicionarCarrinho", {detail: bebidas}))}} >
                                        ADICIONAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>

    )
}

export default Cardapio