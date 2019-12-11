use master
go
if exists(select * from sysdatabases where name='jinzhibook')
	drop database jinzhibook
go
create database jinzhibook
go
use jinzhibook
go
-------------------1ͼ������--------------------
create table bookType(
	bookTypeId int identity primary key,--ͼ�������
	parentId int not null,--�����
	bookTypeName varchar(20) not null,--ͼ���������
	context varchar(40),	--��ע
	isDelete int not null --1Ϊ���ã�0Ϊ������
)
go
alter table bookType 
	add constraint DF_isDelete default (1) FOR isDelete
go
-------------------ͼ�������Ϣ���--------------------
create table bookInfo(
	bookId	int	identity primary key,--	ͼ����
	bookName  varchar(20)	not null,--	ͼ������
	booktypeId	int	not null, --ͼ�������
	author	varchar(20)	not null,--	����
	pbName	varchar(20)	not null,--	����������
	context	varchar(200) not null,--ͼ�����
	smallImg varchar(20) not null,--ͼ��ͼƬ
	bigImg	varchar(20)	not null,--ͼ��ͼƬ
	price	money		not null,--	�۸�
	pbdate	datetime		not null,--	��������
	hyprice	money		not null,--	��Ա��
	bookStates	int		not null,--	ͼ��״̬ 0������  1δ�ϼ�  2�ϼ�  3 ȱ��
	sjdate	datetime,--			�ϼ�����
	num	int		not null,--	�����
	saleCount	int	not null,	--�ۻ�������
	isDel int not null --1Ϊ���ã�0Ϊ������
)
go
alter table bookInfo
add constraint FK_booktypeId 
	FOREIGN KEY(booktypeId) REFERENCES bookType(booktypeId)
alter table bookInfo 
	add constraint DF_bookStates default (1) FOR bookStates
alter table bookInfo 
	add constraint DF_saleCount default (0) FOR saleCount
go
alter table bookInfo 
	add constraint DF_isDel default (1) FOR isDel
go

------------------------�û�������Ϣ��------------------------
create table customerInfo(
	custId	int identity primary key,--	���
	custName varchar(100) not null,--	�ͻ�����
	pwd	varchar(20)		not null,--	�û�����
	email	varchar	(20)	not null --	����
)
  alter table customerInfo
	add CONSTRAINT chk_email 
		CHECK (charindex('@',email)>1 and charindex('.',email)>1)

go

------------------------�û���ϸ��Ϣ��------------------------

create table customerDetailInfo(
	custId	int primary key,      --PK FK	���
	tel	varchar(13) not null, --��ϵ�绰
	address	varchar(20),--		��ַ
	sex	int not null,--	�Ա�
	age	int	,--����
	countMoney	money, --�ۼ����ѽ��
	qq int --QQ
)
--drop table customerDetailInfo
alter table customerDetailInfo
	add constraint FK_custId
		FOREIGN KEY(custId) REFERENCES customerInfo(custId)
alter table customerDetailInfo 
	add constraint DF_sex default (1) FOR sex
alter table customerDetailInfo
   add constraint CK_tel
	 check(tel LIKE    '13[5-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'
			 or tel LIKE '0[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'
			 or tel LIKE '0[0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'
			 or tel LIKE '15[5-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')
go



------------------------������------------------------------
create table bookDiscuss(
	disId 	int identity(1,1) primary key,--�������
	bookId 	int	,	--ͼ����
	custId	int	,	--�û����
	context varchar(100) not null,--��ע
	states 	varchar(20)	not null	--����״̬
)
alter table bookDiscuss
add constraint FK_bookId
	FOREIGN KEY(bookId) REFERENCES bookInfo(bookId)
alter table bookDiscuss
add constraint FK_custIdDC
	FOREIGN KEY(custId) REFERENCES customerInfo(custId)



