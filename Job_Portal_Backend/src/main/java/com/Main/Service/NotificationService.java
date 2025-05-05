package com.Main.Service;

import java.util.List;

import com.Main.DTO.NotificationDTO;
import com.Main.Entity.Notification;
import com.Main.Exception.JobPortalException;

public interface NotificationService {
	public void sendNotification(NotificationDTO notificationDTO)throws JobPortalException;
	public List<Notification>getUnreadNotifications(Long userId);
	public void readNotifications(Long id)throws JobPortalException;
}
