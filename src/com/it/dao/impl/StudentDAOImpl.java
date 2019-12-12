package com.it.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.it.dao.IStudentDAO;
import com.it.db.DBMananger;
import com.it.entity.Student;

public class StudentDAOImpl implements IStudentDAO{

	@Override
	public boolean save(Student student) {
		
		return false;
	}

	@Override
	public boolean update(Student student) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Student findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Student> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Student findByNameAndPwd(String name, String pwd) {
		Student student = null;
		
		String sql = "select s_id, s_userName,s_passWord,s_sex,s_grade,s_subject,"
				+ "s_address,s_mobile from student where s_userName = '"+name+"' and s_passWord = '"+pwd+"'";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		
		try {
			if(rs.next()){
				
				int s_id = rs.getInt(1);
				String s_userName  = rs.getString(2);
				String s_passWord = rs.getString(3);
				boolean s_sex = rs.getBoolean(4);
				String s_grade = rs.getString(5);
				String s_subject = rs.getString(6);
				String s_address = rs.getString(7);
				String s_mobile = rs.getString(8);
				student = new Student(s_id, s_userName, s_passWord, s_sex, s_grade, s_subject, s_address, s_mobile);
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return student;
	}

}
