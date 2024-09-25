import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;`

const Icones = styled.ul`
    display: flex;
    aligne-items: center;`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
        <ul className='icones'>
            { icones.map( (icone) => {
              <li className='icone'><img src={icone}></img></li>
        }) }
        </ul>
        </Icones>
    )
}

export default IconesHeader