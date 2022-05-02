import React from "react"

type Action = {
   [key: string]: (args: any) => Promise<unknown>
}

interface Actions<Type extends Action> {
   actions?: {
      readonly [Property in keyof Type]?: Type[Property]
   }
}

interface QueryData<Type extends Object> {
   data?: {
      readonly [Property in keyof Type]: Type[Property]
   }
}

interface EditorProps
   extends Actions<{
         submitForm: (formData: any) => any
      }>,
      QueryData<{
         user: {
            name: string
         }
      }> {}

const Editor: React.FC<EditorProps> = (props) => {
   return (
      <div>
         <h1>Editor</h1>
         <form
            onSubmit={(e) => {
               e.preventDefault()
               const formData = Object.fromEntries(
                  new FormData(e.target as HTMLFormElement)
               )
               console.log("form.onSubmit(...)", formData)
               props.actions?.submitForm?.(formData)
            }}
         >
            <input value={props.data?.user.name} type="text" name="name" />
         </form>
      </div>
   )
}

export default Editor
