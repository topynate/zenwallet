import React,{Component} from 'react'
import autobind from 'class-autobind'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Flexbox from 'flexbox-react'

class Header extends Component {
    constructor() {
        super()
        autobind(this)
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string
    }

    static defaultProps = {
        title:'Zen Wallet'
    }

    render() {
        const {title} = this.props

        const className = classnames('header', this.props.className)

        return (
            <Flexbox justifyContent='flex-end' className={className} element="header" height="60px" >
                <h1>{title}</h1>
                <div className="balance">
                  <div>Balance</div>
                  <div>500,000 ZP</div>
                </div>
            </Flexbox>
        )
    }
}

export default Header