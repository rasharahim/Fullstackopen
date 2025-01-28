import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Initialize with zeros

  // Function to select a random anecdote
  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Function to vote for the current anecdote
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1; // Increment votes for the current anecdote
    setVotes(copy);
  };

  // Find anecdote with the most votes
  const maxVotes = Math.max(...votes);
  const mostVotesIndex = votes.indexOf(maxVotes);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Anecdote of the Day</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
        "{anecdotes[selected]}"
      </p>
      <p>has {votes[selected]} votes</p>

      <div>
        <button
          onClick={handleVote}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Vote
        </button>
        <button
          onClick={handleNextAnecdote}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Next Anecdote
        </button>
      </div>

      <h2>Anecdote with Most Votes</h2>
      {maxVotes > 0 ? (
        <>
          <p style={{ fontStyle: 'italic' }}>"{anecdotes[mostVotesIndex]}"</p>
          <p>has {maxVotes} votes</p>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default App;