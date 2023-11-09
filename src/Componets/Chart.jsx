import * as d3 from "d3";
// import { timeFormat } from "d3";

import { useEffect } from "react";

import {chartData} from '../assets/Data'

import "./Chart.css";
const Chart = ({value}) => {

  console.log("value",value);
  console.log(chartData);

  const Data=chartData.filter((item)=>item.month==value)
  console.log("AData",Data);
  useEffect(() => {
    // Sample data
    
    // Set up the SVG element
    const width = 580;
    const height = 250;
    const margin = { top: 20, right: 40, bottom: 30, left: 40 };

    const svg = d3
      .select("#line-chart")
      .attr("width", width)
      .attr("height", height);
   
      svg.selectAll("*").remove();


      // const timeFormatTicks = timeFormat("%H"); // Two-digit hours

    // Define scales for X and Y axes
    const xScale = d3
      .scaleLinear()
      // .domain(d3.extent(data, d => d.date))
      .domain([9, 18])
      .range([margin.left, width - margin.right]);
    // .range([height - margin.bottom, margin.top]);

    const yScale = d3
      .scaleLinear()
      // .domain([0, d3.max(data, d => d.value)]) // Y-axis domain based on data
      .domain([10, 60])

      .range([height - margin.bottom, margin.top]);

   
   

    //  const xAxis = d3.axisBottom(xScale)
    const xAxis = d3.axisBottom(xScale).ticks(10).tickFormat(d3.format("02"));

    // .tickFormat(timeFormatTicks);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis)
      .selectAll("text") // Select all tick labels
      .style("font-size", "14px")
      .style("color", "#cacdce")

      svg.selectAll(".tick line").remove();


    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
      .curve(d3.curveCardinal);

    // Append the line to the SVG
    svg
      .append("path")
      .datum(Data[0].data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 3)
      .attr("d", line);

    svg
      .append("g")
      .style("font-sie", "50px")
      .call((g) => g.select(".domain").remove());
  }, [Data]);
  return (
    <div className="line-chart-container">
      <svg id="line-chart"></svg>
    </div>
  );
};

export default Chart;
