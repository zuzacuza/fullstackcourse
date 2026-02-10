const Course = ({course}) => {
  return (
    <div>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

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
export default Course