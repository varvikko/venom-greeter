import React from 'react'
import Background from './components/Background'
import Prompt from './components/Prompt'
import Header from './components/Header'
import Menu from './components/Menu'
import { getBackgrounds } from './utils/background'

class App extends React.Component {
    render() {
        return (
            <div>
                <Background image={getBackgrounds()[0]} blur={10} />

                <Header
                    showTime={true}
                    timeFormat='%H:%M:%s'
                    showDate={true}
                    dateFormat='%d.%m.%Y'
                />
                <Prompt />
                <Menu />
            </div>
        )
    }
}

export default App
