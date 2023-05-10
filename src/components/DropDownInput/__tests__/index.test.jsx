import { fireEvent, render, screen } from '@testing-library/react'
import DropDownInput from '..'
import React from 'react'
describe('Tests for dropdown input component', () => {
  it('should render the dropdown input component', () => {
    render(<DropDownInput initialOption="Choose" />)
    expect(screen.getByText('Choose')).toBeTruthy()
  })
  it('should call the onChange function when the dropdown is changed', () => {
    const onChange = jest.fn()
    render(<DropDownInput noBg options={['Male']} initialOption="Choose" onChange={onChange} />)
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'test' }
    })
    expect(onChange).toHaveBeenCalled()
  })
})

