package com.Main.Repository;

import java.time.LocalDateTime;
import java.util.List;

import java.util.Optional;
import java.util.function.Function;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;

import com.Main.Entity.OTP;



public interface OTPReposiotry extends MongoRepository<OTP,String>
{
	List<OTP> findByCreationTimeBefore(LocalDateTime expiry);	
}
