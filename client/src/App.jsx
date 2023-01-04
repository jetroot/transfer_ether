import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Welcome from "./components/Welcome";
import "./index.css";

const App = () => {
    return (
        <div className="min-h-screen bg-black">
            <div className="">
                <Navbar />
                <Welcome />
            </div>
            <Services />
            <Transactions />
            <Footer />
        </div>
    );
};

export default App;
