import React from "react"

export interface ActionsProps<Type> {
   actions?: Type
}

function Connect<ConnectedProps, Actions>(
   Component: React.FC<ConnectedProps>,
   actions: Actions
) {
   const ConnectedComponent: React.FC<ConnectedProps> = (originalProps) => {
      return <Component {...originalProps} actions={actions} />
   }

   return ConnectedComponent as React.FC<
      Omit<ConnectedProps, keyof ActionsProps<any>>
   >
}

export default Connect
