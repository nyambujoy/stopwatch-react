import { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props)


        this.state = {
            count: 0
        }

        this.updateCount = this.updateCount.bind(this)
    }
    updateCount() {
        this.setState((state) => ({
            todos: [],
            inputValue: '',
            count: state.count + 1
        }))
    }
}

export default Count