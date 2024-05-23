import express from "express";
import { fileURLToPath } from "url";
import { join } from "node:path";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const port = process.env.PORT || 3000; // Use environment variable for port
const app = express();

// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

// Static files
app.use(express.static(join(__dirname, "public")));

// Routes
const loadRoutes = async () => {
  const routes = await import('./server/routes/connection.cjs');
  app.use('/api/connection', routes.default);
};

loadRoutes().catch((err) => {
  console.error('Error loading routes:', err);
});

// Error handling
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({
        errorCode: err.code,
        errorMessage: err.message
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
