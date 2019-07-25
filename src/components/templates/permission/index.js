import React from "react"
import PermissionSwitch from "./../../organisms/permissionSwitch"
import AppPermissionForm from "../../organisms/forms/AppPermissionForm"
import WebPermissionForm from "../../organisms/forms/WebPermissionForm"

const style = {
  container: {
    padding: "20px 180px"
  }
}

const app = props => {
  return (
    <div>
      {props.type === "app" ? (
        <AppPermissionForm formData={props.formData} />
      ) : (
        <WebPermissionForm formData={props.formData} />
      )}

      <div style={style.container}>
        {console.log("rule", props.rule)}
        {props.rules ? (
          <div>
            {console.log(props.rule)}
            {props.rules.map(item => (
              <PermissionSwitch
                role={item.role}
                defaultChecked={item.permission}
                onChange={
                  props.type === "app"
                    ? checked =>
                        props.onChange(
                          checked,
                          item.roleID,
                          item.user,
                          item.location
                        )
                    : checked =>
                        props.onChange(
                          checked,
                          item.roleID,
                          item.user,
                          item.business
                        )
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
