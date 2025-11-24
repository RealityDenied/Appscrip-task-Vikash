export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        The page you are looking for does not exist.
      </p>
      <a 
        href="/" 
        style={{
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}
      >
        Go Home
      </a>
    </div>
  )
}

