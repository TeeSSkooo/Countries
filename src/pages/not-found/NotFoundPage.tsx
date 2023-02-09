import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__caption">Page does not exists</h2>
        <Link to="/">Go to homepage</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
