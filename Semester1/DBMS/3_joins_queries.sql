
create database Bank_60;
use Bank_60;

-- Questions on Create Table--

create table deposit_60 ( 
	actno varchar(5) primary key,
    cname varchar(18),
	bname varchar(18),
	amount decimal(8,2),
    adate date
);

create table branch_60 ( 
	bname varchar(18) primary key,
    city varchar(18)
);

create table customer_60 ( 
	cname varchar(18) primary key,
    city varchar(18)
);

create table borrow_60 ( 
	loanno varchar(5) primary key,
    cname varchar(18),
    bname varchar(18),
    amount decimal(8,2)
);

-- Questions on Alter command--

alter table branch_60 rename column branch_name to bname;

alter table deposit_60 add (
	foreign key(cname) references customer_60(cname),
    foreign key(bname) references branch_60(bname)
);

alter table borrow_60 add (
	foreign key(cname) references customer_60(cname),
    foreign key(bname) references branch_60(bname)
);

-- Questions on Insetion--

insert into branch_60 values 
	('vrce', 'nagpur'),
    ('ajni', 'nagpur'),
    ('karolbagh', 'delhi'),
    ('chandni', 'delhi'),
    ('dharampeth', 'nagpur'),
    ('m.g.road', 'bangalore'),
    ('andheri', 'mumbai'),
    ('Virar', 'mumbai'),
    ('nehru place', 'delhi'),
    ('powai', 'mumbai')
;

insert into customer_60 values 
	('anil', 'kolkata'),
    ('sunil', 'delhi'),
    ('mehul', 'baroda'),
    ('mandar', 'patna'),
    ('madhuri', 'nagpur'),
    ('pramod', 'nagpur'),
    ('sandip', 'surat'),
    ('shivani', 'mumbai'),
    ('kranti', 'mumbai'),
    ('naren', 'mumbai')
;
  
insert into deposit_60 values
	('100', 'anil', 'vrce', 1001, '1995-03-01'),
    ('101', 'sunil', 'ajni', 5000, '1996-01-04'),
    ('102', 'mehul', 'karolbagh', 3500, '1995-11-17'),
    ('103', 'madhuri', 'chandni', 1200, '1995-12-17'),
    ('104', 'pramod', 'm.g.road', 3000, '1996-03-27'),
    ('105', 'sandip', 'andheri', 2000, '1996-03-31'),
    ('106', 'shivani', 'virar', 1001, '1995-09-05'),
    ('107', 'kranti', 'nehru place', 5000, '1995-07-02'),
	('108', 'naren', 'powai', 7000, '1995-08-10')
;

insert into borrow_60 values
	( '201', 'anil', 'vrce', 1000),
    ( '206', 'mehul', 'ajni', 5000),
    ( '311', 'sunil', 'chandni', 3000),
    ( '321', 'madhuri', 'andheri', 2000),
    ( '375', 'pramod', 'virar', 8000),
    ( '481', 'kranti', 'nehru place', 3000)
;

-- Questions on basic display--

select * from deposit_60;
select * from borrow_60;
select * from customer_60;          
select * from branch_60;          

-- Questions on where conditions--

select cname from  customer_60 where city = 'nagpur';                 
select cname from borrow_60 where loanno = '206';
select cname from deposit_60 where amount > 4000;
select cname from deposit_60 where adate > '1995-12-01';
select city from branch_60 where bname = 'karolbagh';         

-- Questions on Aggregate--

select sum(amount) from borrow_60;          
select count(distinct city) from customer_60;
select count(cname) from customer_60;
select max(amount) from borrow_60 where bname = 'vrce';

-- Questions on Updates--

SET SQL_SAFE_UPDATES = 0;
UPDATE deposit_60 SET amount = amount + amount * 0.1;
select amount from deposit_60;

UPDATE deposit_60 SET amount = amount + amount * 0.1 where bname='vrce';
select * from deposit_60 where bname = 'vrce';

-- Questions on deletes--

delete from deposit_60 where cname='shivani' and bname='virar';
select * from deposit_60; 

delete from customer_60 where city='mumbai';
select * from customer_60;
 
delete from deposit_60 where amount<5000;
select * from deposit_60;

-- Questions on Joins--

-- 1 --

select d1.cname from deposit_60 as d1 
join deposit_60 as d2 
on d1.bname = d2.bname where d2.cname = 'sunil';

