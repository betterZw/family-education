package com.it.servlet.teacher;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.it.dao.ICourseFileDAO;
import com.it.dao.ITeacherDAO;
import com.it.dao.impl.CourseFileDAOImpl;
import com.it.dao.impl.TeacherDAOImpl;
import com.it.entity.CourseFile;
import com.it.entity.Teacher;

public class FindAllTeacherServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		ITeacherDAO teacherDAO = new TeacherDAOImpl();
		List<Teacher> teachers = teacherDAO.findAll();
		ICourseFileDAO courseFileDAO = new CourseFileDAOImpl();
		List<CourseFile> courseFiles = courseFileDAO.findAll();
		request.getSession().setAttribute("courseFiles", courseFiles);
		request.setAttribute("teachers", teachers);
		request.getRequestDispatcher("student/mainPage.jsp").forward(request, response);
	}

}
