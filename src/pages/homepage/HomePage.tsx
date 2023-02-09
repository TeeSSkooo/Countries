import { Helmet } from 'react-helmet';

import Form from '../../components/form/Form';
import CountryList from '../../components/country-list/CountryList';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Web site about countries created using react redux typescript"
        />
        <title>Countries</title>
      </Helmet>
      <>
        <main className="main">
          <Form />
          <CountryList />
        </main>
      </>
    </>
  );
};

export default HomePage;
