import React from "react"
import PermissionSwitch from "./../../organisms/permissionSwitch"
import PermissionForm from "./../../organisms/forms/PermissionForm"

const style = {
  container: {
    padding: "20px 180px"
  }
}

const app = props => {
  return (
    <div>
      <PermissionForm formData={props.formData} />
      <div style={style.container}>
        {console.log("rule", props.rule)}
        {props.rules ? (
          <div>
            {console.log(props.rule)}
            {props.rules.map(item => (
              <PermissionSwitch
                role={item.role}
                defaultChecked={item.permission}
                onChange={checked =>
                  props.onChange(checked, item.roleID, item.user, item.location)
                }
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default app
