import { useState } from "react";
import { initialItemState } from "./initialItemState";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import PropTypes from "prop-types";

AddForm.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
}
export function AddForm({handleAddItem}){

  const [item, setItem] = useState(initialItemState);

  function handleItemChange(e){
    const newItem = {...item, [e.target.name]: e.target.value};
    setItem(newItem);
  }
  function handleQuantityChange(e){
    const newItem = {...item, [e.target.name]: e.target.value};
    setItem(newItem);
  }  
  function handlePriceChange(e){
    const newItem = {...item, [e.target.name]: e.target.value};
    setItem(newItem);
  }
  function handleSubmit(e){
    //e.preventDefault();
    handleAddItem(item);
    // reset the item
    setItem(initialItemState);
  }

  return(
    <>    
      <h3>Add a new product</h3>
      <Form onSubmit={handleSubmit}>
        <Row>

        <Col xs={12} md={1}>
        <Form.Label>Name</Form.Label>
        </Col>
        <Col xs={12} md={3}>
        <Form.Control
        name="name"
        type="text"
        placeholder="Product name"
        value={item.name}
        onChange={handleItemChange}
        ></Form.Control>
        </Col>

        <Col xs={12} md={2} className="text-end">
        <Form.Label>Quantity</Form.Label>
        </Col>
        <Col xs={12} md={2}>
        <Form.Control
          name="quantity"
          type="text"
          placeholder="Quantity"
          value={item.quantity}
          onChange={handleQuantityChange}
        ></Form.Control>
        </Col>

        <Col xs={12} md={1} className="text-end">
        <Form.Label>Price</Form.Label>
        </Col>
        <Col xs={12} md={2}>
        <Form.Control 
          name="price"
          type="text"
          placeholder="Price"
          value={item.price}
          onChange={handlePriceChange}
        ></Form.Control>
      </Col>
      
      <Col xs={12} md={1}>
      <Button
        type="button"
        onClick={(e)=>handleSubmit(e)}
      >Add</Button>
      </Col>
      </Row>
    </Form>
    </>
  )
}