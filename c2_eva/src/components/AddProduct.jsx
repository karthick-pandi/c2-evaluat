import React from "react";
import { Button, Select,Modal,Input,RadioGroup,Radio,ModalBody } from "@chakra-ui/react";
import { useState } from "react";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  
   const [show,setShow]=useState(false);
   

  return (
      <>
      <Button my={4} data-cy="add-product-button" onClick={()=>{
        setShow(!show)
      }}
      >Add New product</Button>
      {setShow===true ? 
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">submit</Button>
        </ModalBody>
      </Modal>
       : null }
    </>
      

  );
};

export default AddProduct;
