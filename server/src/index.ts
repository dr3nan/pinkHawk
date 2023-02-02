import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import path from 'path';
import router from './router';
import job from './integration/twitter-service/twitter-api.service'

dotenv.config({ path: path.join(__dirname, '../.env') });
const port = process.env.SERVER_PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
job()


app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`)
);
