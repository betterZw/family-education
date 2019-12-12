


class Student{
    int s_id;
    String s_userName;
    String s_passWord;
    boolean s_sex;
    String s_grade;
    String s_subject;
    String s_address;
    String s_mobile;
}

class Teacher{
    int t_id;
    String t_userName;
    String t_passWord;
    boolean t_sex;
    String t_subject;
    String t_grade;
}


class SysAdmin{
    int a_id;
    String a_userName;
    String a_passWord;
    char a_type;
}

class Message{
    int m_id;
    int m_from;
    int m_to;
    String m_context;
    boolean m_isReply;
}

class Complaint{
    int com_id;
    int com_from;
    int com_to;
    String com_context;
    boolean com_isHandler;
}

class CourseFile{
    int c_id;
    int c_teachId;
    String c_path;
    String c_name;
    boolean c_isDisplay;
    Date c_date;
    float c_size;

}