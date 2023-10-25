import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Digite um email valido'),
  password: z.string().min(1, 'Senha obrigatoria'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
