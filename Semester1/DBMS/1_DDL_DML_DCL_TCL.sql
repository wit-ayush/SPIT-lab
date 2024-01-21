CREATE DATABASE FYMCA_60;
USE FYMCA_60;
CREATE TABLE student ( student_id int, student_name varchar(20));
ALTER TABLE student ADD COLUMN age int, add column phone_no int;
ALTER TABLE student RENAME COLUMN student_name to sname;
ALTER TABLE student ADD COLUMN class varchar(20) after sname;
alter table student modify column sname varchar(30);
insert into student values (student_id, sname , class , age , phone_no), 
(1,"Sanjay","symca",23,242543),
(2,"Vaidehi","fymca",24,454354),
(3,"Akshata","symca",21,543543),
(4,"Vidula","fymca",22,435454),
(5,"pratik","symca",23,345435);
set sql_safe_updates=0;
update student set age=22 where student_id=3;
delete from student where student_id=5;


