export type Action = {
   [key: string]: (args: any) => Promise<unknown>
}

export interface Actions<Type extends Action> {
   actions?: {
      readonly [Property in keyof Type]?: Type[Property]
   }
}

export interface QueryData<Type extends Object> {
   data?: {
      readonly [Property in keyof Type]: Type[Property]
   }
}