------------------------�ղؼб�----------------------------
create table favorite(
	favoriteId 	int	identity(1,1) primary key,--	�ղؼк�
	bookId 	int	not null,--ͼ����
	custId	int	not null,--�û����
	date 	datetime	not null,--	�ղ�ʱ��
	context varchar(100)	not null--	��ע
)
alter table favorite
add constraint FK_bookIdFR
	FOREIGN KEY(bookId) REFERENCES bookInfo(bookId)
alter table favorite
add constraint FK_custIdDCFR
	FOREIGN KEY(custId) REFERENCES customerInfo(custId)



------------------------����Ա��----------------------------
create table sysAdmin(
	adminId 	int	identity(1,1) primary key,	--����Ա���
	adminName 	varchar(20),	--	����Ա����
	pwd 	varchar(20),	--	����Ա����
	adminType 	int	not null--	����Ա����
)
-----------------��������-----------------
--drop table OrderMain
create table OrderMain(
	orderNum	varchar(20)  primary key, 	  --�������    PK
	customerId	int      not null,                --�ͻ����    FK
	customerName	varchar(20) ,          		  --�ջ�������		
	tel	        varchar(20)  not null,    	  --�ջ��˵绰		
	address		varchar(100)  not null,   	  --�ջ���ַ	
	status		char(1) ,        		  --���۵�״̬��0-δ����1-�Ѵ���2-�Է�����3-���ջ���
	adminId		int  ,   		  --�����˱��  FK
	context		varchar(100) not null,	          --��ע
	sumprice	 money not null                   --�ܼ�
)
go
alter table OrderMain
add constraint FK_customerId
	FOREIGN KEY(customerId) REFERENCES customerInfo(custId)
alter table OrderMain
add constraint FK_adminId
	FOREIGN KEY(adminId) REFERENCES sysAdmin(adminId)



-----------------������ϸ��-----------------
--drop table orderDetail
create table orderDetail(
	detail		int  identity primary key,   --��ϸ���   PK
	orderNum	varchar(20) not null,        ---����ID    FK
	bookId		int not null,  		     --��Ʒ���   FK
	num		int not null,  		     --��������
)
go
alter table orderDetail
add constraint FK_orderNum
	FOREIGN KEY(orderNum) REFERENCES OrderMain(orderNum)
alter table orderDetail
add constraint FK_bookIdR
	FOREIGN KEY(bookId) REFERENCES bookInfo(bookId)



-----------------ÿ�ű����ٲ���������������-----------------

