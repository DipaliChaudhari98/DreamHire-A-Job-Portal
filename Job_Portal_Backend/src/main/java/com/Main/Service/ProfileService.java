package com.Main.Service;

import java.util.List;

import com.Main.DTO.ProfileDTO;
import com.Main.Exception.JobPortalException;

public interface ProfileService {

	public Long createProfile(String email) throws JobPortalException;
	public ProfileDTO getProfile(Long id) throws JobPortalException;
	public ProfileDTO updateProfile(ProfileDTO id) throws JobPortalException;
	public List<ProfileDTO> getAllProfiles();

}
