import React from "react"
import PropTypes from "prop-types"
import { Skeleton, Switch, Card, Icon, Avatar } from "antd"

const { Meta } = Card

const Card1 = props => {
  return (
    <Card size={props.size} style={props.style}>
      <Skeleton avatar active loading={props.loading}>
        <Meta
          avatar={<Icon type={props.iconType} style={props.iconStyle} />}
          title={props.title}
          description={props.description}
          extra={<Icon type="ellipsis" />}
        />
      </Skeleton>
    </Card>
  )
}

Card1.defaultProps = {
  title: "Title",
  description: "This is description",
  style: { width: "100%" },
  loading: false,
  iconStyle: { fontSize: "30px", marginTop: "30%" },
  size: "small"
}

export default Card1
