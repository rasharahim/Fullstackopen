const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.hcourse.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part.parts[0].name} {props.part.parts[0].exercises}
      </p>
      <p>
        {props.part.parts[1].name} {props.part.parts[1].exercises}
      </p>
      <p>
        {props.part.parts[2].name} {props.part.parts[2].exercises}
      </p>
    </div>
  );
};
const Total = (props) => {
  return (
    <p>
      {' '}
      Number of exercises{' '}
      {props.part.parts[0].exercises +
        props.part.parts[1].exercises +
        props.part.parts[2].exercises}
    </p>
  );
};

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
  };

  return (
    <div>
      <Header hcourse={course} />
      <Content part={course} />
      <Total part={course} />
    </div>
  );
};

export default App;
