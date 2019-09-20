

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
  <Person name="Yolanda" age="35" />
  <Person name="Akshar" age="27" />
  </div>
);

ReactDOM.render(<Person name="Yolanda" age="35" />, document.querySelector('#p1'));
//ReactDOM.render(<Person />, document.getElementById('#p1'))
