package com.it.servlet.student;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.it.dao.IStudentDAO;
import com.it.dao.impl.StudentDAOImpl;
import com.it.entity.Student;

public class UpdateStudentServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		int id = Integer.parseInt(request.getParameter("id"));
		String address = request.getParameter("address");
		String name = request.getParameter("userName");
		String pwd = request.getParameter("pwd");
		String grade = request.getParameter("grade");
		String subject = request.getParameter("subject");
		boolean stuSex = false;
		String strSex =request.getParameter("reg_type");
		String mobile = request.getParameter("phone");
		if("0".equals(strSex)) stuSex = true;
		Student student = new Student(id,name, pwd, stuSex, grade, subject, address, mobile);
		
		IStudentDAO studentDAO = new StudentDAOImpl();
		boolean isOk = studentDAO.update(student);
		PrintWriter out = response.getWriter();
		out.print(isOk);
		
		
	}

}
