import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

function Chart() {

    return (
        <div>
            <Bar
                data={[{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]}
                width={100}
                height={50}
                options={{scales: {
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
                }}}
            />
        </div>
    )
}

export default Chart