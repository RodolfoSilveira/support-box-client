import React from 'react'
import { Bar } from 'react-chartjs-2'

function ChartBar() {

  return (
    <div>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }}
        width={100}
        height={20}
        options={
          {
            scales: {
              xAxes: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                stacked: true,
                gridLines: {
                  offsetGridLines: true
                }
              }],
              yAxes: [{
                stacked: true
              }],
              layout: {
                padding: {
                  left: 50,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
              },
              legend: {
                display: true,
                labels: {
                  fontColor: 'rgb(255, 99, 132)'
                }
              }
            }
          }
        }
      />
    </div>
  )
}

export default ChartBar
