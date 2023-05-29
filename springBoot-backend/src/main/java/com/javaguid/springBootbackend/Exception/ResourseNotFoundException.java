package com.javaguid.springBootbackend.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourseNotFoundException {
	
	private static final long serialVersionId=1L;
	
	public  ResourseNotFoundException(String message) {
		super();
		
	}

}
