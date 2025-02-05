import todos from "./todos";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div className="container">
      <nav className="navbar is-light">
        <div className="navbar-item is-uppercase">
          Todos
        </div>
      </nav>
      <main className="content px-6 py-6">
        <TodoList list={todos}/>
      </main>
    </div>
  );
}