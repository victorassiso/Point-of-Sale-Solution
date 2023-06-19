import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Imagem do Produto</label>
            <code className="--color-dark">
              Formatos suportados: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>Produto não possui imagem</p>
            )}
          </Card>
          <label>Nome do Produto:</label>
          <input
            type="text"
            placeholder="Nome do produto"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Categoria do Produto:</label>
          <input
            type="text"
            placeholder="Categoria do Produto"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Preço do Produto:</label>
          <input
            type="text"
            placeholder="Preço do Produto"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Quantidaede do Produto:</label>
          <input
            type="text"
            placeholder="Quantidade do Produto"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Descrição do Produto:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Adicionar Produto
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
