package com.Main.Service;

import java.util.List;

import com.Main.DTO.ApplicantDTO;
import com.Main.DTO.Application;
import com.Main.DTO.JobDTO;
import com.Main.DTO.ResponseDTO;
import com.Main.Exception.JobPortalException;

import jakarta.validation.Valid;

public interface JobService {

	public  JobDTO postJob(@Valid JobDTO jobDTO) throws JobPortalException;

	public List<JobDTO> getAllJobs()throws JobPortalException;

	public JobDTO getJob(Long id) throws JobPortalException;

	public void applyJob(Long id, ApplicantDTO applicantDTO)throws JobPortalException;

	public List<JobDTO> getJobsPostedBy(Long id);

	public void changeAppStatus(Application application)throws JobPortalException;
	
	

}
