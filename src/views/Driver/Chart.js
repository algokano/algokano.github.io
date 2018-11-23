import React from 'react'
import ChartistGraph from "react-chartist";

const ChartLine = (dates, plan)=>{
    return(
        <div className="card">
            <div className="content">
                <div className="ct-chart">
                    <ChartistGraph
                        data={{
                            labels: dates,
                            series: [
                                plan
                            ]
                        }}
                        type="Line"
                        options={{
                            seriesBarDistance: 10,
                            axisX: {
                                showGrid: true
                            },
                            height: "245px"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default ChartLine