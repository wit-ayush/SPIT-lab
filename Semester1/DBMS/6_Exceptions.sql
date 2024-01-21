Create database college;
use college;

CREATE TABLE student (
	rollno INT, s_name varchar(30)
);

insert into student values 
	(1, "Avi"),
    (2, 'Ravi'),
    (2, 'kavi'),
    (2, 'yavi')
;

CALL Q1();
CALL Q2();

Create database flipkart;
use flipkart;
drop table SupplierProducts ;
CREATE TABLE SupplierProducts (
	supplierId INT, productId INT, PRIMARY KEY (supplierId , productId)
);

select * from SupplierProducts;
CALL Q3(1,1);
CALL Q3(1,2);
CALL Q3(1,3);
-- This should give error -- 
CALL Q3(1,3);

