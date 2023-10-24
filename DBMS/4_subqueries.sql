create database lab3_60;
drop database lab3_60;
use lab3_60;

create table branch_60(bname varchar(18) primary key,
city varchar(18)
);

create table customer_60(cname varchar(18) primary key,
city varchar(18));

create table deposit_60(actno varchar(5) primary key,
cname varchar(18),
bname varchar(18),
amount decimal(8,2),
adate date,
foreign key (cname) references customer_60(cname),
foreign key (bname) references branch_60(bname)
on delete cascade
);

create table borrow_60(loan_no varchar(5) primary key,
cname varchar(18),
bname varchar(18),
amount decimal(8, 2),
foreign key (cname) references customer_60(cname),
foreign key (bname) references branch_60(bname)
on delete cascade
);

insert into customer_60 values ('anil', 'kolkata'),
('sunil', 'delhi'),
('mehul', 'baroda'),
('mandar', 'patna'),
('madhuri', 'nagpur'),
('pramod', 'nagpur'),
('sandip', 'surat'),
('shivani', 'mumbai'),
('kranti', 'mumbai'),
('naren', 'mumbai');

insert into branch_60 values ('vrce', 'nagpur'),
('ajni', 'nagpur'),
('karolbagh', 'delhi'),
('chandni', 'delhi'),
('dharampeth', 'nagpur'),
('.m.g.road', 'bangalore'),
('andheri', 'mumbai'),
('virar', 'mumbai'),
('nehru place', 'delhi'),
('powai', 'mumbai');

insert into deposit_60 values (101, 'anil', 'vrce', 1001, '1995-03-01'), 
(102, 'sunil', 'ajni', 5000, '1996-01-04'),
(103, 'mehul', 'karolbagh', 3500, '1995-11-17'),
(104, 'madhuri', 'chandni', 1200, '1995-12-17'),
(105, 'pramod', '.m.g.road', 3000, '1996-03-27'),
(106, 'sandip', 'andheri', 2000, '1996-03-31'),
(107, 'shivani', 'virar', 1001, '1995-09-05'),
(108, 'kranti', 'nehru place', 5000, '1995-07-02'),
(109, 'naren', 'powai', 7000, '1995-08-10');

insert into borrow_60 values (201, 'anil', 'vrce', 1000),
(206, 'mehul', 'ajni', 5000),
(311, 'sunil', 'chandni', 3000),
(321, 'madhuri', 'andheri', 2000),
(375, 'pramod', 'virar', 8000),
(481, 'kranti', 'nehru place', 3000);

select * from deposit_60;
select * from borrow_60;

truncate table customer_60;
truncate table borrow_60;
truncate table deposit_60;
truncate table branch_60;
set foreign_key_checks = 0;

select cname from customer_60 where city = 'Nagpur';
select cname from borrow_60 where loan_no = 206;
select cname from deposit_60 where amount >  4000;
select cname from deposit_60 where adate > '1995-12-01';
select city from branch_60 where bname = 'karolbagh';
select sum(amount) from borrow_60;
select distinct count(city) from customer_60;
select distinct count(cname) from customer_60;
select max(amount) from borrow_60 where bname = 'vrce';
set SQL_SAFE_UPDATES = 0;
update deposit_60 set amount = 1.1 * amount;
select * from deposit_60;
update deposit_60 set amount = 1.1 * amount where bname = 'vrce';
select * from deposit_60 where bname = 'vrce';
delete from deposit_60 where bname = 'Virar' and cname = 'Shivani';
select * from deposit_60;
set FOREIGN_KEY_CHECKS = 0;
delete from customer_60 where city = 'Mumbai';
select * from customer_60;
delete from deposit_60 where amount < 5000;

-- Sub queries --
-- List names of depositors having same branch as the branch as SUNIL --
select a.cname from deposit_60 a where a.bname in 
(select b.bname from deposit_60 b where b.cname = 'sunil');

-- List LoanNo and LoanAmount of borrowers having the samebranch as the of depositor SUNIL --
select a.loan_no, a.amount
from borrow_60 a, borrow_60 b
where a.bname = b.bname and b.cname = 'sunil';
select loan_no, amount from borrow_60 where bname = 
(select bname from borrow_60 where cname = 'sunil');

-- List all depositors living in Nagpur --
select cname from deposit_60 where cname in
(select cname from customer_60 where city = 'nagpur');

-- List all depositors having deposit in all the branches where SUNIL is having account --
select d.cname from deposit_60 d where d.bname in
(select bname from borrow_60 where cname='sunil') or d.bname in
(select e.bname from deposit_60 e where d.cname = 'sunil');

-- List names of customers having maximum deposit --
select distinct a.cname from
deposit_60 a, deposit_60 b
where a.amount = (select max(b.amount) from deposit_60 b);

-- List names of customers having maximum deposit in thecustomers living in Nagpur --
select a.cname from deposit_60 a where a.amount = 
(select max(b.amount) from deposit_60 b where b.cname in
(select cname from customer_60 where city = 'nagpur'));

-- List names of branches having highest depositors --
select a.bname from deposit_60 a
join deposit_60 b
where b.amount in (select max(amount) from deposit_60)
group by a.bname;

select bname from branch_60 where bname in
(select bname from deposit_60 group by bname having count(*) = 
(select max(depositors) from (select count(*) as depositors from deposit_60 group by bname) as deposits));

select bname from deposit_60 where amount = (select max(amount) from deposit_60) group by bname;

-- List highest deposit of city where branch of sunil is located --
select max(d.amount) from deposit_60 d
where d.bname in (select bname from branch_60 where city =
(select city from customer_60 where cname = 'sunil'));

