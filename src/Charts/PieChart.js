import React from "react"
import { Pie } from "react-chartjs-2"

const PieChart = () => {
    const state = {
        labels: ["January", "Feburary", "March", "April", "May"],
        datasets: [
            {
                label: "Rainfall",
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
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
        <div className="pie">
            <Pie
                data={state}
                options={options}
            />

            <p style={{ textAlign: "center" }}>Pie Chart</p>
        </div>
    )
}

export default PieChart;