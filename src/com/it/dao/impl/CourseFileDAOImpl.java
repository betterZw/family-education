package com.it.dao.impl;

import java.util.List;

import com.it.dao.ICourseFileDAO;
import com.it.entity.CourseFile;

public class CourseFileDAOImpl implements ICourseFileDAO{

	@Override
	public boolean save(CourseFile courseFile) {
		// TODO Auto-generated method stub
		// c_id INT identity NOT NULL PRIMARY KEY, -- primary key column
		// c_teachId INT NOT NULL,
		// c_path VARCHAR(512) NOT NULL,
		// c_name VARCHAR(128) NOT NULL,
		// c_isDisplay BIT,
		// c_date DATETIME,
		// c_size FLOAT,

		String sql = "insert into CourseFile(c_teachId,c_path,c_name,c_isDisplay,c_date,c_size)"
				+ " values('"+courseFile.getC_teachId()+"','"+courseFile.getC_path()+"',"+courseFile.getC_name()+",'"+
				courseFile.getC_isDisplay()+"',"
						+ "'"+courseFile.getC_date()+"','"+courseFile.getC_size()+"')";
		DBMananger dbMananger = new DBMananger();
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public boolean update(CourseFile courseFile) {
		// TODO Auto-generated method stub 
		return false;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		String sql = "delete from CourseFile where c_id="+id+";";
		DBMananger dbMananger = new DBMananger();
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public CourseFile findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CourseFile> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

}
