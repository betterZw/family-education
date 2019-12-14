package com.it.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.it.dao.ISysAdminDAO;
import com.it.db.DBMananger;
import com.it.entity.SysAdmin;

public class SysAdminDAOImpl implements ISysAdminDAO {

	@Override
	public boolean save(SysAdmin sysAdmin) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(SysAdmin sysAdmin) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public SysAdmin findById(int id) {
		SysAdmin sysAdmin = null;
		String sql = "select * from SysAdmin where a_id = "+id+"";
		System.out.println(sql);
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				int a_id = rs.getInt(1);
				String a_userName = rs.getString(2);
				String a_passWord = rs.getString(3);
				String a_type  = rs.getString(4);
				
				sysAdmin = new SysAdmin(a_id, a_userName, a_passWord, a_type);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		
		
		
		return sysAdmin;
	}

	@Override
	public List<SysAdmin> findAll() {
		List<SysAdmin> sysAdmins = new ArrayList<SysAdmin>();
		SysAdmin sysAdmin = null;
		String sql = "select * from SysAdmin";
		System.out.println(sql);
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				int a_id = rs.getInt(1);
				String a_userName = rs.getString(2);
				String a_passWord = rs.getString(3);
				String a_type  = rs.getString(4);
				
				sysAdmin = new SysAdmin(a_id, a_userName, a_passWord, a_type);
				sysAdmins.add(sysAdmin);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		
		
		return sysAdmins;
	}

}
