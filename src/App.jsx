import "./App.css";
import CardsInfo from "./components/CardsInfo";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  const person = {
    name: "Melissa",
    age: 28,
    favoriteMovie: "Orgullo y Prejuicio",
    favoriteMusic: "J-Pop",
  };

  const person2 = {
    name: "Jackson",
    age: 26,
    favoriteMovie: "Armagedon",
    favoriteMusic: "R&B",
  };

  const card1 = {
    tittle: "Hobbies",
    item1: "Musica",
    item2: "Cocinar",
    item3: "Pintar",
    item4: "Cantar",
  };

  const card2 = {
    tittle: "Mi Comida Favorita",
    item1: "Lasaña",
    item2: "Pastel de Jaiva",
    item3: "Pescado Frito",
    item4: "Zapallo italiano Relleno",
  };

  const card3 = {
    tittle: "Mi Stack Tech",
    item1: "Html",
    item2: "Css",
    item3: "React",
    item4: "Sass",
  };

  return (
    <div id="app" className="App">
      <PersonalInfo person={person} />;
      {/* <PersonalInfo person={person2} color="lightgreen" /> */}
      <CardsInfo otherInfo={card1} color="orange" />
      <CardsInfo otherInfo={card2} color="pink" />
      <CardsInfo otherInfo={card3} color="yellow" />
    </div>
  );
}

export default App;
