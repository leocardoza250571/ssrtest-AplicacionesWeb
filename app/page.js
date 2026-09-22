export default async function HomePage() {

  const res = await fetch('https://randomuser.me/api/?results=6', {
    cache: 'no-store',
  });
  const data = await res.json();
  const users = data.results;

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Demo: Server side rendering</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {users.map((user, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '1.2rem',
              backgroundColor: '#fff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center',
              color: '#333'
            }}
          >
            <img
              src={user.picture.large}
              alt={user.name.first}
              style={{ borderRadius: '50%', width: '96px', height: '96px', marginBottom: '1rem', objectFit: 'cover' }}
            />
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
              {user.name.first} {user.name.last}
            </h3>
            <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.85rem', color: '#555' }}>
              {user.email}
            </p>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#888', fontWeight: 'bold' }}>
              {user.location.city}, {user.location.country}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}