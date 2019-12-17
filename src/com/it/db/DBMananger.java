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
			//��������
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			//�õ�����
			con = DriverManager.getConnection(url, "sa", "sa");
			//����statement����
			sta = con.createStatement();
			//ִ��sql���
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
	 * ����ִ��insert,update,delete���
	 * @param sql Ҫִ�е�sql���
	 * @return sql���Ӱ�������
	 */
	public int update(String sql){
		System.out.println(sql);
		int rows = 0;//��sql���Ӱ�������
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
			System.out.println("�ر���Դ











			ʱ�����쳣");
		}
	}
}
