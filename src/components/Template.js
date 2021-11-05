/* This is for rendering the documents */
import React, { Component } from 'react';
import HeaderDocument from './HeaderDocument';

class Template extends Component {

	render() {
		
		return (
			<div>

				<HeaderDocument/>
				{
					this.props.location.state.data.length===0? 
					
					  <h1>No Documents Found!!!</h1>:
					

    			<table id="document">
	    			<thead>
		    			   	<tr>
		    			   		<th> No </th>
		    			   	    <th> Film </th>
		    			   		<th> Genre </th>
		    			   		<th> Lead Studio </th>
		    			   		<th> Year </th>
		    			   		<th>Audience_score</th>
							 	<th>Rotten_Tomatoes</th>
							 	<th>Profitability</th>
							 	<th>Worldwide_Gross</th>
		    			   	</tr>
		    		</thead>
    			   	<tbody>
    			   	{
    			   		    
    			   		    this.props.location.state.data.map(
    			   				(Movie,index) =>
    			   				<tr key = {index}>
    			   				    <td>{index+1}</td>
    			   					<td>{Movie.film}</td>
    			   					<td>{Movie.genre}</td>
    			   					<td>{Movie.leadStudio}</td>
    			   					<td>{Movie.year}</td>
    			   					<td>{Movie.audienceScore}</td>
    			   					<td>{Movie.rottenTomatoes}</td>
    			   					<td>{Movie.profitability}</td>
    			   					<td>{Movie.worldwideGross}</td>
    			   				</tr>
    			   			)
    			   	}
    			   	</tbody>
    			   	
    			</table>
    		}
    		</div>
		);
	}
}
export default Template;