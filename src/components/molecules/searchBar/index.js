import React from 'react';
import { Input , Icon } from 'antd';
let Search = Input.Search;
let SearchBar = ({type , value, width, ...props}) => {
  // console.log("searchhhh",props)
  if (type == "search") {
    return (
      <div>
        <Search
          style={{"maxWidth":width}}
          placeholder={value}
          onChange={(e) => props.handleSearch(e)}
          enterButton
        />
      </div>
    )
  }
  return (
    <div>
      <Input style={{"maxWidth":width}} addonAfter={<Icon type="arrow-right" />} placeholder={value} />
    </div>
  )
}
SearchBar.defaultProps = {
  width: "400px",
  value: "",
  type: "search"
}
export default SearchBar;