# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh









<!-- // Select all elements with the class 'bar' (there may be none initially)
svg
  .selectAll('.bar')
  .data(data)
  .enter()
  .append('rect') // For each data point without a corresponding '.bar', append a 'rect' element
  .attr('class', 'bar') // Assign the class 'bar' to the rectangle
  .attr('x', (d) => xScale(d.label)) // Set the x-coordinate of the top-left corner of the rectangle
  .attr('y', (d) => yScale(Math.max(d.value1, d.value2))) // Set the y-coordinate of the top-left corner
  .attr('width', xScale.bandwidth()) // Set the width of the rectangle
  .attr('height', (d) => height - margin.bottom - yScale(Math.max(d.value1, d.value2))) // Set the height of the rectangle
  .attr('fill', (d, i) => `url(#gradient${i})`); // Set the fill color of the rectangle using a gradient

// Gradient definitions
const gradient = svg
  .selectAll('.gradient') // Select all elements with the class 'gradient' (there may be none initially)
  .data(data)
  .enter()
  .append('linearGradient') // For each data point without a corresponding '.gradient', append a 'linearGradient' element
  .attr('id', (d, i) => `gradient${i}`) // Assign a unique ID to the gradient
  .attr('gradientUnits', 'userSpaceOnUse') // Set the gradient units to user space
  .attr('x1', 0) // Set the x-coordinate for the start point of the gradient vector
  .attr('y1', (d) => yScale(d.value1)) // Set the y-coordinate for the start point of the gradient vector
  .attr('x2', 0) // Set the x-coordinate for the end point of the gradient vector
  .attr('y2', (d) => yScale(d.value2)); // Set the y-coordinate for the end point of the gradient vector

gradient
  .append('stop') // Append a 'stop' element to the gradient
  .attr('offset', '0%') // Set the offset (position) of the stop at the start of the gradient vector
  .attr('stop-color', colors[0]); // Set the color at the start of the gradient vector

gradient
  .append('stop') // Append another 'stop' element to the gradient
  .attr('offset', '100%') // Set the offset (position) of the stop at the end of the gradient vector
  .attr('stop-color', colors[1]); // Set the color at the end of the gradient vector
 -->