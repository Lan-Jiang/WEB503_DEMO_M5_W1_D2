class Football extends React.Component {
    shoot = () => {
        alert(this);
        /* this refer to the component */
    }
    render() {
        return(
            <button onClick = {this.shoot}>Take the shot!</button>
        )
    }
}

ReactDOM.render(<Football />, document.getElementById('root'));
