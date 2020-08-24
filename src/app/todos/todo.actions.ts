import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO] Crear todo',
    props<{texto: string}>()
)