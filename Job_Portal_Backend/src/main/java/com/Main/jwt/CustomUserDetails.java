package com.Main.jwt;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.Main.DTO.AccountType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomUserDetails implements UserDetails {
	private Long id;
	private String username;
	private String name;
	private String password;
	private Long profileId;
	private AccountType accountType;
	private Collection<? extends GrantedAuthority>authorities;

}
