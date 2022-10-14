import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { AutoComplete } from "../../index";
import '@testing-library/jest-dom/extend-expect';

describe('test autoComplete component', () => {
  let lakers = [
    { value: "aaa", name: "我的小 A" },
    { value: "aaabbb", name: "我的小 B" },
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
  it('should render', () => {
    const { asFragment } = render(<Demo />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('click it should show suggestionList', async () => {
    const { getByTestId } = render(<Demo />)
    fireEvent.change(getByTestId('input'), { target: { value: 'a' } })
    // fireEvent.click(getByTestId('input'))

    expect(getByTestId('input')).toHaveAttribute('value', 'a')

    await waitFor(() => {
      expect(screen.getByText('aaa')).toBeInTheDocument()
      expect(screen.getByText('aaabbb')).toBeInTheDocument()
    }, { timeout: 1000 })
  })

  it('promise request should show suggestList', async () => {
    const handleFetch = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then((res) => res.json())
        .then(({ items }) => {
          console.log(items);
          return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));
        });
    };
    const AsyncDemo = () => {
      return (
        <AutoComplete
          onSelect={() => { }}
          fetchSuggestions={handleFetch}
          width={600}
        ></AutoComplete>
      )
    }
    const { getByTestId } = render(<AsyncDemo />)
    fireEvent.change(getByTestId('input'), { target: { value: 'async' } })

    await waitFor(() => {
      expect(getByTestId('autoComplete-warp')).toBeInTheDocument()
    }, { timeout: 5000 })
  })
})