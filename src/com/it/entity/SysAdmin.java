package com.it.entity;

public class SysAdmin {
	private int a_id;
    private String a_userName;
	private String a_passWord;
	private char a_type;


	public SysAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SysAdmin(int a_id, String a_userName, String a_passWord) {
		super();
		this.a_id = a_id;
		this.a_userName = a_userName;
		this.a_passWord = a_passWord;
	}
	public SysAdmin(String a_userName, String a_passWord) {
		super();
		this.a_userName = a_userName;
		this.a_passWord = a_passWord;
	}
	public int getA_id() {
		return a_id;
	}
	public void setA_id(int a_id) {
		this.a_id = a_id;
	}
	public String getA_userName() {
		return a_userName;
	}
	public void setA_userName(String a_userName) {
		this.a_userName = a_userName;
	}
	public String getA_passWord() {
		return a_passWord;
	}
	public void setA_passWord(String a_passWord) {
		this.a_passWord = a_passWord;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + a_id;
		result = prime * result
				+ ((a_passWord == null) ? 0 : a_passWord.hashCode());
		result = prime * result
				+ ((a_userName == null) ? 0 : a_userName.hashCode());
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
		SysAdmin other = (SysAdmin) obj;
		if (a_id != other.a_id)
			return false;
		if (a_passWord == null) {
			if (other.a_passWord != null)
				return false;
		} else if (!a_passWord.equals(other.a_passWord))
			return false;
		if (a_userName == null) {
			if (other.a_userName != null)
				return false;
		} else if (!a_userName.equals(other.a_userName))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "SysAdmin [a_id=" + a_id + ", a_userName=" + a_userName
				+ ", a_passWord=" + a_passWord + "]";
	}
    
    
}
