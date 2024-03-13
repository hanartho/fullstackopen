import { useEffect, useState } from "react";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    console.log("effect's happening");
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = (e) => {
    e.preventDefault();
    console.log("Add Button Clikced", e.target);

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.find(({ name }) => name === newName)) {
      //console.log("nimi listalla");
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      //console.log("nimi ei ole listalla");
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const removeName = (id, name) => {
    console.log(`delete button clikced`);
    if (window.confirm(`Delete ${name}`)) {
      personService
        .remove(id)
        .then((updatedPersons) => setPersons(updatedPersons));
    }
  };

  const handleNameChange = (e) => {
    //console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  return (
    <div>
      <h2>phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        <h2>Numbers</h2>
        {persons.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => removeName(person.id, person.name)}>
              delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
