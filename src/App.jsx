import Greeting from "./components/Greeting";
import NavBar from "./components/NavBar";
import Card from "./components/ItemListContainer";
function App() {
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main className="container">
        <Card
          title="Titulo"
          description="Descripcion del producto"
          price="Precio"
        />
        <Card
          title="Titulo2"
          description="Descripcion del producto"
          price="Precio"
        />
        <Card
          title="Titulo3"
          description="Descripcion del producto"
          price="Precio"
        />
        <Card
          title="Titulo4"
          description="Descripcion del producto"
          price="Precio"
        />
        <Card
          title="Titulo5"
          description="Descripcion del producto"
          price="Precio"
        />
        <Card
          title="Titulo6"
          description="Descripcion del producto"
          price="Precio"
        />
      </main>
    </div>
  );
}

export default App;
