import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    getTime() {
        const { time } = this.state

        return (this.props.timeFormat || '%H:%M:%s')
            .replace(/%H/, time.getHours())
            .replace(/%M/, time.getMinutes())
            .replace(/%s/, time.getSeconds().toString().padStart(2, 0))
    }

    getDate() {
        const { time } = this.state

        return (this.props.dateFormat || '%d.&m.&Y')
            .replace(/%d/, time.getDay())
            .replace(/%m/, time.getMonth())
            .replace(/%Y/, time.getFullYear())
    }

    render() {
        return (
            <div className='header'>
                <div className='header-clock'>
                    <div>{this.props.showTime && this.getTime()}</div>
                    <div>{this.props.showDate && this.getDate()}</div>
                </div>

                <div className='header-menu-toggle-wrapper'>
                    <div className='header-menu-toggle hover-button'>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    showTime: PropTypes.bool,
    showDate: PropTypes.bool,
    timeFormat: PropTypes.string,
    dateFormat: PropTypes.string
}

export default Header
