package com.it.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBMananger {
	
	private Connection con = null;
	private  Statement sta = null;
	private ResultSet rs = null;
	
	public ResultSet query(String sql){
		System.out.println(sql);
		String url = "jdbc:sqlserver://127.0.0.1:1433;DatabaseName=family_education";
		
		try {
			//加载驱动
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			//得到连接
			con = DriverManager.getConnection(url, "sa", "sa");
			//创建statement对象
			sta = con.createStatement();
			//执行sql语句
			rs= sta.executeQuery(sql);
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}












		
		return rs;
	}
	/**
	 * 用来执行insert,update,delete语句
	 * @param sql 要执行的sql语句
	 * @return sql语句影响的行数
	 */
	public int update(String sql){
		System.out.println(sql);
		int rows = 0;//受sql语句影响的行数
		String url = "jdbc:sqlserver://127.0.0.1:1433;DatabaseName=family_education";
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection(url, "sa", "sa");
			sta = con.createStatement();
			rows = sta.executeUpdate(sql);
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rows;
		
	}
	
	public void close(){
		try {
			if(rs!= null){
				rs.close();
				rs = null;
			}
			if(sta!= null){
				sta.close();
				sta = null;
			}
			if(con!= null){
				con.close();
				con = null;
			}
		} catch (SQLException e) {
			System.out.println("关闭资源时发生异常");
		}
	}
}
