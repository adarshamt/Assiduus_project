import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { chartData } from '../assets/Data';

const BarChart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 280;
    const margin = { top: 20, right: 30, bottom: 50, left: 60 };

    const data = chartData[0].data;

    const dateRanges = [
      { start: 1, end: 8 },
      { start: 9, end: 16 },
      { start: 17, end: 24 },
      { start: 25, end: 31 },
    ];

    const xScale = d3
      .scaleBand()
      .domain(dateRanges.map((range) => `${range.start}-${range.end}`))
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const barWidth = 0.15 * xScale.bandwidth();

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => {
        const range = dateRanges.find((range) => d.date >= range.start && d.date <= range.end);
        return xScale(`${range.start}-${range.end}`) + xScale.bandwidth() / 2 - barWidth / 2;
      })
      .attr('y', (d) => yScale(d.value))
      .attr('width', barWidth)
      .attr('height', (d) => yScale(0) - yScale(d.value))
      .attr('fill', 'green')
      .attr('rx', 5)
      .attr('ry', 5);

    const xAxis = d3.axisBottom(xScale);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll('text')
      .style('font-size', '14px')
      .style('color', '#cacdce');

    svg.selectAll('.domain').remove();
    svg.selectAll('.tick line').remove();
    svg.append('g').attr('transform', `translate(${margin.left},0)`);
  }, [chartData[0].data]);

  return <svg ref={svgRef} width="500" height="300"></svg>;
};

export default BarChart;
