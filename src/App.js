import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import Header from './Component/Heder/Header';
import MainTittle from './Component/Main/MainTittle';
import MainSearch from './Component/Main/MainSearch';
import MainTravel from './Component/Main/MainTravel';
import Footer from './Component/Footer/Footer';
import HomePage from './Component/Main/pages/Home';
import Carousel from './Component/Main/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <div className="container-fluid">
          <MainTittle />
          <MainSearch />
          <MainTravel />
          <div className="Tittle">
            <hr className="Br " />
            <span className="T-3 ">اماکن گردشگری</span>
          </div>
          <HomePage />
          <div className="Tittle">
            <hr className="Br " />
            <span className="T-3 ">هتل های شهر </span>
          </div>
          <Carousel />
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default App;
