import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2 className='text-4xl'>React Query Tutorial</h2>
    </div>
  );
}
