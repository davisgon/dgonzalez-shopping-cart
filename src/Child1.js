import MContext from "./MyProviderContext"
class Child1 extends React.Component {
    render() {
        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                        <button onClick={() => { context.setMessage("New Arrival") }}>Send</button>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}