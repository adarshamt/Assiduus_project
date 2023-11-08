import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 280;
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);
      const barWidth = 0.2 * xScale.bandwidth();

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.name))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => yScale(0) - yScale(d.value))
      .attr('fill', 'green')
      .attr('width', barWidth)
      .attr('rx', 5) // Set the x-axis border radius
      .attr('ry', 5);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
    //   .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
    //   .call(d3.axisLeft(yScale).ticks(1));

  

  }, [data]);

  return (
    <svg
      ref={svgRef}
      width="500"
      height="300"
    //   style={{ border: '1px solid #ccc' }}
    ></svg>
  );
};

export default BarChart;
