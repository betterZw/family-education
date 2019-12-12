package com.it.servlet.qt;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.it.dao.IStudentDAO;
import com.it.dao.ITeacherDAO;
import com.it.dao.impl.StudentDAOImpl;
import com.it.dao.impl.TeacherDAOImpl;
import com.it.entity.Student;
import com.it.entity.Teacher;

public class UserLoginServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doPost(request, response);
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		String name = request.getParameter("name");
		String pwd = request.getParameter("pwd");
		String option = request.getParameter("selector");//获取下拉框选项
		HttpSession session = request.getSession();
		
		if("学生".equals(option)){
			IStudentDAO studentDAO = new StudentDAOImpl();
			Student student = studentDAO.findByNameAndPwd(name, pwd);
			session.setAttribute("student", student);
			response.sendRedirect("first_page.html");
			
		}else if("老师".equals(option)){
			ITeacherDAO teacherDAO = new TeacherDAOImpl();
			Teacher teacher = teacherDAO.findByNameAndPwd(name, pwd);
			session.setAttribute("teacher", teacher);
			response.sendRedirect("first_page.html");
		}
		response.sendRedirect("frontLogin.jsp");
	}

}
