import Header from '../header/Header';
import Form from '../form/Form';
import CountryList from '../country-list/CountryList';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Form />
        <CountryList />
      </main>
    </div>
  );
}
