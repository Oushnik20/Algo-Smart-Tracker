import { useEffect, useState } from 'react';
import { getStats, getByTag } from '../services/api';

function TagFilter({ onFilter }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getStats().then((res) => {
      const tagNames = Object.keys(res.data.tags);
      setTags(tagNames);
    });
  }, []);

  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">Filter by tag:</label>
      <select
        onChange={(e) => {
          const tag = e.target.value;
          if (tag === '') {
            onFilter(null);
          } else {
            getByTag(tag).then((res) => onFilter(res.data));
          }
        }}
        className="border px-2 py-1 rounded"
      >
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </div>
  );
}

export default TagFilter;
