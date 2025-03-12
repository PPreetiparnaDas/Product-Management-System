import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Table, Form } from "react-bootstrap";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false); // State for edit modal
  const [formData, setFormData] = useState({
    pname: "",
    pdesc: "",
    pprice: "",
    qty: "",
  });

  const [selectedProduct, setSelectedProduct] = useState(null); // Store the product being edited

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:9090/product");
      setProducts(response.data._embedded.products || []); // Ensure it's an array
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/product", formData);
      fetchProducts(); // Refresh data
      setShowModal(false);
      setFormData({ pname: "", pdesc: "", pprice: "", qty: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Open Edit Modal and Set Selected Product
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormData({
      pname: product.pname,
      pdesc: product.pdesc,
      pprice: product.pprice,
      qty: product.qty,
    });
    setEditModal(true);
  };

  // Update product
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedProduct) return;

    try {
      await axios.put(selectedProduct._links.self.href, formData); // Use self.href for update
      fetchProducts();
      setEditModal(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete a product
  const handleDelete = async (id, url) => {
    try {
      await axios.delete(url);
      fetchProducts(); // Refresh product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Product Management</h2>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add Product
      </Button>

      {/* Modal for Adding a Product */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="pname"
                value={formData.pname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="pdesc"
                value={formData.pdesc}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="pprice"
                value={formData.pprice}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-3">
              Submit
            </Button>
            <Button variant="secondary" className="mt-3 ms-2" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal for Editing a Product */}
      <Modal show={editModal} onHide={() => setEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="pname"
                value={formData.pname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="pdesc"
                value={formData.pdesc}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="pprice"
                value={formData.pprice}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-3">
              Update
            </Button>
            <Button variant="secondary" className="mt-3 ms-2" onClick={() => setEditModal(false)}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Product Table */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.pid}>
                <td>{product.pid}</td>
                <td>{product.pname}</td>
                <td>{product.pdesc}</td>
                <td>{product.pprice}</td>
                <td>{product.qty}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(product.pid, product._links.self.href)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductManagement;
