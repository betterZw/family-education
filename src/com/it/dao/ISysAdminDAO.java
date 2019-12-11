package com.it.dao;

import java.util.List;

import com.it.entity.SysAdmin;

public interface ISysAdminDAO {
	public boolean save(SysAdmin sysAdmin);
	
	public boolean update(SysAdmin sysAdmin);
	
	public boolean delete(int id);
	
	public SysAdmin findById(int id);
	
	public List<SysAdmin> findAll();

}
