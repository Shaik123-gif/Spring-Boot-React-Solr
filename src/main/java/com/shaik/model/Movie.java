package com.shaik.model;

import org.apache.solr.client.solrj.beans.Field;
import org.springframework.data.annotation.Id;
import org.springframework.data.solr.core.mapping.SolrDocument;

@SolrDocument(collection = "Movie")
public class Movie 
{
	  @Id
	  @Field
	  private String film;
	  
	  @Field
	  public long audienceScore;
	  
	  @Field
	  public String genre;
	  
	  @Field
	  public String leadStudio;
	  
	  @Field
	  public double profitability;
	  
	  @Field
	  public long rottenTomatoes;
	  
	  @Field
	  public String worldwideGross;
	  
	  @Field
	  public long year;

	public String getFilm() {
		return film;
	}

	public void setFilm(String film) {
		this.film = film;
	}

	public long getAudienceScore() {
		return audienceScore;
	}

	public void setAudienceScore(long audienceScore) {
		this.audienceScore = audienceScore;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getLeadStudio() {
		return leadStudio;
	}

	public void setLeadStudio(String leadStudio) {
		this.leadStudio = leadStudio;
	}

	public double getProfitability() {
		return profitability;
	}

	public void setProfitability(double profitability) {
		this.profitability = profitability;
	}

	public long getRottenTomatoes() {
		return rottenTomatoes;
	}

	public void setRottenTomatoes(long rottenTomatoes) {
		this.rottenTomatoes = rottenTomatoes;
	}

	public String getWorldwideGross() {
		return worldwideGross;
	}

	public void setWorldwideGross(String worldwideGross) {
		this.worldwideGross = worldwideGross;
	}

	public long getYear() {
		return year;
	}

	public void setYear(long year) {
		this.year = year;
	}

	public Movie(String film, long audienceScore, String genre, String leadStudio, double profitability,
			long rottenTomatoes, String worldwideGross, long year) {
		super();
		this.film = film;
		this.audienceScore = audienceScore;
		this.genre = genre;
		this.leadStudio = leadStudio;
		this.profitability = profitability;
		this.rottenTomatoes = rottenTomatoes;
		this.worldwideGross = worldwideGross;
		this.year = year;
	}

	public Movie()
	{
		
	}
		
}
