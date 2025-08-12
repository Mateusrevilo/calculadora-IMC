import { useState, useEffect, } from "react";
import ProdutoCard from "../components/ProdutoCard";





function Home() {

    // 1- Lista dinamica dos produtos renderizados na tela 
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true)
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
            setCarregando(false)
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
        <>
            <>
                <div className="p-4" >
                    <h3>Lista de produtos:</h3>
                    {carregando ? (
                        <p>Carregando...</p>
                    ) : (
                        <div className="flex justify-center-safe content-center p-2 gap-4 ">
                            <div>
                                <> {produtos.map((produto) => <ProdutoCard key={produto.id} {...produto} onDelete={() => handleDeleteProduto(produto.id)} />)}</>
                            </div>
                        </div>
                    )}

                </div>



                <form onSubmit={handleSubmit} className="p-2">
                    <h2 className="p-4">Adicionar Novo Produto</h2>
                    <div className="bg-white bg-opacity-10 backdrop-blur flex flex-col gap-3 p-4 rounded">
                        <>
                            <div className=" ">
                                <label htmlFor="nome">Nome:</label>
                                <input
                                    type="text"
                                    value={novoProduto.nome}
                                    onChange={(e) =>
                                        setNovoProduto({ ...novoProduto, nome: e.target.value })
                                    }
                                />

                            </div>
                            <div className="">
                                <label htmlFor="preco">Preço:</label>
                                <input
                                    type="text"
                                    value={novoProduto.preco}
                                    onChange={(e) =>
                                        setNovoProduto({ ...novoProduto, preco: e.target.value })
                                    }
                                />
                            </div>
                            <div className="">
                                <label htmlFor="descricao">Descrição:</label>
                                <input
                                    type="text"
                                    value={novoProduto.descricao}
                                    onChange={(e) =>
                                        setNovoProduto({ ...novoProduto, descricao: e.target.value })
                                    }
                                />
                            </div>
                        </>
                        

                    </div>
                    <button type="submit" className="bg-blue-500 rounded-md p-4 m-0.5 cursor-pointer hover:scale-105">Adicionar</button>
                </form>
            </>
        </>
    );
}


export default Home