function ProblemList({ problems, onDelete }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-white mb-4 drop-shadow">🚀 All Problems</h2>

      <div className="overflow-x-auto rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg">
        <table className="min-w-full text-sm text-white">
          <thead className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Tag</th>
              <th className="py-3 px-4 text-left">Difficulty</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((p) => (
              <tr key={p.id} className="border-t border-white/20 hover:bg-white/10 transition duration-200">
                <td className="py-3 px-4">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 underline hover:text-cyan-100 transition"
                  >
                    {p.title}
                  </a>
                </td>
                <td className="py-3 px-4 capitalize">{p.tag}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      p.difficulty === 'easy'
                        ? 'bg-green-600 text-white'
                        : p.difficulty === 'medium'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {p.difficulty}
                  </span>
                </td>
                <td className="py-3 px-4 text-xl">
                  {p.solved ? '✅' : '❌'}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => onDelete(p.id)}
                    className="bg-red-500 hover:shadow-[0_0_15px_#ff6a00] hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProblemList;
