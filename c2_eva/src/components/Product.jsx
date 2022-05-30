import React from "react";
import { Text,Image,Box,Stack,Heading,Tag,TagLabel } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import axios from "axios";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  const [collection,setCollection]=useState([])
  useEffect(()=>{
    getStudent();
  },[]);

   
  const getStudent=()=>{
    axios.get('http://localhost:8080/products')
    .then(function(response){
      setCollection(response.data)
      console.log(response.data);
      
    })
    .catch(function(error){
      console.log(error)
    })
    .then(function (){

    });
  }

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
