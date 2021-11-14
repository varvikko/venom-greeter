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
            <div className='app'>
                <Background image={getBackgrounds()[0]} blur={10} />

                <Header
                    showTime={true}
                    timeFormat='HH:MM:SS'
                    showDate={true}
                    dateFormat='dd.mm.yyyy'
                    toggleMenu={() =>
                        this.setState({
                            ...this.state,
                            menuOpen: !this.state.menuOpen
                        })
                    }
                />
                <Prompt isOther={true} showAvatar={true} />
                <Menu open={this.state.menuOpen} blur={20} shadow={true} />
            </div>
        )
    }
}

export default App
