import { useEffect, useState } from 'react';
import { getStats } from '../services/api';

function StatsPanel() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStats().then((res) => setStats(res.data));
  }, []);

  if (!stats) return <div>Loading stats...</div>;

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">📊 Stats</h2>
      <p><strong>Total:</strong> {stats.total}</p>
      <p><strong>Solved:</strong> ✅ {stats.solved}</p>
      <p><strong>Unsolved:</strong> ❌ {stats.unsolved}</p>
      <div className="mt-2">
        <strong>Tags:</strong>
        <ul className="list-disc pl-6">
          {Object.entries(stats.tags).map(([tag, count]) => (
            <li key={tag}>{tag}: {count}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StatsPanel;
