import { z } from 'zod';

// Definir el esquema de validación con Zod
export const contactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email('Ingrese una dirección de correo electrónico válida.').nonempty('Este campo es obligatorio.'),
  phoneNumber: z.string().regex(/^\d{7,12}$/, { message: 'El número de teléfono debe tener un formato válido.' }).nonempty('Este campo es obligatorio.'),
  message: z.string(),
});





