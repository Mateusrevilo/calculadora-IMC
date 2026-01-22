import { useEffect, useState } from "react";
import styles from './Carrinho.module.css';

const Carrinho = () => {

    const [itens, setItens] = useState([]);

    useEffect(() => {
        const handleAdd = (e) => {
            setItens((prev) => {
                const newItems = [...prev, ...e.detail];
                // Remove duplicates by id
                const unique = newItems.filter((item, index, self) => 
                    index === self.findIndex(i => i.id === item.id)
                );
                return unique;
            });
        };
        window.addEventListener("adicionarCarrinho", handleAdd);
        return () => window.removeEventListener("adicionarCarrinho", handleAdd);
    }, []);

    const removeItem = (id) => {
        setItens((prev) => prev.filter(item => item.id !== id));
    };

    return(
        <>
        <div className={styles.cartContainer}>
            <h2 className={styles.title}>Carrinho:</h2>
            <div>
                {itens.length === 0 ? (<p className={styles.emptyMessage}>Nenhum item encontrado!</p>) : (
                    <ul className={styles.itemList}>
                        {itens.map((item) => (
                            <li key={item.id} className={styles.itemCard}>
                                <div className={styles.itemName}>{item.nome}</div>
                                <div className={styles.itemPrice}>R$ {item.preco.toFixed(2)}</div>
                                <button className={styles.deleteButton} onClick={() => removeItem(item.id)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                )}
                
            </div>
        </div>
        
        
        </>
    )
}

export default Carrinho