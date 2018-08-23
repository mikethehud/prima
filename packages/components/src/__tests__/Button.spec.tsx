/* tslint:disable:jsx-no-lambda */

import { shallow } from "enzyme"
import * as React from "react"
import Button from "../Button/Button"
import { ButtonType, ThemeColor } from "../types"

const buttonColors: ThemeColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "attention",
  "negative"
]

const buttonTypes: ButtonType[] = ["ghost", "outline", "normal"]

describe("Button", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Button text="Hello" />)
    expect(wrapper).toMatchSnapshot()
  })

  // Run through all buttonColors
  buttonColors.forEach(buttonColor => {
    it(`can have color ${buttonColor}`, () => {
      const wrapper = shallow(<Button text="Hello" color={buttonColor} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  // Run through all buttonTypes
  buttonTypes.forEach(buttonType => {
    it(`can be of type ${buttonType}`, () => {
      const wrapper = shallow(<Button text="Hello" type={buttonType} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  it("can have an arrow", () => {
    const wrapper = shallow(<Button text="Hello" arrow={true} />)
    expect(wrapper).toMatchSnapshot()
  })
})
