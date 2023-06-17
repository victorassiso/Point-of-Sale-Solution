// import { Header } from "../../components/Header/header";

const Products = () => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>$10.99</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>$15.99</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Product 3</td>
              <td>$8.99</td>
              <td>7</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
