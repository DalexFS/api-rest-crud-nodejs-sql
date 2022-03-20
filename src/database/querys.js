export const queries = {
  getAllProducts: "SELECT * FROM products",
  addNewProduct: "INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)",
  getProductById: "SELECT * FROM Products WHERE Id = @id",
  deleteProduct: "DELETE FROM Products WHERE Id = @Id",
  getTotalProducts: "SELECT COUNT(*) FROM Products",
  updateProductById: "UPDATE Products SET name = @name, description = @description, quantity = @quantity WHERE Id = @id"
};
