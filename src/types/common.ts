import * as Joi from "joi"
import { EnvironmentConfig } from "./project-config"

export type Primitive = string | number | boolean

export interface PrimitiveMap { [key: string]: Primitive }

export const identifierRegex = /^[a-z0-9][\w\d\-]*$/i
export const JoiPrimitive = () => Joi.alternatives().try(Joi.number(), Joi.string(), Joi.boolean())

export const JoiIdentifier = () => Joi
  .string().regex(identifierRegex)
  .description("may contain letters, numbers, underscores and dashes and must start with a letter or number")

export interface Environment {
  name: string
  namespace?: string
  config: EnvironmentConfig,
}
