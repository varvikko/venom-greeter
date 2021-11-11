import React from 'react'
import PropTypes from 'prop-types'

class Prompt extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            password: ''
        }
    }

    render() {
        return (
            <div className='prompt'>
                {this.props.showAvatar && <div className='prompt-avatar' />}

                {this.props.isOther ? (
                    <input
                        type='text'
                        className='prompt-field'
                        placeholder='Username'
                    />
                ) : (
                    <div className='prompt-username'></div>
                )}

                <input
                    type='password'
                    className='prompt-field'
                    placeholder='Password'
                />
            </div>
        )
    }
}

Prompt.propTypes = {
    username: PropTypes.string,
    isOther: PropTypes.bool,
    showAvatar: PropTypes.bool
}

export default Prompt
