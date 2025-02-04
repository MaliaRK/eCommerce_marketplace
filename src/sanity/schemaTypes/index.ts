import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import contactForm from './contactForm'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, contactForm],
}
