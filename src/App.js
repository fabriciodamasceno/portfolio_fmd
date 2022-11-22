import { Header } from './components/Header';
import { Description } from './components/Description';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';

import './styles/index.css';

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <section className='main-content'>
          <Description />
        </section>

        <Profile />
      </main>


      <Footer />
    </div>
  );
}

export default App;
