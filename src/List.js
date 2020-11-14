export const List = ({list, archiveItem}) => {
    return (
        <ul>
            {list.map(item => <li key= {item.key}>
                <span>{item.name}</span>
                <span>
                    <button
                    type="button"
                    onClick={archiveItem}
                    value={item.key}
                    >
                        Archive
                    </button>
                </span>
                </li>)}
        </ul>
    );
}