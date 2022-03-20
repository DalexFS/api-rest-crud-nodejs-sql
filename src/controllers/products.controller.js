/* Se obtienen todas las importaciones desde index.js
por ello se llama a la carpeta, ya que exporta el archivo por defecto */

import { getConnection, sql, queries } from "../database";

/**
 * Obtener todos los valores de la BD
 * GET
 * @param {array[]} res Respuesta del servidor
 */
export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProducts);
    // console.log(result.recordset);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/**
 * crea un nuevo item en la BD
 * POST
 * @param {array[]} req arroja la petición, y contiene los datos en json (son el body)
 * @param {string} res contiene la respuesta del servidor
 * @return en caso de que los elementos no esten null retorna un error
 */
export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res
      .status(400)
      .json({ msg: "Falta información. por favor llena todos los campos" });
  }

  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(queries.addNewProduct);

    // console.log(
    //   `name: ${name}, description: ${description}, quantity: ${quantity}`
    // );
    res.json(`Producto Agregado Exitosamente: ${name}`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/**
 * Cuenta todos los items de la BD
 * GET
 * @param {array[]} res contiene la cantidad de items en la BD en un array json
 */
export const getTotalProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTotalProducts);

    res.json(`${result.recordset[0][""]} Elementos encontrados`);
    res.send("No existe un elemento a eliminar");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/**
 * Obtiene un item de la BD por el identificador
 * GET
 * @param {Int} req obtiene los parametros por la url del id
 * @param {array[]} res contendra el arreglo del resultado de la BD
 */
export const getProductById = async (req, res) => {
  const { Id } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", sql.Int, Id)
      .query(queries.getProductById);

    // console.log(result);
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/**
 * Eliminar un item de la BD por el identificador
 * DELETE
 * @param {*} req Contiene el valor del identificador a eliminar de la BD
 * @param {array[]} res devuelve la respuesta de elementos que fueron afectados en la BD.
 */
export const deleteProductById = async (req, res) => {
  const { Id } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", sql.Int, Id)
      .query(queries.deleteProduct);

    // console.log(`${result.rowsAffected} Elemento Eliminado Satisfactoriamente`);
    res.send(`${result.rowsAffected} Elemento Eliminado Satisfactoriamente`);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/**
 * Actualiza los items de la BD por medio de un identificador
 * PUT
 * @param {arrat[]} req parametros del item
 * @param {string} res exito de actualizacion
 * @param {return} return en caso de campos vacios retorna un mensaje de no actualizacion
 */
export const updateProductById = async (req, res) => {
  const { name, description, quantity } = req.body;
  const { Id } = req.params;

  if (name == null || description == null || quantity == null) {
    return res.status(400).json({
      message:
        "Falta información. por favor llena todos los campos, para actualizar",
    });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .input("Id", sql.Int, Id)
      .query(queries.updateProductById);

    // console.log(
    //   `Producto Actualizado Exitosamente, Nueva información [name: ${name}, description: ${description}, quantity: ${quantity}]`
    // );

    res.send(
      `Producto Actualizado Exitosamente, Nueva información [name: ${name}, description: ${description}, quantity: ${quantity}]`
    );
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
