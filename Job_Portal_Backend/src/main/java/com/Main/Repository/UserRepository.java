package com.Main.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.Entity.User;

public interface UserRepository extends MongoRepository<User, Long> {

	public Optional<User> findByEmail(String email);
}
