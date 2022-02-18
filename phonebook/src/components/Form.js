import React from 'react'
import Input from './Input'
import Button from './Button'

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
        <Button type="submit" x_type="primary">add</Button>
      </div>
    </form>
  )
}

export default Form
