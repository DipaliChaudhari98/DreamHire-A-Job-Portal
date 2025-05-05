package com.Main.Service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.DTO.NotificationDTO;
import com.Main.DTO.NotificationStatus;
import com.Main.Entity.Notification;
import com.Main.Exception.JobPortalException;
import com.Main.Repository.NotificationRepository;
import com.Main.Utility.Utilities;
import com.fasterxml.jackson.core.util.JsonRecyclerPools.NonRecyclingPool;

@Service("notificationService")
public class NotificationServiceImpl implements NotificationService {

	@Autowired
	private NotificationRepository notificationRepository;

	@Override
	public void sendNotification(NotificationDTO notificationDTO) throws JobPortalException {
		
		notificationDTO.setId(Utilities.getNextSequence("notification"));
		notificationDTO.setStatus(NotificationStatus.UNREAD);
		notificationDTO.setTimestamp(LocalDateTime.now());
		notificationRepository.save(notificationDTO.toEntity());
		
	}

	@Override
	public List<Notification> getUnreadNotifications(Long userId) {
		return notificationRepository.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
				
	}

	@Override
	public void readNotifications(Long id) throws JobPortalException {
		Notification noti=notificationRepository.findById(id).orElseThrow(()->new JobPortalException("No Notifications Found"));
		noti.setStatus(NotificationStatus.READ);
		notificationRepository.save(noti);
	}
}
