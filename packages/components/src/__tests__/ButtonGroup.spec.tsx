/* tslint:disable:jsx-no-lambda */

import { mount, shallow } from "enzyme"
import * as React from "react"
import Button from "../Button/Button"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

describe("ButtonGroup", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ButtonGroup />)
    expect(wrapper).toMatchSnapshot()
  })

  it("renders with one button inside", () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button text="Hello" />
      </ButtonGroup>
    )
    expect(wrapper.find(".button").length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it("renders with multiple buttons inside", () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button text="Hello" />
        <Button text="Hello" />
      </ButtonGroup>
    )
    expect(wrapper.find(".button").length).toEqual(2)
    expect(wrapper).toMatchSnapshot()
  })
})
