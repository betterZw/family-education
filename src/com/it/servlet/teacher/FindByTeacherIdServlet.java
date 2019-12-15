package com.it.servlet.teacher;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.it.dao.ITeacherDAO;
import com.it.dao.impl.TeacherDAOImpl;
import com.it.entity.Teacher;

public class FindByTeacherIdServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ITeacherDAO teacherDAO = new TeacherDAOImpl();
		int id = Integer.parseInt(request.getParameter("id"));
		
		Teacher teacher = teacherDAO.findById(id);
		request.setAttribute("teacher", teacher);
		request.getRequestDispatcher("/teacher/individual_center.jsp").forward(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doGet(request, response);
	}

}
