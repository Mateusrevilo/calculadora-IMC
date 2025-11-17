import { Catalogo } from "@/app/types/catalogo/Catalogo"

type Props = {
    catalogo: Catalogo
}

const ProdutoCatalogo = ({ catalogo }: Props) => {
    return (
        <div>
            <div>
                {catalogo.img}
                <div>
                    {catalogo.nome}
                    <button>
                        {catalogo.btn}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProdutoCatalogo