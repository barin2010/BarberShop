import About from './about/About';
import Barbers from './barbers/Barbers';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import Form from './form/Form';
import Header from './header/Header';
import Latin from './latin/Latin';
import Services from './services/Services';
import Traditional from './traditional/Traditional';

export const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Traditional />
      <Barbers />
      <Latin />
      <Form />
      <Contacts />
      <Footer />
    </div>
  );
};
