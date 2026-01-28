import { Route,Routes,useLocation} from "react-router-dom";
import BookListPage from "./pages/BookListPage";
import BookDetails from "./pages/BookDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      
      {location.pathname === "/" && (
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
      )}
      <Header/>
    
      <main
        id="main-content"
        tabIndex={-1}
      >
        <Routes>
          <Route path="/" element={<BookListPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

const App = () => (<AppContent />);

export default App;
