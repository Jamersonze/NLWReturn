import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()

const port = process.env.PORT || 3333

app.use(cors(
    // Aqui voce define quais clientes podem acessar esse servidor
))

app.use(express.json())

app.use(router)

app.listen(port, () => console.log(`Its alive! And leaving through port ${port}`));