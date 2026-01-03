import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export const ChartFinance = ({title,data}) => {
    return (
        <>
            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="font-semibold text-gray-800 mb-4">{title}</h2>

                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="label" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="amount" fill="#6366f1" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};
