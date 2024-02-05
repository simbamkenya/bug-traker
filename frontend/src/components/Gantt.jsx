import React from "react";
import { useRef, useEffect } from "react";
import {
  select,
  selectAll,
  scaleBand,
  scaleTime,
  max,
  min,
  axisBottom,
  axisLeft,
} from "d3";

function Gantt(props) {
  const chartRef = useRef(null);
  const data = [
    {
      task: "Planning",
      start: new Date("2023-01-01"),
      end: new Date("2023-01-05"),
    },
    {
      task: "Research",
      start: new Date("2023-01-03"),
      end: new Date("2023-01-12"),
    },
    {
      task: "Design",
      start: new Date("2023-01-12"),
      end: new Date("2023-01-18"),
    },
    {
      task: "Execution",
      start: new Date("2023-01-19"),
      end: new Date("2023-01-28"),
    },
  ];

  useEffect(() => {
    // Set up the SVG container
    const svgWidth = 800;
    const svgHeight = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 70 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    // if (svg) {
    //   svg.selectAll("*").remove();
    // }

    const svg = select(chartRef.current)
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Define scales
    const xScale = scaleTime()
      .domain([min(data, (d) => d.start), max(data, (d) => d.end)])
      .range([0, width]);

    const yScale = scaleBand()
      .domain(data.map((d) => d.task))
      .range([0, height])
      .padding(0.1);

    // Draw bars
    const rect = svg.selectAll("g").data(data).enter().append("g");

    rect
      .append("rect")
      .attr("x", (d) => xScale(d.start))
      .attr("y", (d) => yScale(d.task))
      .attr("width", (d) => xScale(d.end) - xScale(d.start))
      .attr("height", yScale.bandwidth())
      .attr("fill", "white");

    rect
      .append("text")
      .attr("x", (d) => xScale(d.start) + (xScale(d.end) - xScale(d.start)) / 2)
      .attr("y", (d) => yScale(d.task) + yScale.bandwidth() / 2)
      .text((d) => d.task);

    // Add axes
    const xAxis = axisBottom(xScale);
    const yAxis = axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis.tickSize(-height).ticks(20))
      .style("opacity", 0.3)
      .style("stroke-width", "0.3px");

    svg.append("g").call(yAxis);
  }, []);

  return <div ref={chartRef}></div>;
}

export default Gantt;
