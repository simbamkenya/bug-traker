import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


function StackedBarChart(props) {
  const ref = useRef();
  const margin = { top: 10, right: 10, bottom: 20, left: 10 };
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  console.log({width, height});

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
        setWidth(event[0].contentBoxSize[0].inlineSize);
        setHeight(event[0].contentBoxSize[0].blockSize);
    })

    resizeObserver.observe(ref.current);
    


    //   const width = 400 - margin.left - margin.right;
    // let width = widthk ?? ref.current.clientWidth * 0.95;
    const height = 60 - margin.top - margin.bottom;

    let el = d3
      .select(ref.current)

      el.selectAll("*").remove();

    const svg=  el.append("svg")
      .attr("width", width * 0.95 )
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // data

    const data = [
      { month: "Jan", open: 2, inProgress: 2, closed: 4,  resolved: 1 },
    ];
    const colors = ['#F87171', '#60A5FA', '#4ADE80', '#FACC15']

    const status = Object.keys(data[0]).filter((d) => d != "month");
    const months = data.map((d) => d.month);

    const stackedData = d3.stack().keys(status)(data);

    const xMax = d3.max(stackedData[stackedData.length - 1], (d) => d[1]);

    // scales
    const x = d3.scaleLinear().domain([0, xMax]).nice().range([0, width]);

    const y = d3.scaleBand().domain(months).range([0, height]).padding(0.25);

    const color = d3.scaleOrdinal().domain(status).range(colors);

    // draw bars
    // create one group for each fruit
    const layers = svg
      .append("g")
      .selectAll("g")
      .data(stackedData)
      .join("g")
      .attr("fill", (d) => color(d.key));

    // transition for bars
    const duration = 300;
    const t = d3.transition().duration(duration).ease(d3.easeLinear);

    layers.each(function (_, i) {
      // this refers to the group for a given fruit
      d3.select(this)
        .selectAll("rect")
        .data((d) => d)
        .join("rect")
        .attr("x", (d) => x(d[0]))
        .attr("y", (d) => y(d.data.month))
        .attr("height", y.bandwidth())
        .transition(t)
        // i is the index of this fruit.
        // this will give the bars for each fruit a different delay
        // so that the fruits will be revealed one at a time.
        // using .each() instead of a normal data join is needed
        // so that we have access to what fruit each bar belongs to.
        .delay(i * duration)
        .attr("width", (d) => x(d[1]) - x(d[0]));
     
    });
    
  }, [ref, width]);

  return <div ref={ref}></div>;
}

export default StackedBarChart;
