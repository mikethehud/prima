import classNames from "classnames"
import * as React from "react"
import { ThemeColor } from "../../types"

import CardBody from "./CardBody"
import CardButtons from "./CardButtons"
import CardSubtitle from "./CardSubtitle"
import CardTitle from "./CardTitle"

interface CardProps {
  highlight?: ThemeColor
}

const Card: React.SFC<CardProps> = ({ children, highlight }) => {
  const cardClasses = classNames("card", {
    [`highlight-${highlight}`]: Boolean(highlight)
  })

  return <div className={cardClasses}>{children}</div>
}

export default Card

export { Card, CardBody, CardButtons, CardSubtitle, CardTitle }
