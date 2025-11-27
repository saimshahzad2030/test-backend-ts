import express, { Request, Response } from 'express';
 
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
app.use(cors())
app.use(
  bodyParser.json({
    verify: (req: Request, res: Response, buf) => {
      req.body = buf;
    },
  })
);
 
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  try {
     
    res.status(200).json({ message: 'Users fetched'   })

  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(port, async () => {

  console.log(`Server is running on http://localhost:${port} `);
});

export default app;