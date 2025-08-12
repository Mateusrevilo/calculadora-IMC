const ProdutoCard = ({ nome, preco, imagem, descricao, onDelete }) => {
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 content-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="">
                    {imagem && <img src={imagem} alt={nome} />}
                    <div className="p-1.5">
                        <h2 className="uppercase">{nome}</h2>
                        <p className="">Preço: R${preco}.00</p>
                        <p className="">Descrição: {descricao}</p>
                    </div>
                </div>


                {onDelete && <button onClick={onDelete} className="bg-red-500 rounded-md p-2 m-0.5 cursor-pointer hover:scale-105">Excluir</button>}
            </div>
        </div>
    )
}

export default ProdutoCard