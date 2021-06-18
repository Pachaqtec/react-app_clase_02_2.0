// rafce
import React from 'react'
import './style.scss'

const Input = (props) => {
  console.log('props', props)
  const { label, value, onChange } = props
  return (
    <div className="c_wrapper_input">
      <label htmlFor="">{label}</label>
      <input type="text" onChange={onChange} value={value} />
    </div>
  )
}

export default Input
