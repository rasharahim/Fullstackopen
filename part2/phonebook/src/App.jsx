import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";

const App = () => {
  const [allPersons, setAllPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [numberFilter, setNumberFilter] = useState("");
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [notification, setNotification] = useState(null);

  // Initialize with mock data instead of calling a backend API
  useEffect(() => {
    const mockData = [
      { id: 1, name: "John Doe", number: "1234567890" },
      { id: 2, name: "Jane Smith", number: "0987654321" },
    ];
    setAllPersons(mockData);
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = allPersons.find(
      (person) => person.name === newPerson.name.trim()
    );
    if (!result) {
      const newId = allPersons.length ? allPersons[allPersons.length - 1].id + 1 : 1;
      const addedPerson = { ...newPerson, id: newId };
      setAllPersons((prevPersons) => [...prevPersons, addedPerson]);
      setNewPerson({ name: "", number: "" });
      setNotification({
        type: "success",
        text: `${addedPerson.name} was successfully added`,
      });
    } else {
      if (
        window.confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        setAllPersons((prevPersons) =>
          prevPersons.map((person) =>
            person.id !== result.id ? person : { ...person, number: newPerson.number }
          )
        );
        setNewPerson({ name: "", number: "" });
        setNotification({
          type: "success",
          text: `${newPerson.name} was successfully updated`,
        });
      }
    }
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setNewPerson((newPerson) => ({
      ...newPerson,
      [name]: value,
    }));
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleNumberFilterChange = (event) => {
    setNumberFilter(event.target.value);
  };

  const handleRemove = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      setAllPersons((prevPersons) =>
        prevPersons.filter((person) => person.id !== id)
      );
      setNotification({
        type: "success",
        text: `${name} was successfully deleted`,
      });
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter
        nameFilter={nameFilter}
        numberFilter={numberFilter}
        handleNameFilterChange={handleNameFilterChange}
        handleNumberFilterChange={handleNumberFilterChange}
      />
      <h3>add a new</h3>
      <PersonForm
        newPerson={newPerson}
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
      />
      <h3>NUMBERS</h3>
      <Persons
        nameFilter={nameFilter}
        numberFilter={numberFilter}
        allPersons={allPersons}
        handleRemove={handleRemove}
      />
    </>
  );
};

export default App;
