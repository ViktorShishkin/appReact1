import React, {Component} from 'react'
// eslint-disable-next-line
import classes from './Layout.css'


class Layout extends Component {
    render () {
        return (
            <div className='Layout'>
                <main className='main'>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout