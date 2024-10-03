import mockAPI from './mockApi';
//import './App.css';
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import { ProductTable } from './ProductTable';
import Container from "react-bootstrap/Container";

export function Jumble() {

  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [refreshKey, setRefreshKey] = useState(false);

    // Delete a record/item
    async function deleteProduct(itemId){
      try{
        setLoading(true);
        setRefreshKey(true);
        const response = await mockAPI.delete(`/product/${itemId}`);
        //console.log(response);
      } catch (error){
        console.error(error.message);
      }
      finally{
        // reset the loading
        setLoading(false);
        //console.log("Request completed -- one product item.");
      }
    }
  

  // Update a record/item
  async function updateProduct(itemId, updatedItem){
    try{
      setLoading(true);
      setRefreshKey(true);
      const response = await mockAPI.put(`/product/${itemId}`, updatedItem);
      //console.log(response);
    } catch (error){
      console.error(error.message);
    }
    finally{
      // reset the loading
      setLoading(false);
      //console.log("Request completed -- one product item.");
    }
  }

  // Create a record/item
  async function addProduct(newProduct){
    try{
      // show progression bar
      setLoading(true);
      // reload the data
      setRefreshKey(true);
      /* const newProduct = {
        name: "Fast Moon Rocket",
        price: "7",
        quantity: "10"
      }; */
      const response = await mockAPI.post("/product", newProduct);
      //console.log(response);
    } catch (error){
      console.error(error.message);
    }
    finally{
      // reset the loading
      setLoading(false);
      //console.log("Request completed -- one product item.");
    }
  }

  // Read one item
  async function getProductItem(productId){
    try{
      setLoading(true);
      const response = await mockAPI.get(`/product/${productId}`);
      //console.log(response);
    }
    catch (error){
      console.error(error.message);
    }
    finally{
      // reset the loading
      setLoading(false);
      //console.log("Request completed -- one product item.");
    }
  }

  // Read all products
  async function getProducts(){
    try{
      // set at the first line, because the 
      // api takes time. 
      setLoading(true);
      const response = await mockAPI.get("/product");
      setProducts(response.data);
      // If api call has error, the lines below will not
      // run anymore.
      //console.log("Request successful.");
      //console.log(response);
    } 
    catch(error){
      console.log(error.message);
    }
    finally{
      //console.log("Request completed.");
      // reset the loading state
      setLoading(false);
    }
  }

  // Loading the data
  // dependency array
  // empty []: run once only after component mounts
  // useEffect(()=>{}, [])
  // not provided: run after every render
  // useEffect(()=>{})
  // [dependencies]: run if the dependency changed
  // useEffect(()=>{},[dependencies])
  useEffect(()=>{
    let ignore = false;
    if(!ignore || refreshKey){
      //console.log("Effect running");
      getProducts();
    }
    // clean up
    return (()=>{
      ignore=true; 
      setRefreshKey(false);
      //console.log("Clean up");
    })
  }, [refreshKey]);

  return (
    <Container>
      
      <h1>Product List</h1>
      <p>This is an assignment to use <b>axios</b> API package.
      The API endpoint contains a jumble of items added by 
      students in the class.
      </p>
      <button
        onClick={getProducts}
        disabled={isLoading}
        hidden
      >{!isLoading ? "Load products" : "Loading ..."}</button>

      <button
        onClick={(e)=>getProductItem(222)}
        disabled={isLoading}
        hidden
      >{!isLoading ? "Load one item" : "Loading ..."}</button>

      <button
        onClick={(e)=>addProduct()}
        disabled={isLoading}
        hidden
      >{!isLoading ? "Add one item" : "Adding ..."}</button>

      <button
        onClick={(e)=>updateProduct(229)}
        disabled={isLoading}
        hidden
      >{!isLoading ? "Update item" : "Adding ..."}</button>

      <button
        onClick={(e)=>deleteProduct(253)}
        disabled={isLoading}
        hidden
      >{!isLoading ? "Delete item" : "Deleting ..."}</button>

      <PropagateLoader
        color="#000000" loading={isLoading}
      ></PropagateLoader>

      <ProductTable 
        list={products} 
        addProduct={addProduct}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      ></ProductTable>
    </Container>
  );
}

