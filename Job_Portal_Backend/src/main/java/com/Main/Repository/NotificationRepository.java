package com.Main.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Main.DTO.NotificationStatus;
import com.Main.Entity.Notification;

public interface NotificationRepository extends MongoRepository<Notification, Long>{
	public List<Notification>findByUserIdAndStatus(Long id,NotificationStatus status);
}