-- List names of customers having more deposit than average deposit in their respective branches --
select cname
from deposit_60
where amount > (select avg(amount) from deposit_60)
order by bname;

select d.cname from deposit_60 d where
d.amount > (select avg(amount) from deposit_60 where d.cname  = cname);

select * from deposit_60;

-- List names of branches where number of depositors is less than 2 --
select bname
from deposit_60
group by bname
having count(bname) < 2;

-- Count number of customers living in the city where branch andheri is located --
select count(cname) from customer_60 where city = 
(select city from branch_60 where bname = 'andheri');

-- Change the living city of VRCE branch borrowers to Nagpur --
set sql_safe_updates = 0;
update customer_60
set city = 'nagpur'
where cname  in (select distinct cname from borrow_60 where bname = 'vrce');
select * from customer_60;

-- Update deposit of Anil. Give him maximum deposit from depositors living in city Nagpur --
update deposit_60 d
set d.amount = (select maxamt 
from (select max(de.amount) as maxamt from deposit_60 de where de.cname in 
(select c.cname from customer_60 c where c.city = 'Nagpur')) as res)
where d.cname = 'anil';
select * from deposit_60;

-- Transfer Rs 100 from account Anil to account Suil if both are having the same branch --
update deposit_60 a, deposit_60 b
set a.amount = 
(case
when a.bname = b.bname then a.amount = a.amount + 100 and b.amount = b.amount - 100
end)
where a.cname = 'sunil' and b.cname = 'anil';
select * from deposit_60;

-- Add Rs 100 to all depositors having highest deposits in their respective branches --
update deposit_60 as a set a.amount = a.amount + 100 where cname in
(select distinct cname from deposit_60 where amount in
(select max(amount) from deposit_60 group by bname));

set sql_safe_updates = 0;
update deposit_60 set amount= amount + 100 where amount in
(select amount from 
(select max(d.amount) from deposit_60 as d group by bname) as maxamt);
select * from deposit_60;
drop table deposit_60;

-- Delete branches having depositors from Nagpur --
delete b from branch_60 b
join
deposit_60 d
on b.bname = d.bname
join
customer_60 c
on d.cname = c.cname
where c.city = 'Nagpur';
select * from branch_60;

delete b from branch_60 b where bname in 
(select bname from deposit_60 where cname in 
(select cname from customer_60 where city = 'nagpur'));
select * from branch_60;

-- delete deposit of Anil and Sunil if both are living in the same city --
delete d
from deposit_60 d
join customer_60 a using (cname)
join customer_60 b using (cname)
where a.cname = 'anil' and b.cname = 'sunil' and a.city = b.city;

delete d from deposit_60 d, deposit_60 e
where d.cname = 'anil' and e.cname = 'sunil';
select * from deposit_60;

-- Delete borrower of branches having minimum number of customers --
select * from borrow_60;
set sql_safe_updates = 0;
delete from borrow_60
where bname in (select bname from 
(select bname, count(cname) as cust_count 
from customer_60 
group by bname
order by cust_count
limit 1
) as cust_branch
); 

-- list names of customers who are depositors as well as borrowers --
select deposit_60.cname from deposit_60, borrow_60
where deposit_60.cname = borrow_60.cname;

select cname from deposit_60 where cname in
(select cname from borrow_60);

-- list all customers who are depositors and not borrowers --
select cname from deposit_60
where cname not in (select cname from borrow_60);

-- list depositors having same living city as Sunil and same branch as Anil --
select cname from deposit_60
join
customer_60
using (cname)
where city = (select city from customer_60 where cname = 'sunil') and bname = 
(select bname from deposit_60 where cname = 'anil');

select cname from deposit_60
where cname in (select city from customer_60 where cname = 'sunil' or bname = 
(select bname from deposit_60 where cname = 'sunil'));

SELECT c.cname
FROM customer_60 c, deposit_60 d
WHERE city = (
    SELECT a.city
    FROM customer_60 a
    WHERE a.cname = 'sunil'
    AND a.bname = (
        SELECT bname
        FROM deposit_60
        WHERE cname = 'anil'
    )
)
AND c.cname = d.dname;


select d.cname from deposit_60 d where d.bname in 
(select e.bname from deposit_60 e where e.cname = 'anil') 
and d.cname in (select cname from customer_60 where city =
(select city from customer_60 where cname='sunil'));

-- list depositors having amount less than 5000 and living in the same city as shivani --
select cname from deposit_60
join
customer_60
using (cname)
where city = (select city from customer_60 where cname = 'shivani')
and amount <= 5000;

-- list customers who are borrowers or depositors living in Mumbai and having branch city same as that of Sandip --
select * from customer_60;
select cname from customer_60
join
deposit_60
using (cname)
where bname = (select bname from deposit_60 where cname = 'sandip')
and city = 'mumbai';

-- list branch name and branch wise deposit --
select bname, sum(amount)
from branch_60
left join
deposit_60
using (bname)
group by bname;

select bname, 
(select sum(amount) from deposit_60 as d where d.bname = b.bname) as branch_deposit from branch_60 b;

-- Add 100 to amount of all depositors having deposit higher than the average deposit of their branch --
update deposit_60 a
set a.amount = a.amount + 100
where a.amount >= (
select avg(b.amount) from deposit_60 b where bname = 'to-do'
);

-- list name of depositor who has third highest amount --
select cname from deposit_60
order by amount
limit 1
offset 2;

-- list names of depositors according to ascending order of names --
select cname from deposit_60
where cname in (select a.cname from customer_60 a)
order by cname;