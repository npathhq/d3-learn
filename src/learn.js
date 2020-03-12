import * as d3 from 'd3';

console.log('learn.js is loaded...');

const svg = d3
  .select('.application')
  .append('svg')
  .classed('svg', true);

const circle = svg.append('circle')
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('r', 16)
  .style('fill', '#847689');
