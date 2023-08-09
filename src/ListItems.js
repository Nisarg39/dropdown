
function ListItems(props){
    const item = props.item;
    const itemNameChange =() => {
        props.changeName(item)
    }
    
    return(
        <>
        <li><a className="dropdown-item" onClick={itemNameChange} href="/#">{item}</a></li>    
        </>
    )
}

export default ListItems;