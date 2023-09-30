import express from 'express';

import userRoute from './routers/user';

const app = express();

app.use('/user', userRoute);

app.listen(process.env.PORT); 