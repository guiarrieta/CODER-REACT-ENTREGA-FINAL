import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // importamos Router, Routes y Route de react-router-dom
import Home from "../pages/Home"; // importamos el componente Home
import Category from "../pages/Category"; // importamos el componente Category
import NavBar from "../components/NavBar/NavBar"; // importamos el componente NavBar
import ItemDetails from "../pages/ItemDetails"

const MainRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/item/:itemId" element={<ItemDetails />} />
        </Routes>
    </Router>
  )
}

export default MainRouter