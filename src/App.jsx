import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./layouts/SharedLayout";
import {
  Home,
  About,
  Contact,
  Projects,
  ProjectDetails,
  Services
} from "./pages";

export default function App() {
 
  

 

  return (
    <>
      <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
          </>
   
  );
}
