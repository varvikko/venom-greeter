import React from 'react'
import Background from './components/Background'
import Prompt from './components/Prompt'
import Header from './components/Header'
import Menu from './components/Menu'
import { getBackgrounds } from './utils/background'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false
        }
    }

    render() {
        return (
            <div>
                <Background image={getBackgrounds()[0]} blur={10} />

                <Header
                    showTime={true}
                    timeFormat='%H:%M:%s'
                    showDate={true}
                    dateFormat='%d.%m.%Y'
                    toggleMenu={() =>
                        this.setState({
                            ...this.state,
                            menuOpen: !this.state.menuOpen
                        })
                    }
                />
                <Prompt />
                <Menu open={this.state.menuOpen} blur={20} />
            </div>
        )
    }
}

export default App
