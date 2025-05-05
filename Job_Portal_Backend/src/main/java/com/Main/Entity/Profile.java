package com.Main.Entity;

import java.util.Base64;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.Main.DTO.Certification;
import com.Main.DTO.Experience;
import com.Main.DTO.ProfileDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="profiles")
public class Profile {
  @Id
  private Long id;
private String name;
  private String email;
  private String jobTitle;
  private String company;
  private String location;
  private byte[] picture;
  private Long totalExp;
  private String about;
  private List<String> skills;
  private List<Experience> experiences;
  private List<Certification> certifications;
  private List<Long> savedJobs;
  
  public ProfileDTO toDTO()
  {
	  
	return new ProfileDTO(this.id,this.name,this.email,this.jobTitle,this.company,this.location,this.picture!=null?Base64.getEncoder().encodeToString(this.picture):null,this.totalExp,this.about,this.skills,this.experiences,this.certifications,this.savedJobs);
	  
  }
  
}
