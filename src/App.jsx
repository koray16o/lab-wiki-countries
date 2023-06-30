import './App.css';
import { useState } from 'react';
import countriesData from './countries.json';
import NavBar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <NavBar />

      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />

          <Routes>
            <Route
              path="/country/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
