/* Main file to render '/'
   axios for connecting the Java Spring Boot
   filmName Search Bar
   Mostly for redirecting to other pages
   useHistory is for redirecting
*/
import React, { useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Form() {
  const [film, setFilm] = useState('');
  const history = useHistory();
      
  const handleSubmit = (evt) => {
      evt.preventDefault();

      if(film === '')
      {
          alert("Enter Film Name");
      }
      else
      {
        axios.get('http://localhost:8091/getByFilm/' + film).then(response => 
        {
            history.push({
             pathname: '/show',
             state: { data: response.data}});
        });
      }
  }
  const handleDocSubmit = (evt) => {
      evt.preventDefault();
      axios.get('http://localhost:8091/getAll').then(response => 
        {
            history.push({
             pathname: '/show',
             state: { data: response.data.content}});
        } );
  }
  const SearchSubmit = (evt) => {
      evt.preventDefault();
      history.push('/search');
  }

  return (
    <div id="container">
      <center>
        <form onSubmit={handleSubmit}>
          <input type="text" value={film} onChange={e => setFilm(e.target.value)} style={{margin:"30px",width:"70%",height:"35px"}} placeholder="Search by film name..."/>
          <button type="submit" name="submit" className="btn btn-outline-primary">Search</button>
          <hr/>
        </form>
      
        <form onSubmit={handleDocSubmit}>
          <br/><br/><h4>View Documents</h4>
          <button type="submit" name="submit" className="btn btn-outline-primary">View</button>
        </form>
     

      
        <form onSubmit={SearchSubmit}>
          <br/><br/><h4>Customized Search Engine</h4>
          <button type="submit" name="submit" className="btn btn-outline-primary">View</button>
        </form>
     
      </center>
    </div>
  );
}

export default Form;