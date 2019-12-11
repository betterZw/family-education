package com.it.entity;

public class Teacher {
	private int t_id;
    private String t_userName;
    private String t_passWord;
    private boolean t_sex;
    private String t_subject;
    private String t_grade;
    
	public Teacher() {
		super();
	}

	public Teacher(int t_id, String t_userName, String t_passWord,
			boolean t_sex, String t_subject, String t_grade) {
		super();
		this.t_id = t_id;
		this.t_userName = t_userName;
		this.t_passWord = t_passWord;
		this.t_sex = t_sex;
		this.t_subject = t_subject;
		this.t_grade = t_grade;
	}

	public Teacher(String t_userName, String t_passWord, boolean t_sex,
			String t_subject, String t_grade) {
		super();
		this.t_userName = t_userName;
		this.t_passWord = t_passWord;
		this.t_sex = t_sex;
		this.t_subject = t_subject;
		this.t_grade = t_grade;
	}

	public int getT_id() {
		return t_id;
	}

	public void setT_id(int t_id) {
		this.t_id = t_id;
	}

	public String getT_userName() {
		return t_userName;
	}

	public void setT_userName(String t_userName) {
		this.t_userName = t_userName;
	}

	public String getT_passWord() {
		return t_passWord;
	}

	public void setT_passWord(String t_passWord) {
		this.t_passWord = t_passWord;
	}

	public boolean isT_sex() {
		return t_sex;
	}

	public void setT_sex(boolean t_sex) {
		this.t_sex = t_sex;
	}

	public String getT_subject() {
		return t_subject;
	}

	public void setT_subject(String t_subject) {
		this.t_subject = t_subject;
	}

	public String getT_grade() {
		return t_grade;
	}

	public void setT_grade(String t_grade) {
		this.t_grade = t_grade;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((t_grade == null) ? 0 : t_grade.hashCode());
		result = prime * result + t_id;
		result = prime * result
				+ ((t_passWord == null) ? 0 : t_passWord.hashCode());
		result = prime * result + (t_sex ? 1231 : 1237);
		result = prime * result
				+ ((t_subject == null) ? 0 : t_subject.hashCode());
		result = prime * result
				+ ((t_userName == null) ? 0 : t_userName.hashCode());
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
		Teacher other = (Teacher) obj;
		if (t_grade == null) {
			if (other.t_grade != null)
				return false;
		} else if (!t_grade.equals(other.t_grade))
			return false;
		if (t_id != other.t_id)
			return false;
		if (t_passWord == null) {
			if (other.t_passWord != null)
				return false;
		} else if (!t_passWord.equals(other.t_passWord))
			return false;
		if (t_sex != other.t_sex)
			return false;
		if (t_subject == null) {
			if (other.t_subject != null)
				return false;
		} else if (!t_subject.equals(other.t_subject))
			return false;
		if (t_userName == null) {
			if (other.t_userName != null)
				return false;
		} else if (!t_userName.equals(other.t_userName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Teacher [t_id=" + t_id + ", t_userName=" + t_userName
				+ ", t_passWord=" + t_passWord + ", t_sex=" + t_sex
				+ ", t_subject=" + t_subject + ", t_grade=" + t_grade + "]";
	}
	
    
    

}
