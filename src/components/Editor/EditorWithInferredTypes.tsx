import React from "react"
import Connect, { ActionsProps } from "../../utils/Connect/Connect"

interface EditorProps extends ActionsProps<typeof actions> {
   readonly?: boolean
}

export const Editor: React.FC<EditorProps> = (props) => {
   return (
      <div>
         <h3>Editor {props.readonly ? <i> (Readonly)</i> : null}</h3>
         <form
            onSubmit={(e) => {
               e.preventDefault()
               const formData = Object.fromEntries(
                  new FormData(e.target as HTMLFormElement)
               )
               console.log("onSubmit", formData)
               // TODO: Inject actions
               props.actions?.submitForm({
                  name: formData.name as string,
               })
            }}
         >
            <input
               // TODO: Inject value
               // value={props.data?.user.name}
               type="text"
               name="name"
            />
         </form>
      </div>
   )
}

export const actions = {
   submitForm: (formData: { name: string }) => {
      console.info("actions.submitForm ... OK", formData)
      return Promise.resolve()
   },
}

export default Connect(Editor, actions)
