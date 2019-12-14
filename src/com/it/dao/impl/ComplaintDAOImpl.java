package com.it.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.it.dao.IComplaintDAO;
import com.it.db.DBMananger;
import com.it.entity.Complaint;

public class ComplaintDAOImpl implements IComplaintDAO{

	@Override
	public boolean save(Complaint complaint) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(Complaint complaint) {
		String sql = "";
		return false;
	}

	@Override
	public boolean delete(int id) {
		String sql = "delete from complaint where com_id = "+id+"";
		DBMananger dbMananger = new DBMananger();
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public Complaint findById(int id) {
		Complaint complaint = null;
		String sql = "select com_id,com_from,com_to,com_context,com_isHandler from complaint where com_id = "+id+"";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			if(rs.next()){
				int com_id = rs.getInt(1);
				int com_from = rs.getInt(2);
				int com_to = rs.getInt(3);
				String com_context = rs.getString(4);
				boolean com_isHandler = rs.getBoolean(5);
				complaint = new Complaint(com_id, com_from, com_to, com_context, com_isHandler);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		return complaint;
	}

	@Override
	public List<Complaint> findAll() {
		List<Complaint> complaints = new ArrayList<Complaint>();
		Complaint complaint = null;
		String sql = "select com_id,com_from,com_to,com_context,com_isHandler from complaint";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				int com_id = rs.getInt(1);
				int com_from = rs.getInt(2);
				int com_to = rs.getInt(3);
				String com_context = rs.getString(4);
				boolean com_isHandler = rs.getBoolean(5);
				complaint = new Complaint(com_id, com_from, com_to, com_context, com_isHandler);
				complaints.add(complaint);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		return complaints;
	}

}
