package com.shaik.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.solr.repository.SolrCrudRepository;
import com.shaik.model.Movie;

public interface MovieRepository extends SolrCrudRepository<Movie,String>
{

	Iterable<Movie> findAllByFilm(String film);

	Iterable<Movie> findByGenreAndLeadStudioAndYearBetweenAndAudienceScoreBetweenAndRottenTomatoesBetweenAndProfitabilityBetween(
			String genre, String leadStudio, long year_start, long year_end, long start, long end, long rotten_start,
			long rotten_end, double profit_start, double profit_end, Sort by);
	
}
