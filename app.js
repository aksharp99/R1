

function Person() {
  return (
    <div class="person">
      <h1>Max</h1>
      <p>Your Age: 28</p>
    </div>
  );
}

ReactDOM.render(<Person/>, document.querySelector('#p1'));
//ReactDOM.render(<Person />, document.getElementById('#p1'))
