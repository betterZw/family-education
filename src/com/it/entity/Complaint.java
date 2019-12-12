package com.it.entity;

public class Complaint {
	private int com_id;
    private int com_from;
    private int com_to;
	private String com_context;
	private boolean com_isHandler;// «∑Ò¥¶¿Ì
	public Complaint() {
		super();
	}
	public Complaint(int com_id, int com_from, int com_to, String com_context,
			boolean com_isHandler) {
		super();
		this.com_id = com_id;
		this.com_from = com_from;
		this.com_to = com_to;
		this.com_context = com_context;
		this.com_isHandler = com_isHandler;
	}
	public Complaint(int com_from, int com_to, String com_context,
			boolean com_isHandler) {
		super();
		this.com_from = com_from;
		this.com_to = com_to;
		this.com_context = com_context;
		this.com_isHandler = com_isHandler;
	}
	public int getCom_id() {
		return com_id;
	}
	public void setCom_id(int com_id) {
		this.com_id = com_id;
	}
	public int getCom_from() {
		return com_from;
	}
	public void setCom_from(int com_from) {
		this.com_from = com_from;
	}
	public int getCom_to() {
		return com_to;
	}
	public void setCom_to(int com_to) {
		this.com_to = com_to;
	}
	public String getCom_context() {
		return com_context;
	}
	public void setCom_context(String com_context) {
		this.com_context = com_context;
	}
	public boolean isCom_isHandler() {
		return com_isHandler;
	}
	public void setCom_isHandler(boolean com_isHandler) {
		this.com_isHandler = com_isHandler;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((com_context == null) ? 0 : com_context.hashCode());
		result = prime * result + com_from;
		result = prime * result + com_id;
		result = prime * result + (com_isHandler ? 1231 : 1237);
		result = prime * result + com_to;
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
		Complaint other = (Complaint) obj;
		if (com_context == null) {
			if (other.com_context != null)
				return false;
		} else if (!com_context.equals(other.com_context))
			return false;
		if (com_from != other.com_from)
			return false;
		if (com_id != other.com_id)
			return false;
		if (com_isHandler != other.com_isHandler)
			return false;
		if (com_to != other.com_to)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Complaint [com_id=" + com_id + ", com_from=" + com_from
				+ ", com_to=" + com_to + ", com_context=" + com_context
				+ ", com_isHandler=" + com_isHandler + "]";
	}
	

	    
}
