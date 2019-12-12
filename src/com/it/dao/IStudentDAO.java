package com.it.dao;

import java.util.List;

import com.it.entity.Student;

public interface IStudentDAO {
	public boolean save(Student student);
	
	public boolean update(Student student);
	
	public boolean delete(int id);
	
	public Student findById(int id);
	
	public List<Student> findAll();
	
	public Student findByNameAndPwd(String name,String pwd);

}
