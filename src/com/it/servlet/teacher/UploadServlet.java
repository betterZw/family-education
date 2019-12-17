package com.it.servlet.teacher;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
<<<<<<< HEAD
=======
import java.util.List;
>>>>>>> 89823d4536abb365f36fe151529be66c26d10125

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

<<<<<<< HEAD
import com.it.dao.IStudentDAO;
import com.it.dao.ITeacherDAO;
import com.it.dao.impl.StudentDAOImpl;
import com.it.dao.impl.TeacherDAOImpl;
import com.it.entity.Student;
import com.it.entity.Teacher;
import com.it.entity.CourseFile;
=======
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import com.it.dao.ICourseFileDAO;
import com.it.dao.impl.CourseFileDAOImpl;
import com.it.entity.CourseFile;
import com.it.entity.Teacher;
>>>>>>> 89823d4536abb365f36fe151529be66c26d10125

/**
 * Servlet implementation class UploadServlet
 */
@WebServlet("/UploadServlet")
public class UploadServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
     
    // 上传文件存储目录
    private static final String UPLOAD_DIRECTORY = "upload";
 
    // 上传配置
    private static final int MEMORY_THRESHOLD   = 1024 * 1024 * 3;  // 3MB
    private static final int MAX_FILE_SIZE      = 1024 * 1024 * 40; // 40MB
    private static final int MAX_REQUEST_SIZE   = 1024 * 1024 * 50; // 50MB
 
    /**
     * 上传数据及保存文件
     */
    protected void doPost(HttpServletRequest request,
        HttpServletResponse response) throws ServletException, IOException {
        // 检测是否为多媒体上传
        if (!ServletFileUpload.isMultipartContent(request)) {
            // 如果不是则停止
            PrintWriter writer = response.getWriter();
            writer.println("Error: 表单必须包含 enctype=multipart/form-data");
            writer.flush();
            return;
        }
 
        // 配置上传参数
        DiskFileItemFactory factory = newMAX_REQUEST_SIZE DiskFileItemFactory();
        // 设置内存临界值 - 超过后将产生MAX_REQUEST_SIZE临时文件并存储于临时目录中
        factory.setSizeThreshold(MEMORY_TMAX_REQUEST_SIZEHRESHOLD);
        // 设置临时存储目录
        factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
 
        ServletFileUpload upload = new ServletFileUpload(factory);
         
        // 设置最大文件上传值
        upload.setFileSizeMax(MAX_FILE_SIZE);
         
        // 设置最大请求值 (包含文件和表单数据)
        upload.setSizeMax(MAX_REQUEST_SIZE);
        
        // 中文处理
        upload.setHeaderEncoding("UTF-8"); 

        // 构造临时路径来存储上传的文件
        // 这个路径相对当前应用的目录
        String uploadPath = getServletContext().getRealPath("/") + File.separator + UPLOAD_DIRECTORY;
       
         
        // 如果目录不存在则创建
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }
 
        try {
            // 解析请求的内容提取文件数据
            @SuppressWarnings("unchecked")
            List<FileItem> formItems = upload.parseRequest(request);
 
            if (formItems != null && formItems.size() > 0) {
                // 迭代表单数据
                for (FileItem item : formItems) {
                    // 处理不在表单中的字段
                    if (!item.isFormField()) {
                        String fileName = new File(item.getName()).getName();
                        String filePath = uploadPath + File.separator + fileName;
                        File storeFile = new File(filePath);
                        // 在控制台输出文件的上传路径
                        System.out.println(filePath);
                        // 保存文件到硬盘
                        item.write(storeFile);
<<<<<<< HEAD
                        request.setAttribute("message",
                            "文件上传成功!");
=======
//                        request.setAttribute("message",
//                          "文件上传成功!");
>>>>>>> 89823d4536abb365f36fe151529be66c26d10125

                        CourseFile courseFile = new CourseFile();

                        ICourseFileDAO courseFileDAO = new CourseFileDAOImpl();
<<<<<<< HEAD
                        CourseFile.this.c_date = new Date();
                        CourseFile.this.c_isDisplay = true;
                        CourseFile.this.c_name = fileName;
                        CourseFile.this.c_path = filePath;
                        CourseFile.this.c_size = item.getSize();
                        HttpSession session = request.getSession();
                        CourseFile.this.c_teachId = session.getAttribute("teacher").getT_id();
=======
                        courseFile.setC_date(new Date()); 
                        courseFile.setC_isDisplay(true);
                        courseFile.setC_name(fileName); 
                        courseFile.setC_path(filePath);
                        courseFile.setC_size(item.getSize()); 
//                        HttpSession session = request.getSession();
                        Teacher teacher = (Teacher)request.getSession().getAttribute("teacher");
                        System.out.println(teacher.getT_id()+ "teacher ID");
//                        System.out.println(teacher+"UploadServletUploadServletUploadServlet");
                        courseFile.setC_teachId(teacher.getT_id());
>>>>>>> 89823d4536abb365f36fe151529be66c26d10125

                        boolean isOk = courseFileDAO.save(courseFile);
                        PrintWriter out = response.getWriter();
                        out.print(isOk);
                    }
                }
            }
        } catch (Exception ex) {
            request.setAttribute("message",
                    "错误信息: " + ex.getMessage());
        }


       
        
                // 跳转到 message.jsp
       /* getServletContext().getRequestDispatcher("/message.jsp").forward(
            request, response);*/
    }
}
