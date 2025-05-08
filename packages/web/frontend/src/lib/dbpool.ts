"use server";

import { Pool } from 'pg';

// In development, avoid exhausting connections
const pool = new Pool({
  connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@HOST:15432/DATABASE?schema=public`,
});

export default pool;
