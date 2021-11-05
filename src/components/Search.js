/*
  This is for Customized Search
*/

import React, { useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Search() {

  const [data,setData] = useState({
    genre:'*',
    leadStudio:'*',
    year_start:"2005",
    year_end:"2020",
    start:"0",
    end:"100",
    rotten_start:"1",
    rotten_end:"100",
    profit_start:"0",
    profit_end:"100",
    sort:"ASC",
    sorting:"year"
  });

  const {genre,leadStudio,year_start,year_end,start,end,rotten_start,rotten_end,profit_start,profit_end,sort,sorting} = data;

  const changeHandler = e =>
  {
    setData({...data,[e.target.name]:e.target.value})
  }

  const history = useHistory();
  const homePageHandler = (evt) => {
        evt.preventDefault();
        history.push('/');
      }

  const Handler = (evt) => {
      evt.preventDefault();
        if(year_start && year_end && start && end && rotten_start && rotten_end && profit_start && profit_end)
        {
            const path = 'http://localhost:8091/get/' + genre + '/' + leadStudio + '/' + year_start + '/' + year_end + '/' + start + '/' + end + '/' + rotten_start + '/' + rotten_end + '/' + profit_start + '/' + profit_end + '/' + sort +  '/' + sorting;
            axios.get(path).then(response => 
            {
                history.push({
                 pathname: '/show',
                 state: { data: response.data}});
            });
        }
        else
        {
          alert("Enter Values");
        }
  }




  return (
    <div id="container2">
      <center>
      <form onSubmit={homePageHandler} style={{marginLeft:"-600px"}}>
          <button type="submit" name="submit" className="btn btn-outline-primary">Home Page</button>
      </form><br/>
      <form onSubmit={Handler}>
        <label>Genre </label>
        <select name="genre" onChange={changeHandler} value={genre} style={{marginRight:"70px"}}>
            <option value="">Select</option>
            <option value="comedy">Comedy</option>
            <option value="romance">Romance</option>
            <option value="drama">Drama</option>
            <option value="animation">Animation</option>
            <option value="action">Action</option>
            <option value="comdy">Comdy</option>
            <option value="fantasy">Fantasy</option>
            <option value="romence">Romence</option>
        </select>
        <label>Lead Studio</label>
            <select name="leadStudio" onChange={changeHandler} value={leadStudio}>
              <option value="">Select</option>
              <option value="independent">Independent</option>
              <option value="warner bros">Warner Bros</option>
              <option value="disney">Disney</option>
              <option value="fox">Fox</option>
              <option value="universal">Universal</option>
              <option value="summit">Summit</option>
              <option value="paramount">Paramount</option>
              <option value="sony">Sony</option>
              <option value="The Weinstein Company">The Weinstein Company</option>
              <option value="20th Century Fox">20th Century Fox</option>
              <option value="lionsgate">Lionsgate</option>
              <option value="cbs">Cbs</option>
              <option value="new line">New Line</option>
            </select>
            <br/>
            <br/>


        <table>
        <thead>
        <tr>
        <td><label>Category</label></td>
        <td><label>From</label></td>
        <td><label>To</label></td>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><label>Year</label></td>
        <td><input type="number" min="2005" max="2020"  name="year_start"  onChange={changeHandler} value={year_start}/></td>
        <td><input type="number" min="2005" max="2020"  name="year_end"  onChange={changeHandler} value={year_end}/></td>
        </tr>

        <tr>
        <td><label>Audience Score</label></td>
        <td><input type="number" min="0" max="100" name="start"  onChange={changeHandler} value={start}/></td>
        <td><input type="number" min="0" max="100" name="end"  onChange={changeHandler} value={end}/></td>
        </tr>
        
        <tr>
        <td><label>Rotten Tomatoes</label></td>
        <td><input type="number" min="1" max="100"  name="rotten_start"  onChange={changeHandler} value={rotten_start}/></td>
        <td><input type="number" min="1" max="100"  name="rotten_end"  onChange={changeHandler} value={rotten_end}/></td>
        </tr>
        
        <tr>
        <td><label>Profitability</label></td>
        <td><input type="number" min="0" max="100"  name="profit_start"  onChange={changeHandler} value={profit_start}/></td>
        <td><input type="number" min="0" max="100"  name="profit_end"  onChange={changeHandler} value={profit_end}/></td>
        </tr>
        </tbody>
        </table>
    




        <label>Sort By</label>
        <select name="sorting" value={sorting} onChange={changeHandler}>
          <option value="year">Year</option>
          <option value="audienceScore">Audience score</option>
          <option value="rottenTomatoes">Rotten Tomatoes</option>
          <option value="profitability">Profitability</option>
        </select>
        
        <select name="sort" onChange={changeHandler} value={sort} style={{margin:"10px"}}>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
        </select>
        <br/>

        <button type="submit" name="submit" className="btn btn-outline-primary" style={{margin:"10px"}}>Search</button>
    </form>
    </center>
    </div>
  );
}

export default Search;