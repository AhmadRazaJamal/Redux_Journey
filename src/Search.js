export const Search = ({query, onChange, SearchLabel}) => {
    return(
        <div>
            {SearchLabel} <input
            type = 'text'
            value = {query}
            onChange = {onChange}
            />
        </div>
    );
}