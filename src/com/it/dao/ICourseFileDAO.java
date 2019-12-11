package com.it.dao;

import java.util.List;

import com.it.entity.CourseFile;

public interface ICourseFileDAO {
	public boolean save(CourseFile courseFile);
	
	public boolean update(CourseFile courseFile);
	
	public boolean delete(int id);
	
	public CourseFile findById(int id);
	
	public List<CourseFile> findAll();

}
