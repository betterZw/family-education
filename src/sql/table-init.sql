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
CREATE TABLE Student
(
    s_id INT NOT NULL PRIMARY KEY, -- primary key column
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
CREATE TABLE Teacher
(
    t_id INT NOT NULL PRIMARY KEY, -- primary key column
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
CREATE TABLE SysAdmin
(
    a_id INT NOT NULL PRIMARY KEY, -- primary key column
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
CREATE TABLE Message
(
    m_id INT NOT NULL PRIMARY KEY, -- primary key column
    m_from INT NOT NULL, -- 信息发送来�? 老师或学生id
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
CREATE TABLE Complaint
(
    com_id INT NOT NULL PRIMARY KEY, -- primary key column
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
CREATE TABLE CourseFile
(
    c_id INT NOT NULL PRIMARY KEY, -- primary key column
    c_teachId INT NOT NULL,
    c_path VARCHAR(512) NOT NULL,
    c_name VARCHAR(128) NOT NULL,
    c_isDisplay BIT,
    c_date DATETIME,
    c_size FLOAT,

    -- specify more columns here
);
GO






