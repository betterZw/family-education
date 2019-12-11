package com.it.dao;

import java.util.List;

import com.it.entity.Message;

public interface IMessageDAO {
	public boolean save(Message message);
	
	public boolean update(Message message);
	
	public boolean delete(int id);
	
	public Message findById(int id);
	
	public List<Message> findAll();

}
