import React, { useEffect, useState } from 'react';
import "../../css/quran-data.css"
const Quran = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSurahs(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch Surahs');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Quran Surahs</h1>
      <ul className='quran_data'>
        {surahs.map(surah => (
          <li key={surah.number}>
            {surah.number}. {surah.englishName} ({surah.englishNameTranslation})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quran;
