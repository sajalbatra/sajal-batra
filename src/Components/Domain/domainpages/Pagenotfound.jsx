import './NotFound.css'; // Import your CSS file

function Pagenotfound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-description">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}

export default Pagenotfound;