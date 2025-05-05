package com.Main.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.DTO.ProfileDTO;
import com.Main.Entity.Profile;
import com.Main.Exception.JobPortalException;
import com.Main.Repository.ProfileRepository;
import com.Main.Utility.Utilities;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService{

	@Autowired
	private ProfileRepository profileRepository;

	@Override
	public Long createProfile(String email) throws JobPortalException {
		Profile profile=new Profile();
		profile.setId(Utilities.getNextSequence("profiles"));
		profile.setEmail(email);
		profile.setSkills(new ArrayList<>());
		profile.setExperiences(new ArrayList<>());
		profile.setCertifications(new ArrayList<>());
		profileRepository.save(profile);
		return profile.getId();
		
	}

	@Override
	public ProfileDTO getProfile(Long id) throws JobPortalException {
		// TODO Auto-generated method stub
		
		return profileRepository.findById(id).orElseThrow(()-> new JobPortalException("PROFILE_NOT_FOUND")).toDTO();
	}

	@Override
	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException {
		// TODO Auto-generated method stub
		 profileRepository.findById(profileDTO.getId()).orElseThrow(()-> new JobPortalException("PROFILE_NOT_FOUND"));
		 profileRepository.save(profileDTO.toEntity());
		 return profileDTO;
	}

	@Override
	public List<ProfileDTO> getAllProfiles() {
		return profileRepository.findAll().stream().map((x)->x.toDTO()).toList();
	}
	
	
	

}
