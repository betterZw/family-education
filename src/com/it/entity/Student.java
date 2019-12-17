package com.it.entity;

import java.io.Serializable;

public class Student implements Serializable{
	private int s_id;
    private String s_userName;
    private String s_passWord;
    private boolean s_sex;
    private String s_grade;
    private String s_subject;
    private String s_address;
	private String s_mobile;
	
	public Student() {
		super();
	}
	public Student(int s_id, String s_userName, String s_passWord,
			boolean s_sex, String s_grade, String s_subject, String s_address,
			String s_mobile) {
		super();
		this.s_id = s_id;
		this.s_userName = s_userName;
		this.s_passWord = s_passWord;
		this.s_sex = s_sex;
		this.s_grade = s_grade;
		this.s_subject = s_subject;
		this.s_address = s_address;
		this.s_mobile = s_mobile;
	}
	public Student(String s_userName, String s_passWord, boolean s_sex,
			String s_grade, String s_subject, String s_address, String s_mobile) {
		super();
		this.s_userName = s_userName;
		this.s_passWord = s_passWord;
		this.s_sex = s_sex;
		this.s_grade = s_grade;
		this.s_subject = s_subject;
		this.s_address = s_address;
		this.s_mobile = s_mobile;
	}
	
	
	public Student( String s_userName, String s_passWord) {
		super();
		this.s_userName = s_userName;
		this.s_passWord = s_passWord;
	}
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public String getS_userName() {
		return s_userName;
	}
	public void setS_userName(String s_userName) {
		this.s_userName = s_userName;
	}
	public String getS_passWord() {
		return s_passWord;
	}
	public void setS_passWord(String s_passWord) {
		this.s_passWord = s_passWord;
	}
	public boolean isS_sex() {
		return s_sex;
	}
	public void setS_sex(boolean s_sex) {
		this.s_sex = s_sex;
	}
	public String getS_grade() {
		return s_grade;
	}
	public void setS_grade(String s_grade) {
		this.s_grade = s_grade;
	}
	public String getS_subject() {
		return s_subject;
	}
	public void setS_subject(String s_subject) {
		this.s_subject = s_subject;
	}
	public String getS_address() {
		return s_address;
	}
	public void setS_address(String s_address) {
		this.s_address = s_address;
	}
	public String getS_mobile() {
		return s_mobile;
	}
	public void setS_mobile(String s_mobile) {
		this.s_mobile = s_mobile;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((s_address == null) ? 0 : s_address.hashCode());
		result = prime * result + ((s_grade == null) ? 0 : s_grade.hashCode());
		result = prime * result + s_id;
		result = prime * result
				+ ((s_mobile == null) ? 0 : s_mobile.hashCode());
		result = prime * result
				+ ((s_passWord == null) ? 0 : s_passWord.hashCode());
		result = prime * result + (s_sex ? 1231 : 1237);
		result = prime * result
				+ ((s_subject == null) ? 0 : s_subject.hashCode());
		result = prime * result
				+ ((s_userName == null) ? 0 : s_userName.hashCode());
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
		Student other = (Student) obj;
		if (s_address == null) {
			if (other.s_address != null)
				return false;
		} else if (!s_address.equals(other.s_address))
			return false;
		if (s_grade == null) {
			if (other.s_grade != null)
				return false;
		} else if (!s_grade.equals(other.s_grade))
			return false;
		if (s_id != other.s_id)
			return false;
		if (s_mobile == null) {
			if (other.s_mobile != null)
				return false;
		} else if (!s_mobile.equals(other.s_mobile))
			return false;
		if (s_passWord == null) {
			if (other.s_passWord != null)
				return false;
		} else if (!s_passWord.equals(other.s_passWord))
			return false;
		if (s_sex != other.s_sex)
			return false;
		if (s_subject == null) {
			if (other.s_subject != null)
				return false;
		} else if (!s_subject.equals(other.s_subject))
			return false;
		if (s_userName == null) {
			if (other.s_userName != null)
				return false;
		} else if (!s_userName.equals(other.s_userName))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Student [s_id=" + s_id + ", s_userName=" + s_userName
				+ ", s_passWord=" + s_passWord + ", s_sex=" + s_sex
				+ ", s_grade=" + s_grade + ", s_subject=" + s_subject
				+ ", s_address=" + s_address + ", s_mobile=" + s_mobile + "]";
	}
    
    

}
