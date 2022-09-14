import React from "react"
import { Line } from "react-chartjs-2"

const LineGraph = () => {
    const state = {
        labels: ["January", "Feburary", "March", "April", "May"],
        datasets: [
            {
                label: "Rainfall",
                backgroundColor: "rgba(75, 192, 192, 1)",
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 2,
                data: [65, 45, 123, 42, 43]
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                text: "Avarage Rainfall per month",
                display: true,
                fontSize: 20
            }
        }
    }

    return (
        <div className="linegraph">
            <Line
                data={state}
                options={options}
            />

            <p style={{ textAlign: "center" }}>Line Graph</p>
        </div>
    )
}

export default LineGraph;