package com.Main.DTO;

import java.util.Base64;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.Main.Entity.Profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDTO {

	  private Long id;
	  private String name; 
	  private String email;
	  private String jobTitle;
	  private String company;
	  private String location;
	  private String picture;
	  private Long totalExp;
	  private String about;
	  private List<String> skills;
	  private List<Experience> experiences;
	  private List<Certification> certifications;
	  private List<Long> savedJobs;
	  public Profile toEntity()
	  {
		  
		return new Profile(this.id,this.name,this.email,this.jobTitle,this.company,this.location,this.picture != null ? Base64.getDecoder().decode(this.picture) : null,this.totalExp,this.about,this.skills,this.experiences,this.certifications,this.savedJobs);
		  
	  }
	  
}
