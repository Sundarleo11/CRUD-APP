package com.javaguid.springBootbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaguid.springBootbackend.Respository.Respository;
import com.javaguid.springBootbackend.model.Employee;

@RestController
@RequestMapping("/api/v1")
public class controller {
	
	@Autowired
	private Respository employees;
	
	@GetMapping("/employees")
	public List<Employee> getAllemployee(){
		 return employees.findAll();
	}

}
