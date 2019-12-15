-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet

-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'family_education'
)
CREATE DATABASE family_education
GO

USE family_education
GO
-- Create a new table called 'Student' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('Student', 'U') IS NOT NULL
DROP TABLE Student
GO
-- Create the table in the specified schema
---------------学生基本信息表-------------------
CREATE TABLE Student
(
    s_id INT identity NOT NULL PRIMARY KEY, -- primary key column
    s_userName varchar(16) NOT NULL UNIQUE,
    s_passWord varchar(16) NOT NULL,
    s_sex BIT,
    s_grade VARCHAR(16),
    s_subject VARCHAR(64),
    s_address VARCHAR(256),
    s_mobile CHAR(11),
    -- specify more columns here
);
GO


-- Create a new table called 'Teacher' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('Teacher', 'U') IS NOT NULL
DROP TABLE Teacher
GO
-- Create the table in the specified schema
-------------教师基本信息表---------------------
CREATE TABLE Teacher
(
    t_id INT identity NOT NULL PRIMARY KEY, -- primary key column
    t_userName varchar(16) NOT NULL UNIQUE,
    t_passWord varchar(16) NOT NULL,
    t_sex BIT,
    t_subject VARCHAR(64),
    t_grade VARCHAR(16),
    -- specify more columns here
);
GO


-- Create a new table called 'SysAdmin' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SysAdmin', 'U') IS NOT NULL

DROP TABLE SysAdmin
GO
-- Create the table in the specified schema
--------------管理员基本信息表---------------
CREATE TABLE SysAdmin
(
    a_id INT identity NOT NULL PRIMARY KEY, -- primary key column
    a_userName varchar(16) NOT NULL UNIQUE,
    a_passWord varchar(16) NOT NULL,
    a_type CHAR(1),
    -- specify more columns here
);
GO


-- Create a new table called 'Message' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('Message', 'U') IS NOT NULL
DROP TABLE Message
GO
-- Create the table in the specified schema
------------留言与回复基本信息表--------------------------
CREATE TABLE Message
(
    m_id  INT identity NOT NULL PRIMARY KEY, -- primary key column
    m_from INT NOT NULL, -- 淇℃伅鍙戦�佹潵婧? 鑰佸笀鎴栧鐢焛d
    m_to INT NOT NULL,
    m_context VARCHAR(1024),
    m_isReply BIT,
    -- specify more columns here
);
GO



-- Create a new table called 'Complaint' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('Complaint', 'U') IS NOT NULL

DROP TABLE Complaint
GO
-- Create the table in the specified schema
----------投诉基本信息表--------
CREATE TABLE Complaint
(
    com_id INT identity NOT NULL PRIMARY KEY, -- primary key column
    com_from INT NOT NULL,
    com_to INT NOT NULL,
    com_context VARCHAR(1024),
    com_isHandler BIT,
    -- specify more columns here
);
GO


-- Create a new table called 'CourseFile' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('CourseFile', 'U') IS NOT NULL
DROP TABLE CourseFile
GO
-- Create the table in the specified schema
-----------课件基本信息表---------------
CREATE TABLE CourseFile
(
    c_id INT identity NOT NULL PRIMARY KEY, -- primary key column
    c_teachId INT NOT NULL,
    c_path VARCHAR(512) NOT NULL,
    c_name VARCHAR(128) NOT NULL,
    c_isDisplay BIT,
    c_date DATETIME,
    c_size FLOAT,

    -- specify more columns here
);
GO
alter table CourseFile
add constraint FK_c_teachId 
	FOREIGN KEY(c_teachId) REFERENCES Teacher(t_id)
GO



------------------------插数据----------------------------
insert into Student(s_userName,s_passWord,s_sex,s_grade,s_subject,s_address,s_mobile)
values('赵微','123',1,'高一','英语','陕西西安','18202970787')

insert into Student(s_userName,s_passWord,s_sex,s_grade,s_subject,s_address,s_mobile)
values('李永辉','111',0,'高二','数学','陕西商洛','18202970786')


insert into Teacher(t_userName,t_passWord,t_sex,t_subject,t_grade)
values('刘洋','222',1,'数学','高二')

-----------------------------------------------
select s_id, s_userName,s_passWord,s_sex,s_grade,s_subject,s_address,s_mobilefrom student
where s_userName = '' and s_passWord = ''

select t_id,t_userName,t_passWord,t_sex,t_subject,t_grade from teacher
wherer t_userName = '' and t_passWord = ''
select a_id,a_userName,a_passWord,a_type  from SysAdmin

select com_id,com_from,com_to,com_context,com_isHandler from complaint
-------------------------------------------------------
update Teacher set t_userName = '', t_passWord = '',t_sex = ,t_subject = '',t_grade =''

update Student set s_userName = '',s_passWord = '',s_sex = ,s_grade = '',s_subject = '',s_address = '',s_mobile = ''


select * from student



