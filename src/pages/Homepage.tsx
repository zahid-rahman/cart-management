import { products } from "../@fakedb/products";
import ProductItem from "../components/product/ProductItem";

export default function Homepage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <div className="grid grid-cols-4 gap-4 my-20 mx-10">
        {products?.map((product) => {
          return <ProductItem key={product?.name} product={product} />;
        })}
      </div>
    </div>
  );
}
