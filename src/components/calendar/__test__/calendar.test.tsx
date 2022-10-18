import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calendar } from '../../index';

describe('test Calendar component', () => {
  it('should render base Calendar', () => {
    const { asFragment } = render(<Calendar></Calendar>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('callback is successfully after click event', () => {
    const handleSelect = jest.fn();
    const handlePanelChange = jest.fn();
    render(<Calendar onSelect={handleSelect} onPanelChange={handlePanelChange}></Calendar>);
    fireEvent.click(screen.getByText('15'));
    fireEvent.click(screen.getByText('>'));
    fireEvent.click(screen.getByText('<'));
    expect(handlePanelChange).toHaveBeenCalledTimes(2);
    expect(handleSelect).toHaveBeenCalledTimes(2);
  });

  it('should find classnames', () => {
    const { container } = render(<Calendar></Calendar>);
    expect(container.querySelector('.speed-calendar')).toBeTruthy();
    expect(container.querySelector('.speed-calendar-picker')).toBeTruthy();
    expect(container.querySelector('.speed-calendar-arrow')).toBeTruthy();
    expect(container.querySelector('.speed-calendar-detail')).toBeTruthy();
    expect(container.querySelector('.speed-calendar-week')).toBeTruthy();
    expect(container.querySelector('.speed-calendar-day')).toBeTruthy();
  });

  it('custom data in the Calendar component', () => {
    const Demo = () => {
      let date = new Date();
      const customData = [
        {
          day: 1,
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          getNode: () => {
            return (
              <div style={{ display: 'flex' }}>
                <div>吃饭</div>
                <div
                  style={{
                    background: 'red',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    position: 'relative',
                    left: '5px',
                  }}
                ></div>
              </div>
            );
          },
        },
        {
          day: 2,
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          getNode: () => {
            return <div>睡觉</div>;
          },
        },
      ];
      return <Calendar customData={customData}></Calendar>;
    };

    const { asFragment } = render(<Demo></Demo>);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('吃饭')).toBeInTheDocument();
    expect(screen.getByText('睡觉')).toBeInTheDocument();
  });
});
