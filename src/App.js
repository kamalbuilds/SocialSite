import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import {tiltrl} from './components/tilt/tiltrl';
import SimpleMap from './components/gmap/map';
import Experience from './components/Experience';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Hero />
          <tiltrl />
          <Experience />
          <Footer />
          </>
        }>
          {/* <Route index element={<Home />} /> */}
          <Route path="map" element={<SimpleMap />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}