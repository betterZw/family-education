package com.it.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.it.dao.ICourseFileDAO;
import com.it.db.DBMananger;
import com.it.entity.CourseFile;

public class CourseFileDAOImpl implements ICourseFileDAO{

	@Override
	public boolean save(CourseFile courseFile) {

		String sql = "insert into CourseFile(c_teachId,c_path,c_name,c_isDisplay,c_date,c_size)"
				+ " values('"+courseFile.getC_teachId()+"','"+courseFile.getC_path()+"','"+courseFile.getC_name()+"','"+
				courseFile.isC_isDisplay()+"',"
						+ "getdate(),'"+courseFile.getC_size()+"')";
		System.out.println(sql);
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
		List<CourseFile> courseFiles = new ArrayList<CourseFile>();
		CourseFile courseFile = null;
		String sql = "select c_id,c_teachId,c_path,c_name,c_isDisplay,c_date,c_size from courseFile";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				int c_id = rs.getInt(1);
				int  c_teachId = rs.getInt(2);
				String c_path = rs.getString(3);
				String c_name = rs.getString(4);
				boolean c_isDisplay = rs.getBoolean(5);
				Date c_date = rs.getDate(6);
				float c_size = rs.getFloat(7);
				
				courseFile = new CourseFile(c_id, c_teachId, c_path, c_name, c_isDisplay, c_date, c_size);
				courseFiles.add(courseFile);
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		return courseFiles;
	}

}
