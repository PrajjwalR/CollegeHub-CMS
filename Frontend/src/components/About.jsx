import { useEffect, useState } from 'react';

function About() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('http://localhost:8080/');
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const data = await resp.json();
        console.log('Fetched data:', data);
        setItems(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {items.map((i) => (
          <div key={i._id}>
            <h1>{i.name}</h1>
            <p>{i.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
