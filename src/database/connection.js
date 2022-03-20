import sql from "mssql";
import config from "../config";

// obj conexion
const sqlConfig = {
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  server: config.dbDerver,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(sqlConfig);
    return pool;
    // const result = await pool.request().query`select * from Products`;
    // console.log('Conectado a SQL Server => ' + process.env.DB_NAME);
  } catch (err) {
    console.log(err + "Error al conectar");
  }
}

export { sql };
