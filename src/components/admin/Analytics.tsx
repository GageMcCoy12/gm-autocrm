import React from "react";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const Analytics = () => {
  // Mock data - replace with actual data fetching
  const responseTimeData = [
    { month: "Jan", avgTime: 2.4 },
    { month: "Feb", avgTime: 2.1 },
    { month: "Mar", avgTime: 1.8 },
    { month: "Apr", avgTime: 2.2 },
    { month: "May", avgTime: 1.5 },
    { month: "Jun", avgTime: 1.3 },
  ];

  const satisfactionData = [
    { month: "Jan", score: 4.2 },
    { month: "Feb", score: 4.3 },
    { month: "Mar", score: 4.5 },
    { month: "Apr", score: 4.4 },
    { month: "May", score: 4.6 },
    { month: "Jun", score: 4.8 },
  ];

  const ticketVolumeData = [
    { month: "Jan", new: 120, resolved: 100 },
    { month: "Feb", new: 140, resolved: 130 },
    { month: "Mar", new: 130, resolved: 140 },
    { month: "Apr", new: 150, resolved: 145 },
    { month: "May", new: 160, resolved: 155 },
    { month: "Jun", new: 140, resolved: 150 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Average Response Time (hours)</h3>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                line1: {
                  theme: {
                    light: "#2563eb",
                    dark: "#60a5fa",
                  },
                },
              }}
            >
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="avgTime"
                  name="Response Time"
                  stroke="var(--color-line1)"
                  strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Customer Satisfaction Score</h3>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                bar1: {
                  theme: {
                    light: "#16a34a",
                    dark: "#22c55e",
                  },
                },
              }}
            >
              <BarChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 5]} />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar
                  dataKey="score"
                  name="Satisfaction"
                  fill="var(--color-bar1)"
                />
              </BarChart>
            </ChartContainer>
          </div>
        </Card>

        <Card className="p-4 md:col-span-2">
          <h3 className="text-lg font-medium mb-4">Ticket Volume Trends</h3>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                line1: {
                  theme: {
                    light: "#dc2626",
                    dark: "#ef4444",
                  },
                },
                line2: {
                  theme: {
                    light: "#16a34a",
                    dark: "#22c55e",
                  },
                },
              }}
            >
              <LineChart data={ticketVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="new"
                  name="New Tickets"
                  stroke="var(--color-line1)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  name="Resolved Tickets"
                  stroke="var(--color-line2)"
                  strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;