-- 2 --

select b1.loanno, b1.amount from borrow_60 as b1 
inner join deposit_60 as d1 
on b1.bname = d1.bname where d1.cname = 'sunil';

-- 3 --

select * from deposit_60 as d1 
inner join customer_60 as c1 
on d1.cname = c1.cname where c1.city = 'nagpur';

-- 4 --

select d1.cname from deposit_60 d1 
join deposit_60 d2 using (bname) where d1.cname = 'sunil';

select * from deposit_60;
-- 5 --

select cname from deposit_60 where amount = (select max(amount) from deposit_60);

-- 6 --

select cname from deposit_60 where amount = (
	select max(amount) from deposit_60 as d1 
    inner join customer_60 as c1 
    on d1.cname = c1.cname 
    where c1.city = 'nagpur'
);

-- 7 --

select bname, count(bname) as num from deposit_60
group by bname
order by count(bname) desc;

-- 8 --

select max(d1.amount) from deposit_60 as d1 
where d1.bname = (select bname from deposit_60 where cname = 'sunil');

-- 9 --

select c.cname from customer_60 as c join deposit_60 as d using (cname)
where d.amount > (select avg(amount) from deposit_60 as avg1 where avg1.bname 
= d.bname);

-- 10 --

select bname, count(bname) as num from deposit_60 group by bname having count(bname) < 2;

-- 11 --

select distinct b1.city, b1.bname, count(b1.city) as num from branch_60 as b1 
join customer_60 as c1 using (city) where b1.bname = '' group by b1.bname;

-- 12 --

UPDATE customer_60 SET city = 'nagpur' 
where cname = (select cname from borrow_60 where bname = 'vrce');

-- 13 --

set SQL_SAFE_UPDATES=0;

UPDATE deposit_60 set amount = (
	select a from (
		select max(d1.amount) as a from deposit_60 as d1 join branch_60 as b1 using (bname) where b1.city = 'nagpur' 
	) as res
)
WHERE cname = 'anil';

-- 14 --

UPDATE deposit_60 as sender
JOIN deposit_60 as receiver ON sender.cname = 'anil' AND receiver.cname = 'sunil'
SET sender.amount = sender.amount - 100, receiver.amount = receiver.amount + 100;

-- 15 --

update deposit_60 as a
join(
select b.bname, max(amount) as maxamt
from deposit_60 as b
group by b.bname
) as maxdep
on a.bname = maxdep.bname
set a.amount = a.amount + 100
where a.amount = maxdep.maxamt;

-- 16 --

delete b from branch_60 b
join
deposit_60 d
on b.bname = d.bname
join
customer_60 c
on d.cname = c.cname
where c.city = 'Nagpur';

-- 17 --

delete d
from deposit_60 d
join customer_60 a using (cname)
join customer_60 b using (cname)
where a.cname = 'anil' and b.cname = 'sunil' and a.city = b.city;

-- 18 --

delete from borrow_60 where bname in (
  select bname from (
	select bname, count(cname) as cust_count 
	from customer_60 
	group by bname
	order by cust_count
	limit 1
  ) as cust_branch
); 

-- 19 --

select d.cname from deposit_60 d
inner join
borrow_60 b
using (cname)
where d.cname = b.cname;

select * from deposit_60;

-- 20 --

select cname from deposit_60
where cname not in (select cname from borrow_60);

-- 21 --

select cname from deposit_60
join
customer_60
using (cname)
where city = (select city from customer_60 where cname = 'sunil')
union
select cname from deposit_60 a
where bname = (select bname from deposit_60 where cname = 'anil'); 


-- 22 --

select cname from deposit_60
join
customer_60
using (cname)
where city = (select city from customer_60 where cname = 'shivani')
and amount <= 5000;

-- 23 --

select cname from customer_60
join
deposit_60
using (cname)
where bname = (select bname from deposit_60 where cname = 'sandip')
and city = 'mumbai';

-- 24 --

select bname, sum(amount)
from branch_60
left join
deposit_60
using (bname)
group by bname;

-- 25 --

update deposit_60 a
set a.amount = a.amount + 100
where a.amount >= (
select avg(b.amount) from deposit_60 b where bname = 'to-do'
);

-- 26 --

select cname from deposit_60 order by amount limit 1 offset 2;

-- 27 --

select cname from deposit_60
where cname in (select a.cname from customer_60 a)
order by cname;



