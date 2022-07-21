import React from "react";
import Head from "next/head";
import ProductList from "../../components/products/ProductList";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";

export default function product({ products }) {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}
export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};