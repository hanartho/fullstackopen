const Course = ({ courses }) => {
  console.log("Courses", courses);

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
        </div>
      ))}
    </div>
  );
};

const Header = ({ course }) => {
  console.log("Header", course);
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  );
};

const Content = ({ course }) => {
  console.log("Content", course.parts);
  return (
    <div>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

{
  /** 
const Part = ({ name, exercises }) => {
  console.log("Part", name, exercises);
  return (
    <div>
      {name} {exercises}
    </div>
  );
};
*/
}
{
  /** 
const Total = (props) => {
  console.log("Total", props);
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)}
      </p>
    </div>
  );
};
*/
}

const App = () => {
  /*
  const course = "Half Stack application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "state of a component";
  const exercises3 = 14;
  */

  /* STEP 3
  const course = "Half Stack application Development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  */

  /*
  const course = "Half Stack application Development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  */
  /*
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };
  */
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {/**
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
       */}
      <Course courses={courses} />
    </div>
  );
};

export default App;
