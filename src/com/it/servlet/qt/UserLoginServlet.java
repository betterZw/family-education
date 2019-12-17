package com.it.servlet.qt;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	
		String path = "/frontLogin.jsp";
		if("ѧ��".equals(option)){
			IStudentDAO studentDAO = new StudentDAOImpl();
			Student student = studentDAO.findByNameAndPwd(name, pwd);
			
			
			if(student != null){
				request.getSession().setAttribute("student", student);
				path = "/FindAllTeacherServlet";
			}
			
		}else if("��ʦ".equals(option)){
			ITeacherDAO teacherDAO = new TeacherDAOImpl();
			Teacher teacher = teacherDAO.findByNameAndPwd(name, pwd);
			
			if(teacher != null){
				request.getSession().setAttribute("teacher", teacher);
				System.out.println("tc--->"+teacher.getT_id());
				path = "/FindAllStudentServlet";
			}
		}
		request.getRequestDispatcher(path).forward(request, response);
		
	}

}
