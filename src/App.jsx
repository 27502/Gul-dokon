import Navbar from './components/Navbar/Navbar';
import AppFooter from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      {/* Asosiy kontent bo'limi */}
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        {/* Router Pages yoki boshqa contentlar bo‘ladi */}
      </div>
      <AppFooter />
    </>
  );
}

export default App;
