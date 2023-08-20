import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  {id: 1, content: "zadanie 1", done: false},
  {id: 2, content: "zadanie 2", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
<main className="container">
        <header>
            <h1>Lista zadań</h1>
        </header>
        <section className="section">
            <h2 className="section__header">Dodaj nowe zadanie</h2>
        </section>
        <section className="section">
            <div className="section__body">
              <Form />
            <h2 className="section__nextHeader">Lista zadań</h2>
            <div className="section__hidden buttons"></div>
        </div>
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </section>
    </main>
  );
}

export default App;
