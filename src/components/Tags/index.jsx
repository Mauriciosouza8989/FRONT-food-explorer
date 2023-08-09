import { Container } from './style'
import { FiPlus, FiX } from 'react-icons/fi'

export function Tags({isNew:isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input 
                type='text'
                value={value}
                readOnly={!isNew}
                {...rest}
            />
            <button
                type='button'  
                onClick={onClick}
                className={isNew ? 'button-add': 'button-remove'}     
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}