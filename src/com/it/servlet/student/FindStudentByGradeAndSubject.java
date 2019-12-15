package com.it.servlet.student;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.it.dao.IStudentDAO;
import com.it.dao.impl.StudentDAOImpl;
import com.it.entity.Student;

public class FindStudentByGradeAndSubject extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String grade1 = request.getParameter("grade");
		String grade = new String(grade1.getBytes("iso-8859-1"),"utf-8"); 
		String subject1 = request.getParameter("subject");
		String subject = new String(subject1.getBytes("iso-8859-1"),"utf-8");
		IStudentDAO studentDAO = new StudentDAOImpl();
		
		List<Student> students = studentDAO.findByGradeAndSubject(grade, subject);
		request.setAttribute("students", students);
		request.getRequestDispatcher("teacher/mainPage.jsp").forward(request, response);
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doGet(request, response);
	}

}
