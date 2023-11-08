import * as d3 from "d3";
import { useEffect } from "react";

import './Chart.css'
const Chart = () => {
    useEffect(()=>{
       // Sample data
    const data = [
        { date: 1, value: 12},
        { date: 2, value: 14 },
        { date: 3, value: 16 },
        { date: 4, value: 20},
        { date: 5, value: 24 },
        { date: 6, value: 26 },
        { date: 7, value: 12},
        { date: 8, value: 14 },
        { date: 9, value: 16 },
        { date: 10, value: 22},
        { date: 11, value: 24 },
        { date: 12, value: 26 },
        { date: 13, value: 32},
        { date: 14, value: 34 },
        { date: 15, value: 36 },
        { date: 16, value: 32},
        { date: 17, value: 44 },
        { date: 18, value: 46 },
        { date: 19, value: 42},
        { date: 20, value: 14 },
        { date: 21, value: 16 },
        { date: 22, value: 12},
        { date: 23, value:14 },
        { date: 24, value: 16 },
      
      ];
  
      // Set up the SVG element
      const width = 580;
      const height = 250;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  
      const svg = d3.select('#line-chart')
        .attr('width', width)
        .attr('height', height);
  
      // Define scales for X and Y axes
      const xScale = d3.scaleTime()
        // .domain(d3.extent(data, d => d.date))
        .domain([9,18])
        .range([margin.left, width - margin.right]);
        // .range([height - margin.bottom, margin.top]);

  
      const yScale = d3.scaleLinear()
        // .domain([0, d3.max(data, d => d.value)]) // Y-axis domain based on data
        .domain([10,50])

        .range([height - margin.bottom, margin.top]);
  
      // Create the X-axis
      const xAxis = d3.axisBottom(xScale);
      svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis);
  
      // Create the Y-axis
      // const yAxis = d3.axisLeft(yScale);
      // svg.append('g')
      //   .attr('transform', `translate(${margin.left}, 0)`)
      //   .call(yAxis);
  
      // Create the line generator
      const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.value))
        .curve(d3.curveCardinal); 
  
      // Append the line to the SVG
      svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'green')
        .attr('stroke-width', 3)
        .attr('d', line);

        svg.append("g")
        .style("font-sie","50px")
        .call(g=>g.select(".domain").remove())
  }, []);
  return (
    <div className="line-chart-container">
    <svg id="line-chart"></svg>
  </div>
  );
};

export default Chart;
