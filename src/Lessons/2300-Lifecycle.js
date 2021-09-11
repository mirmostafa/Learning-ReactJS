import React, {
    Component
} from 'react'

class MethodsLifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
        console.log('MethodsLifecycle constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('MethodsLifecycle getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('MethodsLifecycle componentDidMount');
    }

    render() {
        console.log('MethodsLifecycle render')
        return null;
    }
}

export default MethodsLifecycle