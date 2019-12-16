package com.it.servlet.student;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.it.dao.IMessageDAO;
import com.it.dao.IStudentDAO;
import com.it.dao.impl.MessageDAOImpl;
import com.it.dao.impl.StudentDAOImpl;
import com.it.entity.Message;
import com.it.entity.Student;
import com.it.entity.Teacher;

public class FindAllStudentServlet extends HttpServlet {

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
		
	}

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		
		
		
		
		IStudentDAO studentDAO = new StudentDAOImpl();
		List<Student> students = studentDAO.findAll();
		
		IMessageDAO messageDAO = new MessageDAOImpl();
		List<Message> messages = messageDAO.findAll();
		request.setAttribute("students", students);
		request.setAttribute("messages", messages);
		request.getRequestDispatcher("teacher/mainPage.jsp").forward(request, response);
	}

}
