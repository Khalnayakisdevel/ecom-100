import { Form } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import Nav from "./Component/Nav"
import Navbar from "./Component/Navbar"
import Product from "./Page/Product"


function App() {
  return (
    <>
      <Nav />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Product" element={<Product />} />
        </Routes>
      {/* <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Check type="checkbox" label="Check me out" />
      </Form> */}
    </>
  )
}

export default App