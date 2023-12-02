import express from 'express';
import cors from './middleware/corsMiddleware.js';
import userRouter from "./routers/userRouter.js";

import './config/environment.js';
import connectDb from "./db/db.js";

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors);
app.use(express.json());

app.use('/user', userRouter);

(async () => {
		try {
				await connectDb('mongodb://127.0.0.1:27017/course');
				app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
		}
		catch(err) {
				console.log(err);
		}
})();
