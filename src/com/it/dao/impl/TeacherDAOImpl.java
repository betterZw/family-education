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
		int sex = 1;
		if(teacher.isT_sex()){
			sex = 0;
		}
		
		String sql = "insert into Teacher(t_userName,t_passWord,t_sex,t_subject,t_grade)"
				+ " values('"+teacher.getT_userName()+"','"+teacher.getT_passWord()+"',"+sex+","
						+ "'"+teacher.getT_subject()+"','"+teacher.getT_grade()+"')";
		DBMananger dbMananger = new DBMananger();
		return (dbMananger.update(sql) ==1);
	}

	@Override
	public boolean delete(int id) {
		String sql = "delete from Teacher where t_id = "+id+"";
		DBMananger dbMananger = new DBMananger();
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public boolean update(Teacher teacher) {
		int sex = 1;//Ä¬ÈÏÊÇÄÐ
		if(teacher.isT_sex()){
			sex = 0;
		}
		String sql = "update Teacher set t_userName = '"+teacher.getT_userName()+"',"
				+ " t_passWord = '"+teacher.getT_passWord()+"',t_sex ="+sex+" ,"
						+ "t_subject = '"+teacher.getT_subject()+"',t_grade ='"+teacher.getT_grade()+"'"
								+ "where t_id = "+teacher.getT_id()+"";
		DBMananger dbMananger = new DBMananger();
		
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public Teacher findById(int id) {
		Teacher teacher = null;
		String sql = "select t_id,t_userName,t_passWord,t_sex,t_subject,t_grade from teacher where t_id = "+id+"";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			if(rs.next()){
				int t_id =rs.getInt(1);
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
	public List<Teacher> findAll() {
		List<Teacher> teachers = new ArrayList<Teacher>();
		Teacher teacher = null;
		String sql = "select t_id,t_userName,t_passWord,t_sex,t_subject,t_grade from teacher";
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
