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

public class UserRegisterServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		String option = request.getParameter("selector");//获取下拉框选项
		String name = request.getParameter("LoginName");
		String pwd = request.getParameter("Password");
		
		if("学生".equals(option)){
			Student student = new Student(name, pwd);
			IStudentDAO studentDAO = new StudentDAOImpl();
			boolean isOk = studentDAO.save(student);
			PrintWriter out = response.getWriter();
			out.print(isOk);
		}
		if("老师".equals(option)){
			Teacher teacher = new Teacher(name, pwd);
			ITeacherDAO teacherDAO = new TeacherDAOImpl();
			boolean isOk = teacherDAO.save(teacher);
			PrintWriter out = response.getWriter();
			out.print(isOk);
		}
		
	
	}

}
