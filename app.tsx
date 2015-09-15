class App extends React.Component {
  constructor(){
    super()
    this.state = {count: 0}
    this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState({count: this.state.count+1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return <button onClick={this.increment}>{this.props.txt} - {this.state.count}</button>
  }
  componentDidMount(){
    console.log('mounted')
  }
}

App.defaultProps = {txt: 'default props txt'}
App.propTypes = {txt: React.PropTypes.number}

React.render(<App txt="Hello world!" />, document.body);
