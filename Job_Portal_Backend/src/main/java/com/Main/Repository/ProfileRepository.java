package com.Main.Repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.Entity.Profile;

public interface ProfileRepository extends MongoRepository<Profile,Long> {

}
