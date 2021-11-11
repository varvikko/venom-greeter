import React from 'react'
import Background from './components/Background'
import { getBackgrounds } from './utils/background'

class App extends React.Component {
    render() {
        return (
            <div>
                <Background image={getBackgrounds()[0]}
                    blur={10} />
            </div>
        )
    }
}

export default App
