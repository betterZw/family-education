package db;

import java.sql.Connection;
import java.sql.ResultSet;

import com.mysql.jdbc.Statement;

public class DBManager {
	private Connection con = null;
	private Statement sta = null;
	private ResultSet rs = null;
	
	public ResultSet query(String sql){
		System.out.println(sql);
		String url = "";
		
		return rs;
		
	}
	
	

}
