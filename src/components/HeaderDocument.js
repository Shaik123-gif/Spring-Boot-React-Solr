/* This is for Template Header
   Mostly for navigating buttons
*/
import { useHistory } from "react-router-dom";

function HeaderDocument()
{
	    const history = useHistory();

	    const homePageHandler = (evt) => {
	      evt.preventDefault();
	      history.push('/');
	    }

	    const SearchHandler = (evt) => {
	      evt.preventDefault();
	      history.push('/search');
	    }
	    return(
	    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<ul className="navbar-nav">
					    <li className="nav-item">
					        <form onSubmit={SearchHandler}>
								<button type="submit" name="submit" className="btn btn-outline-success">Customize Search</button>
							</form>
					    </li>
					    <li className="nav-item">
					       <form onSubmit={homePageHandler}>
								<button type="submit" name="submit" className="btn btn-outline-success">Home Page</button>
							</form>
					    </li>
				    </ul> 
				    <h3 style={{marginLeft:"450px"}}>Documents List</h3>
				 </nav>
	    )
}
export default HeaderDocument;