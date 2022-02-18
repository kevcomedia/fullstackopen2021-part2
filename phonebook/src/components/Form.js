import React from 'react'
import Input from './Input'

const Form = ({ name, number, onNameChange, onNumberChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <Input value={name} onChange={onNameChange} />
      </div>
      <div>
        number: <Input value={number} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form
