package com.Main.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.DTO.ApplicantDTO;
import com.Main.DTO.Application;
import com.Main.DTO.ApplicationStatus;
import com.Main.DTO.JobDTO;
import com.Main.DTO.JobStatus;
import com.Main.DTO.NotificationDTO;
import com.Main.Entity.Applicant;
import com.Main.Entity.Job;
import com.Main.Exception.JobPortalException;
import com.Main.Repository.JobRepository;
import com.Main.Utility.Utilities;

import jakarta.validation.Valid;

@Service("jobService")
public class JobServiceImpl implements JobService{
	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	Utilities utill;
	@Autowired
	private NotificationService notificationService;

	@Override
	public JobDTO postJob( JobDTO jobDTO) throws JobPortalException {
		if(jobDTO.getId()==0) {
	jobDTO.setId(utill.getNextSequence("jobs"));
	jobDTO.setPostTime(LocalDateTime.now());
	NotificationDTO notiDTO=new NotificationDTO();
	notiDTO.setAction("Job Posted");
	notiDTO.setMessage("Job Posted Successfully For  "+jobDTO.getJobTitle()+" at "+jobDTO.getCompany());
	notiDTO.setUserId(jobDTO.getPostedBy());
	notiDTO.setRoute("/posted-jobs/"+jobDTO.getId());
		notificationService.sendNotification(notiDTO);
	

	}else {
		Job job=jobRepository.findById(jobDTO.getId()).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
		
		if(job.getJobStatus().equals(JobStatus.DRAFT)||job.getJobStatus().equals(JobStatus.CLOSED))jobDTO.setPostTime(LocalDateTime.now());
	}
	return jobRepository.save(jobDTO.toEntity()).toDTO();
	}

	@Override
	public List<JobDTO> getAllJobs() throws JobPortalException {
		return jobRepository.findAll().stream()
				.map((x)->x.toDTO()).toList();
	}
 
	@Override
	public JobDTO getJob(Long id)throws JobPortalException {
		
		return jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND")).toDTO();
	}

	@Override
	public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException {
		Job job=jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
		List<Applicant>applicants=job.getApplicants();
		if(applicants==null)applicants=new ArrayList<>();
		if(applicants.stream().filter((x)->x.getApplicantId()==applicantDTO.getApplicantId()).toList().size()>0)throw new JobPortalException("JOB_APPLIED_ALREADY");
		applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);
		applicants.add(applicantDTO.toEntity());
		job.setApplicants(applicants);
		jobRepository.save(job);
	}

	@Override
	public List<JobDTO> getJobsPostedBy(Long id) {
		return jobRepository.findByPostedBy(id).stream()
				.map((x)->x.toDTO()).toList();
	}

	@Override
	public void changeAppStatus(Application application) throws JobPortalException {
		Job job=jobRepository.findById(application.getId()).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));
		List<Applicant>applicants=job.getApplicants().stream().map((x)->{
			if(application.getApplicantId()==x.getApplicantId()) {
				x.setApplicationStatus(application.getApplicationStatus());
				if(application.getApplicationStatus().equals(ApplicationStatus.INTERVIEWING))
					{
					x.setInterviewTime(application.getInterviewTime());
					NotificationDTO notiDTO=new NotificationDTO();
					notiDTO.setAction("Interview Scheduled");
					notiDTO.setMessage("Interview scheduled for "+job.getJobTitle()+ " on "+application.getInterviewTime());
					notiDTO.setUserId(application.getApplicantId());
					notiDTO.setRoute("/job-history");
					try {
						notificationService.sendNotification(notiDTO);
					} catch (JobPortalException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					}else if(application.getApplicationStatus().equals(ApplicationStatus.REJECTED))
					{
					x.setInterviewTime(application.getInterviewTime());
					NotificationDTO notiDTO=new NotificationDTO();
					notiDTO.setAction("Application Rejected");
					notiDTO.setMessage("Your Application is rejected for : "+job.getJobTitle() +" at "+job.getCompany());
					notiDTO.setUserId(application.getApplicantId());
					notiDTO.setRoute("/job-history");
					try {
						notificationService.sendNotification(notiDTO);
					} catch (JobPortalException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					}
			}
			return x;
		}).toList();
		job.setApplicants(applicants);
		jobRepository.save(job);
	}

}
