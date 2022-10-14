import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { AutoComplete } from "../../index";
import '@testing-library/jest-dom/extend-expect';

describe('test autoComplete component', () => {
  it('should render', async () => {
    let lakers = [
      { value: "aaa", name: "我的小 A" },
      { value: "aaaaaaaa我是小A", name: "我的小 B" },
    ];
    const Demo = () => {
      return (
        <AutoComplete
          onSelect={() => { }}
          fetchSuggestions={lakers}
          width={600}
        ></AutoComplete>
      )
    }
    const { asFragment, getByTestId } = render(<Demo />)
    expect(asFragment()).toMatchSnapshot()

    fireEvent.change(getByTestId('input'), { target: { value: 'a' } })
    fireEvent.click(getByTestId('input'))

    expect(getByTestId('input')).toHaveAttribute('value', 'a')

    await waitFor(() => {
      expect(screen.getByText(/aaa/i)).toBeInTheDocument()
    }, { timeout: 5000 })
  })
})