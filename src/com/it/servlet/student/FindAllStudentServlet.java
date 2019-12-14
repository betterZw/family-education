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

public class FindAllStudentServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		IStudentDAO studentDAO = new StudentDAOImpl();
		List<Student> students = studentDAO.findAll();
		request.setAttribute("students", students);
		request.getRequestDispatcher("/mainPageStudent.jsp").forward(request, response);
	}

}
