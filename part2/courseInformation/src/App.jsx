const Header = ({name}) => (
    <div>
      <h1>{name}</h1>
    </div>
  )

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)
  

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part}/>
      ))}
    </div>
    )
}

const Total = ({parts})=> {
  const total = parts.reduce((sum, part) =>
      sum + part.exercises, 0)
  return(
    <div>
      Number of exercises {total}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App


/*const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  )
}

export default App*/