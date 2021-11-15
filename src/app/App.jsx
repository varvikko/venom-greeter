import React from 'react'
import Background from './components/Background'
import Prompt from './components/Prompt'
import Header from './components/Header'
import Menu from './components/Menu'
import { getBackgrounds } from './utils/background'
import lightdm from './utils/lightdm'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
            user: lightdm.users[0]
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
                <Prompt username={this.state.user.display_name} showAvatar={true} />
                <Menu open={this.state.menuOpen} blur={20} shadow={true} />
            </div>
        )
    }
}

export default App
