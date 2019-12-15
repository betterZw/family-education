package com.it.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.it.dao.IStudentDAO;
import com.it.db.DBMananger;
import com.it.entity.Student;

public class StudentDAOImpl implements IStudentDAO{

	@Override
	public boolean save(Student student) {
		int sex = 1;
		if(student.isS_sex()){
			sex = 0;
		}
		String sql = "insert into Student(s_userName,s_passWord,s_sex,s_grade,s_subject,s_address,s_mobile)"
				+ " values('"+student.getS_userName()+"','"+student.getS_passWord()+"',"+sex+",'"+student.getS_grade()+"',"
						+ "'"+student.getS_subject()+"','"+student.getS_address()+"','"+student.getS_mobile()+"')";
		DBMananger dbMananger = new DBMananger();
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public boolean update(Student student) {
		int sex = 1;
		if(student.isS_sex()){
			sex = 0;
		}
		String sql = "update Student set s_userName = '"+student.getS_userName()+"',s_passWord = '"+student.getS_passWord()+""
				+ "',s_sex ="+sex+" ,s_grade = '"+student.getS_grade()+"',s_subject = '"+student.getS_subject()+"',"
						+ "s_address = '"+student.getS_address()+"',s_mobile = '"+student.getS_mobile()+"' where s_id = "+student.getS_id()+"";
		DBMananger dbMananger = new DBMananger();
		
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public boolean delete(int id) {
		String sql = "delete from Student where s_id = "+id+"";
		DBMananger dbMananger = new DBMananger();
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public Student findById(int id) {
		Student student = null;
		String sql = "select s_id, s_userName,s_passWord,s_sex,s_grade,s_subject, s_address,s_mobile"
				+ "  from student where s_id = "+id+"";

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
		}finally{
			dbMananger.close();
		}
		return student;
	}

	@Override
	public List<Student> findAll() {
		List<Student> students = new ArrayList<Student>();
		Student student = null;
		
		String sql = "select s_id, s_userName,s_passWord,s_sex,s_grade,s_subject s_address,s_mobile from student";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				
				int s_id = rs.getInt(1);
				String s_userName  = rs.getString(2);
				String s_passWord = rs.getString(3);
				boolean s_sex = rs.getBoolean(4);
				String s_grade = rs.getString(5);
				String s_subject = rs.getString(6);
				String s_address = rs.getString(7);
				String s_mobile = rs.getString(8);
				student = new Student(s_id, s_userName, s_passWord, s_sex, s_grade, s_subject, s_address, s_mobile);
				
				students.add(student);
			}
			}catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
				dbMananger.close();
			}return students;
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
