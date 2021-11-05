package com.shaik.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.shaik.model.Movie;
import com.shaik.repository.MovieRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class MovieController 
{
	@Autowired
	private MovieRepository repository;
	
	@RequestMapping("/getAll")
	public Iterable<Movie> getAll()
	{
		return repository.findAll();
	}
	
	@GetMapping("/getByFilm/{film}")
	public Iterable<Movie> getByFilm(@PathVariable String film)
	{
		return repository.findAllByFilm(film);
	}
	
	@RequestMapping("/get/{genre}/{leadStudio}/{year_start}/{year_end}/{start}/{end}/{rotten_start}/{rotten_end}/{profit_start}/{profit_end}/{sort}/{sorting}")
	public Iterable<Movie> CustomizeSearch(@PathVariable(name="genre") String genre,
			@PathVariable(name="leadStudio") String leadStudio,
			@PathVariable(name="year_start") Long year_start,
			@PathVariable(name="year_end") Long year_end,
			@PathVariable(name="start") Long start,
			@PathVariable(name="end") Long end,
			@PathVariable(name="rotten_start") Long rotten_start,
			@PathVariable(name="rotten_end") Long rotten_end,
			@PathVariable(name="profit_start") Double profit_start,
			@PathVariable(name="profit_end") Double profit_end,
	        @PathVariable(name="sort") String sort,
	        @PathVariable(name="sorting") String sorting)
	{
		Direction x;
		x = sort.compareTo("ASC")==0?Sort.Direction.ASC:Sort.Direction.DESC;
		Iterable<Movie> movies = repository.findByGenreAndLeadStudioAndYearBetweenAndAudienceScoreBetweenAndRottenTomatoesBetweenAndProfitabilityBetween(genre,leadStudio,year_start,year_end,start,end,rotten_start,rotten_end,profit_start,profit_end,Sort.by(x,sorting));
		return movies;
	}
	
}
