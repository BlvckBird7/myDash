import React, {useState, useRef, useEffect} from 'react'
import * as d3 from 'd3'


const randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));

const Chart = () => {
    const [data, setData] = useState(randomArray(7,480));
    const svgRef = useRef();


    useEffect(() =>{
        const w  = 700;
        const h = 500;
        const svg = d3.select(svgRef.current)
        .attr("width", w)
        .attr("height", h)
        .style('overflow', 'visible')
        .style('margin-top', '100px')


        const xScale = d3.scaleBand()
        .domain(data.map((val, i) =>i))
        .range([0, w])
        .padding(0.5)
        const yScale = d3.scaleLinear()
        .domain([0,h])
        .range([h, 0])

        const xAxis = d3.axisBottom(xScale)
        .ticks(data.length);
        const yAxis = d3.axisLeft(yScale)
        .ticks(5)
        svg.append('g')
        .call(xAxis)
        .attr("transform", `translate(0, ${h})`)
        svg.append('g')
        .call(yAxis)

        svg.selectAll('.bar')
        .data(data)
        .join('rect')
        .attr('x', (v,i)=> xScale(i))
        .attr('y', yScale)
        .attr("width", xScale.bandwidth())
        .attr("height", val=> h - yScale(val))

    })

  return (
    <div className='chart'>
        <svg ref={svgRef} onClick={()=>{setData([data + 20])}}>

        </svg>
    </div>
  )
}

export default Chart