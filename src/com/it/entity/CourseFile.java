package com.it.entity;

import java.util.Date;

public class CourseFile {
	private int c_id;
    private int c_teachId;
    private String c_path;
    private boolean c_isDisplay;
    private Date c_date;
	private float c_size;
	
	public CourseFile() {
		super();
	}
	public CourseFile(int c_id, int c_teachId, String c_path, boolean c_isDisplay,
			Date c_date, float c_size) {
		super();
		this.c_id = c_id;
		this.c_teachId = c_teachId;
		this.c_path = c_path;
		this.c_isDisplay = c_isDisplay;
		this.c_date = c_date;
		this.c_size = c_size;
	}
	public CourseFile(int c_teachId, String c_path, boolean c_isDisplay, Date c_date,
			float c_size) {
		super();
		this.c_teachId = c_teachId;
		this.c_path = c_path;
		this.c_isDisplay = c_isDisplay;
		this.c_date = c_date;
		this.c_size = c_size;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public int getc_teachId() {
		return c_teachId;
	}
	public void setc_teachId(int c_teachId) {
		this.c_teachId = c_teachId;
	}
	public String getC_path() {
		return c_path;
	}
	public void setC_path(String c_path) {
		this.c_path = c_path;
	}
	public boolean c_isDisplay() {
		return c_isDisplay;
	}
	public void setDisplay(boolean c_isDisplay) {
		this.c_isDisplay = c_isDisplay;
	}
	public Date getC_date() {
		return c_date;
	}
	public void setC_date(Date c_date) {
		this.c_date = c_date;
	}
	public float getC_size() {
		return c_size;
	}
	public void setC_size(float c_size) {
		this.c_size = c_size;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((c_date == null) ? 0 : c_date.hashCode());
		result = prime * result + c_id;
		result = prime * result + ((c_path == null) ? 0 : c_path.hashCode());
		result = prime * result + Float.floatToIntBits(c_size);
		result = prime * result + (c_isDisplay ? 1231 : 1237);
		result = prime * result + c_teachId;
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
		CourseFile other = (CourseFile) obj;
		if (c_date == null) {
			if (other.c_date != null)
				return false;
		} else if (!c_date.equals(other.c_date))
			return false;
		if (c_id != other.c_id)
			return false;
		if (c_path == null) {
			if (other.c_path != null)
				return false;
		} else if (!c_path.equals(other.c_path))
			return false;
		if (Float.floatToIntBits(c_size) != Float.floatToIntBits(other.c_size))
			return false;
		if (c_isDisplay != other.c_isDisplay)
			return false;
		if (c_teachId != other.c_teachId)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "CourseFile [c_id=" + c_id + ", c_teachId=" + c_teachId + ", c_path="
				+ c_path + ", c_isDisplay=" + c_isDisplay + ", c_date=" + c_date
				+ ", c_size=" + c_size + "]";
	}
    
    
    
    

}
