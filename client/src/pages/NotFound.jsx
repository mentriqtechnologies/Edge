import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound section">
      <div className="container center-col">
        <span className="eyebrow">Error 404</span>
        <h1>This page slipped off the edge.</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </div>
  );
}