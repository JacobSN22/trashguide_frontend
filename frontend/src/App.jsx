import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home";
import { Sortering } from "./components/pages/sorting";
import { Recycling } from "./components/pages/recycling_station";
import { Order } from "./components/pages/order";
import { Login } from "./components/pages/login";
import { Category_details, Sortering_details, Sorting } from "./components/pages/sortering_details";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/sortering">
        <Route index element={<Sortering />}/>
        <Route path=":id" element={<Sorting />}/>
        <Route path=":id/details/:id" element={<Category_details />}/>
        
      </Route>
      <Route path='/recycling' element={<Recycling />} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
