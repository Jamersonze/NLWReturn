import { Request, Response, Router } from 'express'

const router = Router()

router.post('/feedbacks', (req: Request, res: Response) => {
    return res.json(req.body)
})

export { router }