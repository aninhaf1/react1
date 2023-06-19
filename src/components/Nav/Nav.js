import { MenuVertical, BotoesMenuVertical } from "./styled"

function Nav(){
    return(
    // <nav class="menu-vertical">
    <MenuVertical>
        <ul>
            <BotoesMenuVertical>Início</BotoesMenuVertical>
            <BotoesMenuVertical>Em alta</BotoesMenuVertical>
            <BotoesMenuVertical>Inscrições</BotoesMenuVertical>
            <hr></hr>
            <BotoesMenuVertical>Originais</BotoesMenuVertical>
            <BotoesMenuVertical>Histórico</BotoesMenuVertical>
        </ul>
    </MenuVertical>
    // </nav>
    )
}

export default Nav;