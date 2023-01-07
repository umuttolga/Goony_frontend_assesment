import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'



const Overlay = (props) => {
    return <div className={`${props.tailWind} rounded-xl shadow-2xl p-4 w-[300px] h-[700px] z-30 absolute inset-0   m-auto bg-white`}>
        <div className='content'>{props.children}</div>
    </div>
}
const BackDrop = (props) => {
    return <div onClick={props.close} className='bg-black opacity-50 top-0 left-0 z-20  fixed w-[100%] h-[100%] bg-[ rgba(0, 0, 0, 0.75)]'>
      {props.children}
    </div>
}

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop close={props.close}/>, document.getElementById('overlay-root'))}
      {ReactDOM.createPortal(<Overlay tailWind={props.tailWind}>{props.children}</Overlay>, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default Modal
