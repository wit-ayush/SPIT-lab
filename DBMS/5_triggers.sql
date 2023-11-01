create database lab_5;
use lab_5;

create table emp_60 ( 
	emp_name varchar(10),
    occupation varchar(30),
	workingDate date,
    workingHour int
);

insert into emp_60 values 
	('Harsh', 'Scientist', '2020-10-21', 12),
    ('Raj', 'Engineer', '2020-8-11', 10),
    ('Ravi', 'Actor', '2020-10-22', 10),
    ('Rahul', 'Doctor', '2020-10-04', 11)
;

insert into emp_60 values 
	('Jai', 'Driver', '2020-5-23', -12)
;

create table emp_audit_60 ( 
	emp_name varchar(10),
    audit_description varchar(100)
);

create table emp_change_60 ( 
	emp_name varchar(10),
    new_occupation varchar(30),
    old_occupation varchar(30),
	changeDate datetime
);

create table emp_archeives_60 (
	emp_ame varchar(20), 
    occupation varchar(20), 
	workingDate date,
    workingHour int,
    deletedat date
);

create table working_hr_60 (id int primary key, total_hr int );
insert into working_hr_60 values (1, 63);

insert into emp_60 values ('ram', 'fire-fighter', '2020-02-13', 20);

insert into emp_60 values ('ramu', 'athlete', '2024-02-13', 24);

SET SQL_SAFE_UPDATES = 0;
update emp_60 set occupation = 'athlete' where emp_name = 'Jai';

delete from emp_60 where emp_name = 'Rahul';

select * from emp_60;
select * from emp_change_60;
select * from emp_audit_60;
select * from emp_archeives_60;
select * from working_hr_60;

