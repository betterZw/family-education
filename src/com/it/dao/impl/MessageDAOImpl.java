package com.it.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.it.dao.IMessageDAO;
import com.it.db.DBMananger;
import com.it.entity.Message;

public class MessageDAOImpl implements IMessageDAO{

	@Override
	public boolean save(Message message) {
		String sql = "insert into message(m_from,m_to,m_context,m_isReply) "
				+ "values("+message.getM_from()+","+message.getM_to()+",'"+message.getM_context()+"',"+message.isM_isReply()+")";
		
		DBMananger dbMananger = new DBMananger();
		
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public boolean update(Message message) {
		return false;
	}

	@Override
	public boolean delete(int id) {
		String sql = "delete from message where m_id = "+id+"";
		DBMananger dbMananger = new DBMananger();
		
		return (dbMananger.update(sql) == 1);
	}

	@Override
	public Message findById(int id) {
		Message message = null;
		String sql = "select m_id,m_from,m_to,m_context,m_isReply from message where m_id = "+id+"";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				int m_id = rs.getInt(1);
				int m_from = rs.getInt(2);
				int m_to = rs.getInt(3);
				String m_context = rs.getString(4);
				boolean m_isReply = rs.getBoolean(5);
				message = new Message(m_id, m_from, m_to, m_context, m_isReply);
				
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		
		return message;
	}

	@Override
	public List<Message> findAll() {
		List<Message> messages = new ArrayList<Message>();
		Message message = null;
		String sql = "select m_id,m_from,m_to,m_context,m_isReply from message";
		DBMananger dbMananger = new DBMananger();
		ResultSet rs = dbMananger.query(sql);
		try {
			while(rs.next()){
				int m_id = rs.getInt(1);
				int m_from = rs.getInt(2);
				int m_to = rs.getInt(3);
				String m_context = rs.getString(4);
				boolean m_isReply = rs.getBoolean(5);
				message = new Message(m_id, m_from, m_to, m_context, m_isReply);
				
				messages.add(message);
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			dbMananger.close();
		}
		
		return messages;
	}

}
