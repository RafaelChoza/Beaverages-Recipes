import {z} from "zod"
import { CategoriesAPIResponseSchema, DrinkAPIREsponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchema } from "../utils/recipes-schemas"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIREsponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>