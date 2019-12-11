package com.it.dao;

import java.util.List;

import com.it.entity.Complaint;

public interface IComplaintDAO {
	public boolean save(Complaint complaint);
	
	public boolean update(Complaint complaint);
	
	public boolean delete(int id);
	
	public Complaint findById(int id);
	
	public List<Complaint> findAll();

}
