package com.it.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.it.dao.ITeacherDAO;
import com.it.db.DBMananger;
import com.it.entity.Teacher;

public class TeacherDAOImpl implements ITeacherDAO{

	@Override
	public boolean save(Teacher teacher) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Teacher teacher) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Teacher findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Teacher> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Teacher findByNameAndPwd(String name, String pwd) {
		Teacher teacher = null;
		String sql = "select t_id,t_userName,t_passWord,t_sex,t_subject,t_grade "
				+ "from teacher where t_userName = '"+name+"' and t_passWord = '"+pwd+"'";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			if(rs.next()){
				
				int t_id = rs.getInt(1);
				String t_userName = rs.getString(2);
				String t_passWord = rs.getString(3);
				boolean t_sex = rs.getBoolean(4);
				String t_subject = rs.getString(5);
				String t_grade = rs.getString(6);
				teacher = new Teacher(t_id, t_userName, t_passWord, t_sex, t_subject, t_grade);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return teacher;
	}

	@Override
	public List<Teacher> findByGradeAndSubject(String grade, String subject) {
		List<Teacher> teachers = new ArrayList<Teacher>();
		Teacher teacher = null;
		String sql  = "select t_id,t_userName,t_passWord,t_sex,t_subject,t_grade"
				+ " from teacher where t_grade='"+grade+"' and t_subject = '"+subject+"'";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				int t_id =rs.getInt(1);
				String t_userName = rs.getString(2);
				String t_passWord = rs.getString(3);
				boolean t_sex = rs.getBoolean(4);
				String t_subject = rs.getString(5);
				String t_grade = rs.getString(6);
				
				teacher = new Teacher(t_id, t_userName, t_passWord, t_sex, t_subject, t_grade);
				teachers.add(teacher);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		return teachers;
	}

}
