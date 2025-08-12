import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";




function Home() {

    // 1- Lista dinamica dos produtos renderizados na tela 
    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({
        nome: "",
        preco: "",
        descricao: ""
    });

    useEffect(() => {
        const ListaDeProduto = [
            { id: 0, nome: "Camisa", preco: 50.00, descricao: 'Camisa Oversized' },
            { id: 1, nome: "Calça", preco: 80.00, descricao: 'Calça joker' },
            { id: 2, nome: 'Bermuda', preco: 45.00, descricao: 'Bermuda Cargo' }
        ];
        setTimeout(() => {
            setProdutos(ListaDeProduto);
        }, 1200);
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()

        const novo = {
            ...novoProduto,
            id: Date.now(),
        }
        setProdutos([...produtos, novo])
        setNovoProduto({ nome: '', preco: '', descricao: '', imagem: '' })
    }

    const handleDeleteProduto = (id) => {
        const novaLista = produtos.map(produto => produto.id !== id);
        setProdutos(novaLista);
    }


    return (
        <div className="max-w-xl mx-auto shadow-xl">
            <div className="p-5">
                <h3 className="uppercase p-2">Lista de produtos:</h3>
                <div key={produtos.id} >
                    <div className="grid grid-cols-3 gap-4">
                        {produtos.map((produtos) => <ProdutoCard key={produtos.id} {...produtos} onDelete={() => handleDeleteProduto(produtos.id)} />)}
                    </div>

                </div>

                <div >
                    <form onSubmit={handleSubmit} className=" flex flex-col">
                    <h2 className="p-2 uppercase">Adicionar Novo Produto:</h2>

                    <label htmlFor="nome">Nome do Produto:</label>
                    <input
                        type="text"
                        value={novoProduto.nome}
                        onChange={(e) =>
                            setNovoProduto({ ...novoProduto, nome: e.target.value })
                        }
                    />
                    <label htmlFor="preco">Preço do Produto:</label>
                    <input
                        type="text"
                        value={novoProduto.preco}
                        onChange={(e) =>
                            setNovoProduto({ ...novoProduto, preco: e.target.value })
                        }
                    />
                    <label htmlFor="descricao">Descrição do Produto:</label>
                    <input
                        type="text"
                        value={novoProduto.descricao}
                        onChange={(e) =>
                            setNovoProduto({ ...novoProduto, descricao: e.target.value })
                        }
                    />
                    <button type="submit" className="bg-blue-500/50 p-2 rounded-xl cursor-pointer scale-100 hover:bg-blue-700 ">Enviar</button>
                </form>

                </div>
                
            </div>


        </div>
    );
}


export default Home