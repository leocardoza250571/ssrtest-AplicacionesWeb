export default async function HomePage() {
  // 1. Petición en el servidor (SSR)
  // cache: 'no-store' fuerza a que Next.js renderice la página en el servidor en cada petición
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users = await res.json();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Demo SSR: Lista de Personas</h1>
      <p>
        Esta página fue renderizada completamente en el servidor antes de enviarse al navegador.
      </p>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#f9f9f9',
              color: '#333'
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{user.name}</h3>
            <p style={{ margin: '0 0 0.25rem 0' }}><strong>Email:</strong> {user.email}</p>
            <p style={{ margin: 0 }}><strong>Compañía:</strong> {user.company.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}