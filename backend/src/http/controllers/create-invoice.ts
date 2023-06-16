import { makeCreateInvoiceUseCase } from "@/use-cases/factories/make-create-invoice-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { object, z } from "zod";

export async function createInvoice(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createInvoiceBodySchema = z.object({
    store_id: z.string().uuid(),
    items: z.array(
      object({
        product_id: z.string(),
        amount: z.number(),
      })
    ),
  });

  const { store_id, items } = createInvoiceBodySchema.parse(request.body);

  try {
    const createInvoiceUseCase = makeCreateInvoiceUseCase();
    const invoice = await createInvoiceUseCase.execute({
      store_id,
      items,
    });
    return reply.status(201).send(invoice);
  } catch (err) {
    throw err;
  }
}
