import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

// ReactDOM.render(
//     React.createElement(
//         'input', {
//             placeholder: 'First name',
//             onMouseEnter: () => console.log('Mouse Entered'),
//             onClick: () => console.log('Clicked!')
//         }), document.getElementById('app')
// )
const msg = 'Help me!'
const inputClick = () => console.log('Clicked!')
const mouseOver = () => console.log(msg)



const elems = <input placeholder={msg} onClick={inputClick} onMouseEnter={mouseOver} />
const app_el = document.getElementById('app')

const example = 
    <div>
        {elems}
    </div>

const app = ReactDOMClient.createRoot(app_el)


app.render(example)