package com.javaguid.springBootbackend.Respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javaguid.springBootbackend.model.Employee;

@Repository
public interface Respository extends JpaRepository<Employee, Long>{

}
