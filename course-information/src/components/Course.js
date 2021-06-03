import React from 'react'

const Header = (props) => {
  return <h2>{props.course}</h2>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </>
  )
}

const Total = ({ parts }) => {
  const total = parts.map((part) => part.exercises).reduce((a, b) => a + b, 0)
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
