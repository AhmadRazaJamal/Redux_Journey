
const withLevel = (Component) => {
    return function levelComponent({ level, ...props }) {
        console.log(level);
        if (level == 'bronze') return ( <Component {...props}>Welcome to the Bronze level</Component> );
        if (level == 'silver') return ( <Component {...props}>Welcome to the Silver level</Component> );
        if (level == 'gold') return ( <Component {...props}>Welcome to the Gold level</Component> );
        return <p>Hold on, you're broke sir.</p>;
    };
}

export default withLevel;