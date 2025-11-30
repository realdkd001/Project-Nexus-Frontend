"use client";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";


const chartConfig = {
    vote: {
        label: "Votes",
        color: "var(--chart-2)",
    },

} satisfies ChartConfig;

export function ChartBar({ data }: { data: Record<string, number> }) {
    
    const chartData = Object.entries(data).map(([key, value]) => ({
        label: key,
        vote: value,
    }));

    return (
        <ChartContainer className="h-60 w-full" config={chartConfig}>
            <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{ top: 10, right: 80, left: 0, bottom: 0 }}
            >
                <CartesianGrid horizontal={false} />
                <YAxis
                    dataKey="label"
                    type="category"
                    tickLine={false}
                    tickMargin={3}
                    axisLine={false}
                    width={100}
                />

                <XAxis dataKey="vote" type="number" hide />

                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />

                <Bar
                    dataKey="vote"
                    layout="vertical"
                    fill="var(--color-vote)"
                    radius={8}
                >
                    <LabelList
                        dataKey="vote"
                        position="right"
                        offset={8}
                        className="fill-foreground"
                        fontSize={14}
                    />

                </Bar>
            </BarChart>
        </ChartContainer>

    );
}
