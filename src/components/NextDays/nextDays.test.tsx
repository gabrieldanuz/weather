import { render, screen } from '@testing-library/react-native'
import { NextDays } from '@components/NextDays'

import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays
        data={[
          {
            day: '18/07',
            min: '30c',
            max: '34c',
            icon: clearDay,
            weather: 'Céu limpo'
          },
          {
            day: '18/07',
            min: '30c',
            max: '34c',
            icon: clearDay,
            weather: 'Céu limpo'
          },
          {
            day: '19/07',
            min: '20c',
            max: '34c',
            icon: clearDay,
            weather: 'Céu limpo'
          },
          {
            day: '20/07',
            min: '30c',
            max: '34c',
            icon: clearDay,
            weather: 'Céu limpo'
          },
          {
            day: '21/07',
            min: '30c',
            max: '34c',
            icon: clearDay,
            weather: 'Céu limpo'
          }
        ]}
      />
    )

    expect(screen.getByText('18/07')).toBeTruthy()
  })
})
