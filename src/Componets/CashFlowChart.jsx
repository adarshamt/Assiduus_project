// import React, { useEffect, useRef } from "react";
// import { select, scaleBand, axisBottom, stack, max, scaleLinear, axisLeft, stackOrderAscending, timeParse, timeFormat } from "d3";

// function StackedBarChart({ data }) {
//   const svgRef = useRef();
//   const yAxisRef = useRef();
//   const wrapperRef = useRef();

//   useEffect(() => {
//     const svg = select(svgRef.current);
//     const yAxisSvg = select(yAxisRef.current);
//     const { width, height } = wrapperRef.current.getBoundingClientRect();

//     const stackGenerator = stack().keys(["income", "outcome"]).order(stackOrderAscending);
//     const layers = stackGenerator(data);

//     const extent = [
//       0,
//       max(layers, (layer) => max(layer, (sequence) => sequence[1] + 0.2))
//     ];

//     const parseMonth = timeParse("%B");
//     const formatMonth = timeFormat("%B");

//     const xScale = scaleBand()
//       .domain(data.map((d) => parseMonth(d.date)))
//       .range([0, data.length * 50])
//       .padding(0.2);

//     const yScale = scaleLinear()
//       .domain(extent)
//       .range([height, 0]);

//     svg
//       .attr("width", data.length * 50)
//       .attr("height", height)
//       .selectAll(".layer")
//       .data(layers)
//       .join("g")
//       .attr("class", "layer")
//       .attr("fill", (layer) => (layer.key === "income" ? "green" : "#34eb37"))
//       .selectAll("rect")
//       .data((layer) => layer)
//       .join("rect")
//       .attr("class", "data-bar")
//       .attr("x", (sequence) => xScale(parseMonth(sequence.data.date)))
//       .attr("width", xScale.bandwidth())
//       .attr("y", (sequence) => yScale(sequence[1]))
//       .attr("height", (sequence) => yScale(sequence[0]) - yScale(sequence[1]));

//     const xAxis = axisBottom(xScale).tickFormat((month) => formatMonth(month));

//     svg
//       .select(".x-axis")
//       .attr("transform", `translate(0, ${height})`)
//       .call(xAxis)
//       .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", ".15em")
//       .attr("transform", "rotate(-65)");

//     // Remove the y-axis
//     yAxisSvg.select(".y-axis").remove();
//   }, [data]);

//   return (
//     <div ref={wrapperRef} className="svg-wrap">
//       <svg ref={yAxisRef} className="y-axis-svg" width="1">
//         <g className="y-axis" />
//       </svg>
//       <svg className="energy-svg" ref={svgRef}>
//         <g className="x-axis" />
//       </svg>
//     </div>
//   );
// }

// export default StackedBarChart;


import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = [
  { category: 'A', values: [10, 20, 30] },
  { category: 'B', values: [15, 25, 35] },
  { category: 'C', values: [20, 30, 40] },
];

const StackedBarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 },
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.sum(d.values))])
      .range([height, 0]);

    const color = d3.scaleOrdinal().range(['#98abc5', '#8a89a6', '#7b6888']);

    svg
      .selectAll('g')
      .data(d3.stack().keys([0, 1, 2])(data))
      .enter()
      .append('g')
      .attr('fill', (d) => color(d.key))
      .selectAll('rect')
      .data((d) => d)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.data.category))
      .attr('y', (d) => y(d[1]))
      .attr('height', (d) => y(d[0]) - y(d[1]))
      .attr('width', x.bandwidth());

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default StackedBarChart;
