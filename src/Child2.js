import MContext from "./MyProviderContext"
class Child2 extends React.Component {
    render() {
        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                        <p>{context.state.message}}</p>)}
                </MContext.Consumer>
            </div>
        )
    }
}