package com.it.entity;

public class Message {
	int m_id;
    int m_from;
    int m_to;
    String m_context;
    boolean m_isReply;
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Message(int m_id, int m_from, int m_to, String m_context,
			boolean m_isReply) {
		super();
		this.m_id = m_id;
		this.m_from = m_from;
		this.m_to = m_to;
		this.m_context = m_context;
		this.m_isReply = m_isReply;
	}
	public Message(int m_from, int m_to, String m_context, boolean m_isReply) {
		super();
		this.m_from = m_from;
		this.m_to = m_to;
		this.m_context = m_context;
		this.m_isReply = m_isReply;
	}
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public int getM_from() {
		return m_from;
	}
	public void setM_from(int m_from) {
		this.m_from = m_from;
	}
	public int getM_to() {
		return m_to;
	}
	public void setM_to(int m_to) {
		this.m_to = m_to;
	}
	public String getM_context() {
		return m_context;
	}
	public void setM_context(String m_context) {
		this.m_context = m_context;
	}
	public boolean isM_isReply() {
		return m_isReply;
	}
	public void setM_isReply(boolean m_isReply) {
		this.m_isReply = m_isReply;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((m_context == null) ? 0 : m_context.hashCode());
		result = prime * result + m_from;
		result = prime * result + m_id;
		result = prime * result + (m_isReply ? 1231 : 1237);
		result = prime * result + m_to;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Message other = (Message) obj;
		if (m_context == null) {
			if (other.m_context != null)
				return false;
		} else if (!m_context.equals(other.m_context))
			return false;
		if (m_from != other.m_from)
			return false;
		if (m_id != other.m_id)
			return false;
		if (m_isReply != other.m_isReply)
			return false;
		if (m_to != other.m_to)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Message [m_id=" + m_id + ", m_from=" + m_from + ", m_to="
				+ m_to + ", m_context=" + m_context + ", m_isReply="
				+ m_isReply + "]";
	}
    
    
}
