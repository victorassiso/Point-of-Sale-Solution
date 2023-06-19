const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Informe um nome"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      default: "SKU",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Informe uma categoria"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "Informe a quantidade"],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "Informe o preço"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Adicione uma descrição"],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
