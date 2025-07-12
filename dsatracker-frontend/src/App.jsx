import './App.css';
import AddProblem from './components/AddProblem';
import ProblemList from './components/ProblemList';
import StatsPanel from './components/StatsPanel';
import TagFilter from './components/TagFilter';
import { useEffect, useState } from 'react';
import { getAllProblems, deleteProblem } from './services/api';

function App() {
  const [problems, setProblems] = useState([]);

  const loadProblems = async () => {
    const res = await getAllProblems();
    setProblems(res.data);
  };

  const handleDelete = async (id) => {
    await deleteProblem(id);
    loadProblems();
  };

  const handleFilter = (filtered) => {
    if (filtered) {
      setProblems(filtered);
    } else {
      loadProblems();
    }
  };

  useEffect(() => {
    loadProblems();
  }, []);

  return (
  <div className="min-h-screen bg-dark text-white transition-all duration-1000 ease-in-out">
    <header className="bg-black/60 backdrop-blur-md shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight drop-shadow-md">
          🚀 DSA Practice Tracker
        </h1>
        <span className="text-gray-400 text-sm hidden sm:inline font-medium">
          Built with ❤️ Java + React
        </span>
      </div>
    </header>

    <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <div className="animate-fadeIn">
        <StatsPanel />
      </div>

      <section className="bg-white/5 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-[1.01]">
        <AddProblem onAdd={loadProblems} />
      </section>

      <section className="bg-white/5 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-[1.01]">
        <TagFilter onFilter={handleFilter} />
      </section>

      <section className="bg-white/5 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-[1.01]">
        <ProblemList problems={problems} onDelete={handleDelete} />
      </section>
    </main>

    <footer className="text-center text-sm text-gray-400 mt-10 pb-6">
      © {new Date().getFullYear()} DSA Tracker • Built by You 💻
    </footer>
  </div>
);
}

export default App;
