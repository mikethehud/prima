/* tslint:disable:jsx-no-lambda */

import { mount, shallow } from "enzyme"
import * as React from "react"
import Button from "../atoms/Button/Button"
import {
  Card,
  CardBody,
  CardButtons,
  CardSubtitle,
  CardTitle
} from "../molecules/Card/Card"
import { ThemeColor } from "../types"

const highlightColors: ThemeColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "attention",
  "negative"
]

describe("Card", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Card />)
    expect(wrapper).toMatchSnapshot()
  })

  // Run through all highlightColors
  highlightColors.forEach(highlightColor => {
    it(`can have highlight with color color ${highlightColor}`, () => {
      const wrapper = shallow(<Button text="Hello" color={highlightColor} />)
      expect(wrapper.hasClass(highlightColor)).toBe(true)
      expect(wrapper).toMatchSnapshot()
    })
  })

  it("renders a cardbody", () => {
    const wrapper = mount(
      <Card>
        <CardBody>Hello</CardBody>
      </Card>
    )
    expect(wrapper.find(".card-body").length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it("renders cardbuttons", () => {
    const wrapper = mount(
      <Card>
        <CardButtons>
          <Button text="Hello" />
        </CardButtons>
      </Card>
    )
    expect(wrapper.find(".card-buttons").length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it("renders subtitle", () => {
    const wrapper = mount(
      <Card>
        <CardSubtitle>Hello</CardSubtitle>
      </Card>
    )
    expect(wrapper.find(".card-subtitle").length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it("renders title", () => {
    const wrapper = mount(
      <Card>
        <CardTitle>Hello</CardTitle>
      </Card>
    )
    expect(wrapper.find(".card-title").length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})
