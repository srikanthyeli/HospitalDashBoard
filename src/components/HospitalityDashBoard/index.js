// Write your code here
import {Component} from 'react'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const hospitalityList = [
  {
    id: 1,
    city: 'Agra',
    netSales: 31276,
    netExpanse: 61178,
    dailyTarget: 699423,
    date: '2024-02-05',
  },
  {
    id: 2,
    city: 'Bangulore',
    netSales: 27500,
    netExpanse: 50123,
    dailyTarget: 509423,
    date: '2024-02-05',
  },
  {
    id: 3,
    city: 'Delhi',
    netSales: 41276,
    netExpanse: 51178,
    dailyTarget: 699564,
    date: '2024-02-05',
  },
  {
    id: 4,
    city: 'Goa',
    netSales: 35500,
    netExpanse: 55000,
    dailyTarget: 607500,
    date: '2024-02-05',
  },
  {
    id: 5,
    city: 'jaipur',
    netSales: 40000,
    netExpanse: 65000,
    dailyTarget: 455000,
    date: '2024-02-05',
  },
]

class HospitalityDashBoard extends Component {
  state = {
    InputCity: '',
  }

  onChangeCityName = event => {
    this.setState({InputCity: event.target.value})
  }

  render() {
    const {InputCity} = this.state
    const DataFormatter = number => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }

    return (
      <div className="app-container">
        <h1 className="heading">Hospitality Industry CRM</h1>
        <label className="labelName" htmlFor="labelId">
          Select Your City
        </label>
        <select
          id="labelId"
          onChange={this.onChangeCityName}
          className="select-field"
        >
          {hospitalityList.map(eachItem => (
            <option value={InputCity} key={eachItem.id}>
              {eachItem.city}
            </option>
          ))}
        </select>

        <BarChart
          data={hospitalityList}
          width={900}
          height={400}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="city"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar
            dataKey="netSales"
            name="NetSales"
            fill="#1f77b4"
            barSize="20%"
          />
          <Bar
            dataKey="netExpanse"
            name="Expanse"
            fill="#fd7f0e"
            barSize="20%"
          />
          <Bar
            dataKey="dailyTarget"
            name="Target"
            fill="#f54394"
            barSize="20%"
          />
        </BarChart>
      </div>
    )
  }
}

export default HospitalityDashBoard
