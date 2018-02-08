import React from 'react'
import { PieChart, Pie, Cell} from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#5584ff', '#25396e', '#3755a4', '#4164c2'];

class UserSales extends React.Component {

    render() {
        return (
            <PieChart width={302} height={302} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                >
                    {
                        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>

        )
    }
}
export default UserSales;