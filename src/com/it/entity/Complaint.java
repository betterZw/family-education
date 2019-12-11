package com.it.entity;

public class Complaint {
	int c_comid;
    int s_id;
    int t_id;
    String c_context;
	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Complaint(int c_comid, int s_id, int t_id, String c_context) {
		super();
		this.c_comid = c_comid;
		this.s_id = s_id;
		this.t_id = t_id;
		this.c_context = c_context;
	}
	public Complaint(int s_id, int t_id, String c_context) {
		super();
		this.s_id = s_id;
		this.t_id = t_id;
		this.c_context = c_context;
	}
	public int getC_comid() {
		return c_comid;
	}
	public void setC_comid(int c_comid) {
		this.c_comid = c_comid;
	}
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public int getT_id() {
		return t_id;
	}
	public void setT_id(int t_id) {
		this.t_id = t_id;
	}
	public String getC_context() {
		return c_context;
	}
	public void setC_context(String c_context) {
		this.c_context = c_context;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + c_comid;
		result = prime * result
				+ ((c_context == null) ? 0 : c_context.hashCode());
		result = prime * result + s_id;
		result = prime * result + t_id;
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
		if (c_comid != other.c_comid)
			return false;
		if (c_context == null) {
			if (other.c_context != null)
				return false;
		} else if (!c_context.equals(other.c_context))
			return false;
		if (s_id != other.s_id)
			return false;
		if (t_id != other.t_id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Complaint [c_comid=" + c_comid + ", s_id=" + s_id + ", t_id="
				+ t_id + ", c_context=" + c_context + "]";
	}
	
    
    
}
