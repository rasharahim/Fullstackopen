const PersonForm = ({ newPerson, handleSubmit, handleFormChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          value={newPerson.name}
          onChange={handleFormChange}
          name="name"
          required
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newPerson.number}
          onChange={handleFormChange}
          name="number"
          required
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;
