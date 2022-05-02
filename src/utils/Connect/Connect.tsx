import React from "react"

export interface ActionsProps<Type> {
   actions?: Type
}

function Connect<ConnectedProps, Props, Actions>(
   Component: React.FC<Props>,
   actions: Actions
): React.FC<Props> {
   const ConnectedComponent: React.FC<
      ConnectedProps extends Props ? any : any 
   > = (originalPprops) => {
      return <Component {...originalPprops} actions={actions} />
   }

   return ConnectedComponent as React.FC<Props>
}

export default Connect

