import express, {Application} from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(userRoutes);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/users', userRoutes);

export default app;