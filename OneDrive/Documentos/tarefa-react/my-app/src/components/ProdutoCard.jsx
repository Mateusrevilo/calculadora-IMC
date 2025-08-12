const ProdutoCard = ({ nome, preco, imagem, descricao, onDelete }) => {
    return (


        <div className="w-24 h-64">
            <div className="shadow-xl/30 p-2.5 rounded-xl">
                {imagem && <img src={imagem} alt={nome} />}
                <div className="p-1.5">
                    <h2>{nome}</h2>
                    <p>Preço: R${preco}.00</p>
                    <p>Descrição: {descricao}</p>
                </div>
                {onDelete && <button onClick={onDelete} className="bg-red-500/50 p-2 rounded-xl cursor-pointer scale-100 hover:bg-red-700">Excluir</button>}
            </div>
        </div>


    )

}

export default ProdutoCard