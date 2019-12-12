package com.it.dao;

import java.util.List;

import com.it.entity.Teacher;

public interface ITeacherDAO {
	public boolean save(Teacher teacher);
	
	public boolean delete(int id);
	
	public boolean update(Teacher teacher);
	
	public Teacher findById(int id);
	
	public List<Teacher> findAll();
	
	public Teacher findByNameAndPwd(String name,String pwd);
	
}
