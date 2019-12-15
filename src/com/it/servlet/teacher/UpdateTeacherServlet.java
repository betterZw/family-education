package com.it.servlet.teacher;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.it.dao.ITeacherDAO;
import com.it.dao.impl.TeacherDAOImpl;
import com.it.entity.Teacher;

public class UpdateTeacherServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		this.doPost(request, response);
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		int id = Integer.parseInt(request.getParameter("id"));
		String name = request.getParameter("userName");
		String pwd = request.getParameter("pwd");
		String grade = request.getParameter("grade");
		String subject = request.getParameter("subject");
		boolean stuSex = false;
		String strSex =request.getParameter("reg_type");
		if("0".equals(strSex)) stuSex = true;
		
		Teacher teacher = new Teacher(id, name, pwd, stuSex, subject, grade);
		ITeacherDAO teacherDAO = new TeacherDAOImpl();
		boolean isOk = teacherDAO.update(teacher);
		
		PrintWriter out = response.getWriter();
		out.print(isOk);
	}

}