------------ͼ�������������
insert into bookType(parentId,bookTypeName,context,isDelete) values (0,'С˵','����ͨ����������������¡���ѧ���',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (0,'��ѧ','���󻯵ط�ӳ�͹���ʵ������',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (1,'�й�����С˵','50���������ѧʷ����',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (1,'���С˵','�й���ѧ��������������ѧ',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (2,'ʫ�����','���������ǵ���ʷ�',1)

select * from bookType
------------ͼ�������Ϣ����������
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					 smallImg,bigImg,price,pbdate,hyprice,
					 bookStates,sjdate,num,saleCount) 
			values('��¹ԭ',3,'����ʵ','������������漯��','�׼�����������Ϊ��׳����һ����Ȣ���߷�Ů��',
					'bailuyuan.jpg','bailuyuan.jpg',36.0,'2008-05-01',23.9,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('�غ���',3,'��������','�������ϳ��湫˾','��а�����ƽ�����������õ�ͻȻ��ö�����ϡ�',
					'zhanghaihua.jpg','zhanghaihua.jpg',32.0,'2012-08-01',22.6,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('����',3,'�໪','���ҳ�����','�����š���һƪ���������˸е����ص�С˵',
					'huozhe.jpg','huozhe.jpg',15.0,'2010-11-01',8.3,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('��ͼ��',3,'����','�������ճ����� ','����ͼ�ڡ��ɼ�ʮ���л�����ġ��ǹ��¡�һ���ǳ�',
					'langtuteng.jpg','langtuteng.jpg',32.0,'2004-04-01',21.2,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('������ʱ��',3,'ͩ��','�������ճ�����','ȫ��������Ψ������������Ű�ĵĶ��а���С˵',
					'zuimeideshiguang.jpg','zuimeideshiguang.jpg',32.0,'2012-08-01',19.8
					,1,null,100,0)

insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('�������꣨���Ҷ��ư�',3,'����','�й����ȳ�����','һ���йسɳ����ı��Ѱ�����ҵĹ��¡�',
					'beijingqingnian.jpg','beijingqingnian.jpg',48.0,'2012-08-01',31.9
					,1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('��˹�ֵ�����',3,'����','����ʮ�����ճ�����','һ����˹�ּ��壬��ʮ������˥�����������˵ĳ���',
					'musilindezangli.jpg','musilindezangli.jpg',36.0,'2007-08-01',24.0,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('��β��',3,'����','���ֳ��漯��','һ���������ʮ��Ļ�֮���桢��֮���ϡ�',
					'wuweigou.jpg','wuweigou.jpg',32.8,'2012-07-01',21.6,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
values('��������Ѫ��',3,'�໪ ',' ���ҳ�����','������20�����й����ļ��屯��',
					'xsguanmaixueji.jpg','xsguanmaixueji.jpg',19.0,'2012-07-01',10.5,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('����֮ˮ',3,'����','������ѧ������','����һ�����˾�����С˵����һ�ֵ����������ζ��',
					'canglangzhishu.jpg','canglangzhishu.jpg',33.0,'2008-05-01',23.1
					,1,null,100,0)

insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('���ܳ��ܵ�����֮��',4,'������������','�Ϻ����ĳ�����','������صĸ���ѹ�������ǣ�������������',
					'bnchengssmzq.jpg','bnchengssmzq.jpg',29,'2010-08-01',18.9,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice
					,bookStates,sjdate,num,saleCount) 
			values('����',4,'����������ɭ�������','�Ϻ����湫˾','��ʮһ���͵ĵ�һ��ʮ�꾭����������ʧ�ܡ�',
					'ziyou.jpg','ziyou.jpg',49.5,'2008-05-01',35.1,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('׷���ݵ���',4,'������������','�Ϻ����������','12��İ�����������ү���׶������˹�ɣ��ͬ����',
					'zhuifzderen.jpg','zhuifzderen.jpg',25.0,'2006-05-01',16.3,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('���������',4,'����������','������ѧ������','�������а��ɶࡤ������������Ʒ����',
					'dfqimima.jpg','dfqimima.jpg',29.0,'2009-05-01',22.2,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('��ͼ',4,'��Ӣ�����������ж�','�Ϻ����ճ�����','��ѡ����ǧ�����С˵����Χ���˽������ƽ��������˽���ѡ',
					'yunhai.jpg','yunhai.jpg',33,'2010-01-01',23.8,
					1,null,100,0)

insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('����������ʫ��',5,'�ڵ�','�������ϳ��湫˾','���ڵ�һ������������ʫ�ʣ��ع����ڴ�������',
					'cwzuimeigsc.jpg','cwzuimeigsc.jpg',38,'2012-06-01',30.4,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('��ʫ���ʹǵ�',5,'���ӷǣ���','�Ϻ����������','�ԡ���ʫ���ʹǵ䡷Ϊ�������ѧ���ʹǵ�ϵ��',
					'tsjsbaodian.jpg','tsjsbaodian.jpg',58,'1983-12-01',37.7,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('���δʼ��ʹǵ�',5,'�����','�Ϻ����������','�Ϻ�����������й���ѧ���ʹǵ�ϵ������ҪƷ��',
					'tscjschidian.jpg','tscjschidian.jps',36,'2011-03-01',23.9,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('��ѫ˵�δ�',5,'��ѫ',' �������������',' ��ѫ˵�����δ��У���������һ�ֱ����밲��',
					'jiangxunssc.jpg','jiangxunssc.jpg',35.8,'2011-01-01',25.7,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('ϯĽ��ʫ��',5,'ϯĽ��',' ���ҳ�����','��ϯĽ��ʫ������װ��6�ᣩ�������С������㡷������Թ���ഺ��',
					'murongsj.jpg','murongsj.jpg',108,'2008-05-01',68.7,
					1,null,100,0)

select * from bookInfo
------------�û��������������
insert into customerInfo(custName,pwd,email) values ('���Ǳ�','123456','766528@qq.com')
insert into customerInfo(custName,pwd,email) values ('С��','123456','asdasd@163.com')
insert into customerInfo(custName,pwd,email) values ('��Ң','123456','akksd@yahu.com')
insert into customerInfo(custName,pwd,email) values ('���ʷ�','123456','aaaaaa@qq.com')
insert into customerInfo(custName,pwd,email) values ('������','123456','qqqqqq@qq.com')
select * from customerInfo

------------�û���ϸ��Ϣ���������
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(1, '13545698425','������','0',21,125.6,'766528')
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(3, '15885695429','������','0',18,5.6,'8885328')
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(5, '15999668489','������','0',23,25.6,'766528')
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(4, '15845698425','����·','0',22,1225.6,'766528')


select * from customerDetailInfo

------------�������������

insert into bookDiscuss(bookId,custId,context,states) values(1,3,'������Ǿ��䣬����ϰһ��','1')
insert into bookDiscuss(bookId,custId,context,states) values(12,1,'������Ҳ�Ҫ��','0')
insert into bookDiscuss(bookId,custId,context,states) values(7,3,'���������о��䣬�Ƽ��ۿ�','1')
insert into bookDiscuss(bookId,custId,context,states) values(16,2,'�ڶ������ˣ������Ѵ�һ��','1')
insert into bookDiscuss(bookId,custId,context,states) values(17,5,'�ܺÿ�����ϲ��','1')
select * from bookDiscuss

------------�ղؼб��������
insert into favorite(bookid,custid,date,context) values(16,1,'2012-03-01','�������')
insert into favorite(bookid,custid,date,context) values(10,3,'2007-02-03','��ϲ������')
insert into favorite(bookid,custid,date,context) values(7,2,'2012-04-27','�ڴ�����')
insert into favorite(bookid,custid,date,context) values(6,4,'2002-07-01','С˵�����')
insert into favorite(bookid,custid,date,context) values(11,3,'2010-03-01','��ѧ����')
select * from favorite

------------����Ա���������
insert into sysAdmin(adminName,pwd,adminType) values('admin','admin',3)
insert into sysAdmin(adminName,pwd,adminType) values('guest','guest',2)
insert into sysAdmin(adminName,pwd,adminType) values('user','user',1)
insert into sysAdmin(adminName,pwd,adminType) values('head','head',2)
insert into sysAdmin(adminName,pwd,adminType) values('boss','boss',3)
select * from sysAdmin

create table student(
	stuId int identity not null,
	stuName varchar(20) not null,
	stuAge int not null,
	stuBtd datetime not null,
	stuSex bit not null,
	stuTel char(11) not null,
	isDelete bit not null
)
go
alter table student 
	add constraint DF_student_isDelete default (1) FOR isDelete
go
insert into student(stuName, stuAge, stuBtd, stuSex, stuTel) values('lisi',22,'1999-9-9',1, '8888888')
select * from student

select stuId,stuName, stuAge, stuBtd, stuSex, stuTel,isDelete from student

---------------------------------------------------------
--update student set stuName = 'lisi2',stuAge = 10, stuBtd = '',stuSex = 1 , stuTel = '',isDelete =  1;

select * from bookType

select * from bookInfo

--select * from customerInfo

select * from customerDetailInfo