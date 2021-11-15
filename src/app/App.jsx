import React from 'react'
import Background from './components/Background'
import Prompt from './components/Prompt'
import Header from './components/Header'
import Menu from './components/Menu'
import { getBackgrounds } from './utils/background'
import lightdm from './utils/lightdm'

window.show_prompt = function (text, type) {
    console.log(`show_prompt(${text}, ${type})`)
}

window.show_message = function (text, type) {
    console.log(`show_message(${text}, ${type})`)

}

window.authentication_complete = function () {
    console.log("authentication_complete()")
}

window.autologin_timer_expired = function () {
    console.log("autologin_timer_expired()")
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
            user: lightdm.users[0]
        }
    }

    setStateValue(key, value) {
        this.setState({ ...this.state, [key]: value })
    }

    setUser(user) {
        this.setState({ ...this.state, user })

        lightdm.authenticate(user.username)
    }

    render() {
        return (
            <div className="app">
                <Background image={getBackgrounds()[0]} blur={10} />

                <Header
                    showTime={true}
                    timeFormat="HH:MM:SS"
                    showDate={true}
                    dateFormat="dd.mm.yyyy"
                    toggleMenu={() =>
                        this.setState({
                            ...this.state,
                            menuOpen: !this.state.menuOpen
                        })
                    }
                />
                <Prompt
                    username={this.state.user}
                    showAvatar={true}
                    setUser={(user) => this.setUser(user)}
                />
                <Menu open={this.state.menuOpen} blur={20} shadow={true} />
            </div>
        )
    }
}

export default App
