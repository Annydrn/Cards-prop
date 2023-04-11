const PersonalInfo = ({ person, color }) => {
  const styleUl = {
    backgroundColor: color,
  };

  return (
    <ul style={styleUl} className="tarjet">
      <li className="list">
        {" "}
        <span className="tittle"> Nombre: </span> {person.name}
      </li>
      <li className="list">
        {" "}
        <span className="tittle"> Edad: </span> {person.age}
      </li>
      <li className="list">
        {" "}
        <span className="tittle"> Pelicula Favorita: </span>{" "}
        {person.favoriteMovie}
      </li>
      <li className="list">
        {" "}
        <span className="tittle"> Musica Favorita: </span>{" "}
        {person.favoriteMusic}
      </li>
    </ul>
  );
};

export default PersonalInfo;
