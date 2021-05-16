import { generateChartData } from './chart'

describe('generateChartData', () => {
  it('returns correct formatted chart data', () => {
    const sample = [
      {
        datetime: '2014-08-11 00:00:00',
        temperature_max: '21.5',
        temperature_min: '16.1',
        precipitation_probability: '70',
        precipitation_mm: '3.6',
      },
      {
        datetime: '2014-08-12 00:00:00',
        temperature_max: '20.6',
        temperature_min: '15.5',
        precipitation_probability: '70',
        precipitation_mm: '3.6',
      },
      {
        datetime: '2014-08-13 00:00:00',
        temperature_max: '24.1',
        temperature_min: '13.2',
        precipitation_probability: '90',
        precipitation_mm: '6.0',
      },
    ]

    const result = generateChartData(sample)

    expect(result).toEqual([
      {
        data: [
          { x: '11.08', y: '70' },
          { x: '12.08', y: '70' },
          { x: '13.08', y: '90' },
        ],
        id: 'Precipitation %',
      },
      {
        data: [
          { x: '11.08', y: '3.6' },
          { x: '12.08', y: '3.6' },
          { x: '13.08', y: '6.0' },
        ],
        id: 'Precipitation',
      },
      {
        data: [
          { x: '11.08', y: '16.1' },
          { x: '12.08', y: '15.5' },
          { x: '13.08', y: '13.2' },
        ],
        id: 'Temperature Min',
      },
      {
        data: [
          { x: '11.08', y: '21.5' },
          { x: '12.08', y: '20.6' },
          { x: '13.08', y: '24.1' },
        ],
        id: 'Temperature Max',
      },
    ])
  })
})
