import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRight,
    faCaretLeft,
    faCaretRight
} from '@fortawesome/free-solid-svg-icons'
import lightdm from '../utils/lightdm'

class Prompt extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            password: ''
        }
    }

    login() {
        console.log('login')
    }

    changeLeft() {
        let index = lightdm.users.findIndex(({username}) => username === this.props.username.username) - 1
        if (index < 0) {
            index = lightdm.users.length - 1
        }

        this.props.setUser(lightdm.users[index])
    }

    changeRight() {
        let index = lightdm.users.findIndex(({username}) => username === this.props.username.username) + 1
        if (index >= lightdm.users.length) {
            index = 0
        }

        this.props.setUser(lightdm.users[index])
    }

    render() {
        return (
            <div
                className="prompt"
                onKeyPress={({ key }) => key === 'Enter' && this.login()}
            >
                {this.props.showAvatar && <div className="prompt-avatar" />}

                <div className="prompt-username-wrapper">
                    <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="prompt-username-arrow"
                        onClick={() => this.changeLeft()}
                    />
                    <div className="prompt-username">{this.props.username.display_name}</div>
                    <FontAwesomeIcon
                        icon={faCaretRight}
                        className="prompt-username-arrow"
                        onClick={() => this.changeRight()}
                    />
                </div>

                <div className="prompt-fields">
                    <div className="password">
                        <input
                            type="password"
                            className="prompt-field"
                            placeholder="Password"
                        />

                        <button
                            className="login-button hover-button"
                            onClick={() => this.login()}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Prompt.propTypes = {
    username: PropTypes.string,
    showAvatar: PropTypes.bool,
    setValue: PropTypes.func
}

export default Prompt
