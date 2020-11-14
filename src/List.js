export const List = ({list}) => {
    return (
        <ul>
            {list.map(item => <li key= {item.key}>{item.name}</li>)}
        </ul>
    );
}