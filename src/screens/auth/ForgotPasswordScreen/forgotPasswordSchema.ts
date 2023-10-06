import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('Digite um email valido'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
