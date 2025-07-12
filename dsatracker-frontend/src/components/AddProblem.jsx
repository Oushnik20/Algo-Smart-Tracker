import { useState } from 'react';
import { addProblem } from '../services/api';

function AddProblem({ onAdd }) {
  const [form, setForm] = useState({
    title: '',
    url: '',
    tag: '',
    difficulty: 'easy',
    solved: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProblem(form);
    onAdd(); // reload list
    setForm({
      title: '',
      url: '',
      tag: '',
      difficulty: 'easy',
      solved: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-4">
      <h2 className="text-lg font-bold">Add New Problem</h2>
      <input
        className="border p-2 w-full"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 w-full"
        name="url"
        placeholder="URL"
        value={form.url}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 w-full"
        name="tag"
        placeholder="Tag (e.g., array, dp)"
        value={form.tag}
        onChange={handleChange}
        required
      />
      <select
        name="difficulty"
        className="border p-2 w-full"
        value={form.difficulty}
        onChange={handleChange}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="solved"
          checked={form.solved}
          onChange={handleChange}
          className="mr-2"
        />
        Solved
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Problem
      </button>
    </form>
  );
}

export default AddProblem;
