import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

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

    render() {
        return (
            <div
                className="prompt"
                onKeyPress={({ key }) => key === 'Enter' && this.login()}
            >
                {this.props.showAvatar && <div className="prompt-avatar" />}

                <div className="prompt-username-wrapper">
                    <FontAwesomeIcon icon={faCaretLeft} className="prompt-username-arrow" />
                    <div className="prompt-username">{this.props.username}</div>
                    <FontAwesomeIcon icon={faCaretRight} className="prompt-username-arrow" />
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
    showAvatar: PropTypes.bool
}

export default Prompt
