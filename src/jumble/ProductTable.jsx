
import { AddForm } from "./AddForm";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {initialItemState} from "./initialItemState";

ProductTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.string,
  })),
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
}
export function ProductTable({list, addProduct, 
  deleteProduct, updateProduct}){
  // state to sync with the AddForm. Both the edit and the add will use the 
  // same form
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  // When a user Undo the changes, restore
  // the original value.
  const originalItem = list.find((i)=>(
    i.id === selectedId
  ))
  
  // event handler
  function handleDelete(e, itemId){
    deleteProduct(itemId);
  }
  function handleEdit(e, item){
    // set the state to edit and the selected id
    // to be edited.
    setIsEdit(true);
    const itemId = item.id;
    setSelectedId(itemId);
    // set the state to the currently selected item
    const itemName = item.name;
    const itemQuantity = item.quantity;
    const itemPrice = item.price;
    setName(itemName);
    setQuantity(itemQuantity);
    setPrice(itemPrice);
  }
  function handleSave(e, itemId){
    // reset the edit state and selected id
    // If the state is Save
    setIsEdit(false);
    setSelectedId(0);
    // prepare the item
    const updatedName = name;
    const updatedQuantity = quantity;
    const updatedPrice = price;
    const updatedItem = {
      name: updatedName,
      quantity: updatedQuantity,
      price: updatedPrice,
    }
    // Call the api to update the product
    updateProduct(itemId, updatedItem);
  }
  function handleUndo(e, itemId){
    // reset the edit state and selected id
    // If the state is Save
    setIsEdit(false);
    setSelectedId(0);
    // restore the state of the selected item
    // to the state of the original item.
    setName(originalItem.name);
    setQuantity(originalItem.quantity);
    setPrice(originalItem.price);
  }

  return(
    <>
    <AddForm handleAddItem={addProduct} ></AddForm>

    <Row><Col>{" "}</Col></Row>

    <Row className="border">
            <Col xs={12} md={1}><h4>ID</h4></Col>
            <Col xs={12} md={4}><h4>Product Name</h4></Col>
            <Col xs={12} md={2}><h4>Quantity</h4></Col>
            <Col  xs={12} md={2}><h4>Price</h4></Col>
            <Col  xs={12} md={1}><h4></h4></Col>
            <Col  xs={12} md={1}><h4></h4></Col>
            <Col  xs={12} md={1}><h4></h4></Col>
    </Row>
          {
            list && 
            list.map((item)=>(
              <Form key={item.id}>
              <Row className="border">
                <Col xs={12} md={1}><Form.Label>{item.id}</Form.Label></Col>

                <Col xs={12} md={4}><Form.Control
                    id="idName"
                    name="name"
                    type="text"
                    value={(isEdit && (selectedId===item.id)) ? name : item.name}
                    disabled={!(isEdit && (selectedId===item.id))}
                    onChange={(e)=>{setName(e.target.value)}}
                  ></Form.Control></Col>
                             
                  <Col xs={12} md={2}><Form.Control
                    id="idQuantity"
                    name="quantity"
                    type="text"
                    value={(isEdit && (selectedId===item.id)) ? quantity : item.quantity}
                    disabled={!(isEdit && (selectedId===item.id))}
                    onChange={(e)=>{setQuantity(e.target.value)}}
                  ></Form.Control></Col>
                                 
                  <Col xs={12} md={2}><Form.Control
                    id="idPrice"
                    name="price"
                    type="text"
                    value={(isEdit && (selectedId===item.id)) ? price : item.price}
                    disabled={!(isEdit && (selectedId===item.id))}
                    onChange={(e)=>{setPrice(e.target.value)}}
                  ></Form.Control></Col>

                  
                  {(!isEdit) && (
                  <Col xs={12} md={2}>
                  <Button
                    type="button"
                    name="btnEdit"
                    onClick={(e)=>handleEdit(e, item)}
                  >Edit
                  </Button>
                  </Col>
                  )}
                  
                {(isEdit) && (
                  <>
                    <Col xs={12} md={1}>
                    <Button
                      type="button"
                      name="btnSave"
                      onClick={(e)=>handleSave(e, item.id)}
                    >Save
                    </Button>
                    </Col>
                    <Col xs={12} md={1}>
                    <Button
                    type="button"
                    name="btnUndo"
                    onClick={(e)=>handleUndo(e, item.id)}
                  >Undo
                  </Button>
                  </Col>
                </>
                  )}

                  
                  <Col xs={12} md={1}>
                  <Button
                    type="button"
                    name="btnDelete"
                    disabled={isEdit}
                    onClick={(e)=>handleDelete(e, item.id)}
                  >Delete
                  </Button>
                  </Col>
                  </Row>
              </Form>
            ))
          }
  </>
  )
}