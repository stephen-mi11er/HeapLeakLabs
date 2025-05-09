// "use server";

// import pool from './dbpool';

// class UserHandler{
//     async getUsers(){
//         const client = await pool.connect();
//         try {
//             const res = await client.query('SELECT * FROM Credential');
//             return res.rows;
//         } catch (err) {
//             console.error(err);
//             throw err;
//         } finally {
//             client.release();
//         }
//     }
// }

// export {UserHandler}