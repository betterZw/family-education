-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'family_education'
)
CREATE DATABASE family_education
GO


-- Create a new table called 'Student' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.Student', 'U') IS NOT NULL
DROP TABLE SchemaName.Student
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.Student
(
    s_id INT NOT NULL PRIMARY KEY, -- primary key column
    s_userName varchar(16) NOT NULL,
    s_passWord varchar(16) NOT NULL,
    s_sex BIT,
    s_grade VARCHAR(16),
    s_subject VARCHAR(32),
    s_address VARCHAR(512),
    s_mobile CHAR(11),
    -- specify more columns here
);
GO


-- Create a new table called 'Teacher' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.Teacher', 'U') IS NOT NULL
DROP TABLE SchemaName.Teacher
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.Teacher
(
    t_id INT NOT NULL PRIMARY KEY, -- primary key column
    Column1 [NVARCHAR](50) NOT NULL,
    Column2 [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO

