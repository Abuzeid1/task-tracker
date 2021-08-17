

import Button from './Button'
function Header({title, onAdd, showAdd}) {
    
    return (
        <header className='header'>
           <h1>{title}</h1>
           <Button onClick={onAdd} color={showAdd ?'red' : 'green' } text={showAdd ? 'close' : 'Add' }/>
        </header>
    )
}
Header.defaultProps = {
    title:'Task Tracker'
}
export default Header
