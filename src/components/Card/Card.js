import { BoxPagPrincipal, Imagens, Fonte4 } from "./styled"

function Card(props) {
    
    return(
        <>
        <BoxPagPrincipal onClick={props.reproduz}>
            <Imagens src={props.link} alt=""></Imagens>
            <Fonte4>Título do vídeo</Fonte4>
        </BoxPagPrincipal>
        </>
    )
}

export default Card