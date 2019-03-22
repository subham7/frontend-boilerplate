import React from 'react';
import { Input , Icon } from 'antd';
let Search = Input.Search;
let SearchBar = ({type , value, width}) => {
  if (type == "search") {
    return (
      <div>
        <Search
          style={{"maxWidth":width}}
          placeholder={value}
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    )
  }
  return (
    <div>
      <Input style={{"maxWidth":width}} addonAfter={<Icon type="arrow-right" />} defaultValue={value} />
    </div>
  )
}
SearchBar.defaultProps = {
  width: "400px",
  value: "",
  type: "search"
}
export default SearchBar;