function ListeCourses({ courses }) {
  return (
    <div style={{ padding: '15px' }}>
      <h3 style={{ color: '#27ae60' }}>🛒 Liste de courses</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {courses.map((article, index) => (
          <li key={index} style={{
            backgroundColor: '#eafaf1',
            marginBottom: '6px',
            padding: '8px 12px',
            borderRadius: '6px',
            borderLeft: '4px solid #27ae60'
          }}>
            🟢 {article}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;