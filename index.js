import express from 'express';
import cors from './middleware/corsMiddleware.js';
import userRouter from "./routers/userRouter.js";

import './config/environment.js';

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors);
app.use(express.json());

app.use('/auth', userRouter);
// app.use('/collection', productRouter);

// app.get('/', (req, res) => {
// 		res.send('Hello World!')
// })

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
