import vine from '@vinejs/vine'

export const createPetValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(1).maxLength(50),
    birthday: vine.date(),
    personality: vine.string().optional(),
    vaccined: vine.boolean(),
    gender: vine.enum(['male', 'female']),
    description: vine.string().optional(),
    breedName: vine.string(),
    speciesName: vine.string(),
  })
)
