import { Descricao } from "@/app/types/descricao/Descricao"

type Props = {
    descricao: Descricao
}

const DescricaoSemiJoia = ({ descricao }: Props) => {
    return (
        <div>
            <div>
                <h3>{descricao.titulo}</h3>
                <div>
                    <ul>
                        <li>{descricao.texto}</li>
                        <li>{descricao.texto2}</li>
                        <li>{descricao.texto3}</li>
                        <li>{descricao.texto4}</li>
                        <li>{descricao.texto5}</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default DescricaoSemiJoia