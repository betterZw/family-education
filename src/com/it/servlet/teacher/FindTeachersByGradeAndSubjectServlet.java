package com.it.servlet.teacher;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.it.dao.ITeacherDAO;
import com.it.dao.impl.TeacherDAOImpl;
import com.it.entity.Teacher;

public class FindTeachersByGradeAndSubjectServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String grade1 = request.getParameter("grade");
		String grade = new String(grade1.getBytes("iso-8859-1"),"utf-8");
		String subject1 = request.getParameter("subject");
		String subject = new String(subject1.getBytes("iso-8859-1"),"utf-8");
		
		ITeacherDAO teacherDAO = new TeacherDAOImpl();
		List<Teacher> teachers = teacherDAO.findByGradeAndSubject(grade, subject);
		request.setAttribute("teachers", teachers);
		request.getRequestDispatcher("/mainPage.jsp").forward(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doGet(request, response);
	}

}
