import { MailAdapter } from '../adapters/mail-adapter'
import { FeedbacksRepository } from '../repositories/feedbacks-repository'

interface SubmitFeedbackUseCaseRequest {
    type: string
    comment: string
    screenshot?: string
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async execute (request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        if (!type) {
            throw new Error("Type is Required");
        }

        if (!comment) {
            throw new Error("Comment is Required");
        }

        if(screenshot && !screenshot.startsWith("data:image/png;base64")){
            throw new Error("Invalid screenshot format");
        }

        await this.mailAdapter.sendMail({
            subject: "Novo feedback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
                `<p>Tipo do Feedback: ${type}</p>`,
                `<p>Comentario: ${comment}</p>`,
                screenshot ? `<img src=${screenshot} alt="Imagem"/>`: ``,
                `</div>`
            ].join('\n')
        })
    }
}