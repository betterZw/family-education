package com.it.servlet.qt;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
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


	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		String name = request.getParameter("name");
		String pwd = request.getParameter("pwd");
		String option = request.getParameter("selector");//��ȡ������ѡ��
	
		HttpSession session = request.getSession();
		String path = "/frontLogin.jsp";
		if("ѧ��".equals(option)){
			IStudentDAO studentDAO = new StudentDAOImpl();
			Student student = studentDAO.findByNameAndPwd(name, pwd);
			
			
			if(student != null){
				session.setAttribute("student", student);
				path = "/main_page.html";
			}
			
		}else if("��ʦ".equals(option)){
			ITeacherDAO teacherDAO = new TeacherDAOImpl();
			Teacher teacher = teacherDAO.findByNameAndPwd(name, pwd);
			
			
			if(teacher != null){
				session.setAttribute("teacher", teacher);
				path = "/main_page.html";
			}
			
			
		}
		request.getRequestDispatcher(path).forward(request, response);
		System.out.println(path);
		
	}

}
