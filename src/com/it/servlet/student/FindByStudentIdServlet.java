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

public class FindByStudentIdServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println(request.getParameter("id")+"***************************");
		int id = Integer.parseInt(request.getParameter("id"));
		IStudentDAO studentDAO = new StudentDAOImpl();
		Student student = studentDAO.findById(id);
		request.setAttribute("student", student);
		request.getRequestDispatcher("student/individual_center.jsp").forward(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doGet(request, response);

	}

}
