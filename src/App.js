import React from 'react'
import Header from './components/Header'



class AppComp extends React.Component {
    msg = 'Help text'
    render() {
    return (
        <div className='name'>
            <Header chta="Шапка сайта"/>
            <h1>{this.msg}</h1>
            <input placeholder={this.msg}
            onClick={this.inputClick} onMouseEnter={this.mouseOver} />
        </div>)
    }

    inputClick() {console.log('Clicked!')}
    mouseOver() {console.log('It`s over...')}
}

export default AppComp