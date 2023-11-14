import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  { name: "August", value1: 30, value2: 25 },
  { name: "September", value1: 20, value2: 30 },
  { name: "October", value1: 30, value2: 35 },
  { name: "November", value1: 12, value2: 32 },
  { name: "December", value1: 40, value2: 25 },
  { name: "january", value1: 30, value2: 45 },
];

const StackedChart = () => {
  const ref = useRef(null);
  const margin = { top: 20, right: 0, bottom: 30, left: 20 };
  const width = 560;
  const height = 250;
  const colors = ["#34eb37", "green"];

  useEffect(() => {
    const svg = d3.select(ref.current);

    // Create the scales.
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width])
      .paddingInner(0.85);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value1 + d.value2)])
      .range([height, margin.top]);

    // Create the stacked bars.
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${-30})`);

    const stack = d3.stack().keys(["value1", "value2"]);

    const stacks = stack(data);

    g.selectAll(".bar")
      .data(stacks)
      .enter()
      .append("g")
      .attr("class", "bar")
      .attr("fill", (d, i) => colors[i])
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.data.name))
      .attr("y", (d) => yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr('rx', 5 )
      .attr('ry', 0);

    // Add labels at the bottom of each bar
    g.selectAll(".bar")
      .data(stacks)
      .enter()
      .append("g")
      .attr("class", "label")
      .selectAll("text")
      .data((d) => d)
      .enter()
      .append("text")
      .attr("x", (d) => xScale(d.data.name) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d[1]) + 15) // Adjust the vertical position of the labels
      .attr("text-anchor", "middle")
      .text((d) => d.data.name);

    // Add the axes.
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(${margin.left}, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg.selectAll(".x.axis .tick line").remove();
    svg.selectAll(".domain").remove();
    svg.append('g').attr('transform', `translate(${margin.left},0)`);

  }, [data]);

  return <svg ref={ref} width={width} height={height} />;
};

export default StackedChart;
