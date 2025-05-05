package com.Main.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
public class AuthenticationResponse {
	private final String jwt;

	public AuthenticationResponse(String jwt) {
		this.jwt=jwt;
	}
}
