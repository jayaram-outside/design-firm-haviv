import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import FetchWork from './components/FetchWork'
import WorkItem from './components/WorkItem'
import Navbar from './Navbar'
import Contact from "./Contact";
import Work from './Work';
import Footer from './Footer';

function WorkThumbnailsPage({ loading, error, items }) {

  if (loading) {
    return (
      <div className='pageContent--loadingState'>
        Loading data...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>
        Error: {error}
      </div>
    )
  }

  return (
    <>
      <div class="preamble--container" bis_skin_checked="1">
        <h1 class="preamble js-fade__slow">Creators of many of the world’s most iconic and enduring brands, Chermayeff &amp; Geismar &amp; Haviv is an independent design firm specializing in the development of trademarks and identity programs.</h1>
        <div id="peacock" bis_skin_checked="1"></div>
      </div>
      <section className="pageContent pageContent--workThumbnails">
          <div className='workThumbnails-grid'>
            {items.map((item, index) => (
              <WorkItem key={item.id || item.slug} item={item} index={index} />
            ))}
          </div>
      </section>
      <section class="pageContent pageContent--viewAllWork"><a href="/work/">View more logos</a></section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <FetchWork fetchURL="https://bpcghheadless.wpenginepowered.com/wp-json/cgh/work/?total=-1&home=true&sort=curated">
            {({ loading, error, items }) => (
              <WorkThumbnailsPage loading={loading} error={error} items={items} />
            )}
          </FetchWork> }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
