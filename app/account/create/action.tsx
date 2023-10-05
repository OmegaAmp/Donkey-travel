'use server'

import * as z from 'zod'

export async function createAccount (form: FormData) {
    const dataSchema = z.object({
        name: z.string().nonempty().max(25),
        email: z.string().nonempty().email(),
        phone: z.string().nonempty().regex(/^[2-9]\d{2}-\d{3}-\d{4}$/),
        password: z.string().nonempty()
    });

    const formEntries = Array.from(form.entries());
    const formValues = Object.fromEntries(formEntries);

    const parsedData = dataSchema.safeParse(formValues);

    if (!parsedData.success) {
        console.error("Invalid or missing form data:", parsedData.error);
        throw parsedData.error;
    }
}