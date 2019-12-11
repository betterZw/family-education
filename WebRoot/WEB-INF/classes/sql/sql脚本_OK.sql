use master
go
if exists(select * from sysdatabases where name='jinzhibook')
	drop database jinzhibook
go
create database jinzhibook
go
use jinzhibook
go
-------------------1图书类别表--------------------
create table bookType(
	bookTypeId int identity primary key,--图书类别编号
	parentId int not null,--父编号
	bookTypeName varchar(20) not null,--图书类别名称
	context varchar(40),	--备注
	isDelete int not null --1为可用，0为不可用
)
go
alter table bookType 
	add constraint DF_isDelete default (1) FOR isDelete
go
-------------------图书基本信息别表--------------------
create table bookInfo(
	bookId	int	identity primary key,--	图书编号
	bookName  varchar(20)	not null,--	图书名称
	booktypeId	int	not null, --图书类别编号
	author	varchar(20)	not null,--	作者
	pbName	varchar(20)	not null,--	出版社名称
	context	varchar(200) not null,--图书介绍
	smallImg varchar(20) not null,--图书图片
	bigImg	varchar(20)	not null,--图书图片
	price	money		not null,--	价格
	pbdate	datetime		not null,--	出版日期
	hyprice	money		not null,--	会员价
	bookStates	int		not null,--	图书状态 0不可用  1未上架  2上架  3 缺货
	sjdate	datetime,--			上架日期
	num	int		not null,--	库存量
	saleCount	int	not null,	--累积销售量
	isDel int not null --1为可用，0为不可用
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

------------------------用户基本信息表------------------------
create table customerInfo(
	custId	int identity primary key,--	编号
	custName varchar(100) not null,--	客户名称
	pwd	varchar(20)		not null,--	用户密码
	email	varchar	(20)	not null --	邮箱
)
  alter table customerInfo
	add CONSTRAINT chk_email 
		CHECK (charindex('@',email)>1 and charindex('.',email)>1)

go

------------------------用户详细信息表------------------------

create table customerDetailInfo(
	custId	int primary key,      --PK FK	编号
	tel	varchar(13) not null, --联系电话
	address	varchar(20),--		地址
	sex	int not null,--	性别
	age	int	,--年龄
	countMoney	money, --累计消费金额
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



------------------------书评表------------------------------
create table bookDiscuss(
	disId 	int identity(1,1) primary key,--书评编号
	bookId 	int	,	--图书编号
	custId	int	,	--用户编号
	context varchar(100) not null,--备注
	states 	varchar(20)	not null	--书评状态
)
alter table bookDiscuss
add constraint FK_bookId
	FOREIGN KEY(bookId) REFERENCES bookInfo(bookId)
alter table bookDiscuss
add constraint FK_custIdDC
	FOREIGN KEY(custId) REFERENCES customerInfo(custId)



------------------------收藏夹表----------------------------
create table favorite(
	favoriteId 	int	identity(1,1) primary key,--	收藏夹号
	bookId 	int	not null,--图书编号
	custId	int	not null,--用户编号
	date 	datetime	not null,--	收藏时间
	context varchar(100)	not null--	备注
)
alter table favorite
add constraint FK_bookIdFR
	FOREIGN KEY(bookId) REFERENCES bookInfo(bookId)
alter table favorite
add constraint FK_custIdDCFR
	FOREIGN KEY(custId) REFERENCES customerInfo(custId)



------------------------管理员表----------------------------
create table sysAdmin(
	adminId 	int	identity(1,1) primary key,	--管理员编号
	adminName 	varchar(20),	--	管理员姓名
	pwd 	varchar(20),	--	管理员密码
	adminType 	int	not null--	管理员级别
)
-----------------订单主表-----------------
--drop table OrderMain
create table OrderMain(
	orderNum	varchar(20)  primary key, 	  --订单编号    PK
	customerId	int      not null,                --客户编号    FK
	customerName	varchar(20) ,          		  --收货人姓名		
	tel	        varchar(20)  not null,    	  --收货人电话		
	address		varchar(100)  not null,   	  --收货地址	
	status		char(1) ,        		  --销售单状态（0-未处理，1-已处理，2-以发货，3-已收货）
	adminId		int  ,   		  --处理人编号  FK
	context		varchar(100) not null,	          --备注
	sumprice	 money not null                   --总价
)
go
alter table OrderMain
add constraint FK_customerId
	FOREIGN KEY(customerId) REFERENCES customerInfo(custId)
alter table OrderMain
add constraint FK_adminId
	FOREIGN KEY(adminId) REFERENCES sysAdmin(adminId)



-----------------订单明细表-----------------
--drop table orderDetail
create table orderDetail(
	detail		int  identity primary key,   --明细编号   PK
	orderNum	varchar(20) not null,        ---主表ID    FK
	bookId		int not null,  		     --商品编号   FK
	num		int not null,  		     --订购数量
)
go
alter table orderDetail
add constraint FK_orderNum
	FOREIGN KEY(orderNum) REFERENCES OrderMain(orderNum)
alter table orderDetail
add constraint FK_bookIdR
	FOREIGN KEY(bookId) REFERENCES bookInfo(bookId)



-----------------每张表至少插入五条测试数据-----------------

------------图书类别表测试用例
insert into bookType(parentId,bookTypeName,context,isDelete) values (0,'小说','它是通过塑造人物、叙述故事、文学体裁',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (0,'文学','形象化地反映客观现实的艺术',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (1,'中国当代小说','50年代后期文学史著作',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (1,'外国小说','中国文学以外的世界各国文学',1)
insert into bookType(parentId,bookTypeName,context,isDelete) values (2,'诗歌词曲','记载了人们的历史活动',1)

select * from bookType
------------图书基本信息别表测试用例
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					 smallImg,bigImg,price,pbdate,hyprice,
					 bookStates,sjdate,num,saleCount) 
			values('白鹿原',3,'陈忠实','北京出版社出版集团','白嘉轩后来引以为豪壮的是一生里娶过七房女人',
					'bailuyuan.jpg','bailuyuan.jpg',36.0,'2008-05-01',23.9,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('藏海花',3,'南派三叔','北京联合出版公司','吴邪五年的平静生活，因金万堂的突然造访而被打断。',
					'zhanghaihua.jpg','zhanghaihua.jpg',32.0,'2012-08-01',22.6,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('活着',3,'余华','作家出版社','《活着》是一篇读起来让人感到沉重的小说',
					'huozhe.jpg','huozhe.jpg',15.0,'2010-11-01',8.3,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('狼图腾',3,'姜戎','长江文艺出版社 ','《狼图腾》由几十个有机连贯的“狼故事”一气呵成',
					'langtuteng.jpg','langtuteng.jpg',32.0,'2004-04-01',21.2,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('最美的时光',3,'桐华','湖南文艺出版社','全新演绎最唯美浪漫、纠结虐心的都市爱情小说',
					'zuimeideshiguang.jpg','zuimeideshiguang.jpg',32.0,'2012-08-01',19.8
					,1,null,100,0)

insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('北京青年（独家定制版',3,'常琳','中国华侨出版社','一个有关成长、改变和寻找自我的故事。',
					'beijingqingnian.jpg','beijingqingnian.jpg',48.0,'2012-08-01',31.9
					,1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('穆斯林的葬礼',3,'霍达','北京十月文艺出版社','一个穆斯林家族，六十年间的兴衰，三代人命运的沉浮',
					'musilindezangli.jpg','musilindezangli.jpg',36.0,'2007-08-01',24.0,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('无尾狗',3,'阿丁','吉林出版集团','一个城镇居民几十年的活之生存、生之尊严。',
					'wuweigou.jpg','wuweigou.jpg',32.8,'2012-07-01',21.6,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
values('许三观卖血记',3,'余华 ',' 作家出版社','包含了20世纪中国社会的集体悲剧',
					'xsguanmaixueji.jpg','xsguanmaixueji.jpg',19.0,'2012-07-01',10.5,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('沧浪之水',3,'阎真','人民文学出版社','这是一部令人惊骇的小说，有一种道破天机的意味。',
					'canglangzhishu.jpg','canglangzhishu.jpg',33.0,'2008-05-01',23.1
					,1,null,100,0)

insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('不能承受的生命之轻',4,'米兰·昆德拉','上海译文出版社','　最沉重的负担压迫着我们，让我屈服于它',
					'bnchengssmzq.jpg','bnchengssmzq.jpg',29,'2010-08-01',18.9,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice
					,bookStates,sjdate,num,saleCount) 
			values('自由',4,'〔美〕乔纳森·弗兰岑','南海出版公司','二十一世纪的第一个十年经历的梦想与失败。',
					'ziyou.jpg','ziyou.jpg',49.5,'2008-05-01',35.1,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('追风筝的人',4,'（美）胡赛尼','上海人民出版社','12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足',
					'zhuifzderen.jpg','zhuifzderen.jpg',25.0,'2006-05-01',16.3,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('达·芬奇密码',4,'（美）布朗','人民文学出版社','隐藏在列昂纳多·达·芬奇的艺术作品当中',
					'dfqimima.jpg','dfqimima.jpg',29.0,'2009-05-01',22.2,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('云图',4,'（英）大卫·米切尔','上海文艺出版社','入选“新千年最佳小说”入围布克奖、星云奖、克拉克奖决选',
					'yunhai.jpg','yunhai.jpg',33,'2010-01-01',23.8,
					1,null,100,0)

insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('重温最美古诗词',5,'于丹','北京联合出版公司','和于丹一起，重温最美古诗词，回归自在大人生。',
					'cwzuimeigsc.jpg','cwzuimeigsc.jpg',38,'2012-06-01',30.4,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('唐诗鉴赏辞典',5,'萧涤非，等','上海辞书出版社','以《唐诗鉴赏辞典》为代表的文学鉴赏辞典系列',
					'tsjsbaodian.jpg','tsjsbaodian.jpg',58,'1983-12-01',37.7,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('唐宋词鉴赏辞典',5,'周汝昌','上海辞书出版社','上海辞书出版社中国文学鉴赏辞典系列中重要品种',
					'tscjschidian.jpg','tscjschidian.jps',36,'2011-03-01',23.9,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('蒋勋说宋词',5,'蒋勋',' 福建人民出版社',' 蒋勋说：在宋词中，你会觉得有一种饱满与安静',
					'jiangxunssc.jpg','jiangxunssc.jpg',35.8,'2011-01-01',25.7,
					1,null,100,0)
insert into bookInfo(bookName,booktypeId,author,pbName,context,
					smallImg,bigImg,price,pbdate,hyprice,
					bookStates,sjdate,num,saleCount) 
			values('席慕蓉诗集',5,'席慕蓉',' 作家出版社','《席慕蓉诗集（套装共6册）》包括有《七里香》、《无怨的青春》',
					'murongsj.jpg','murongsj.jpg',108,'2008-05-01',68.7,
					1,null,100,0)

select * from bookInfo
------------用户基本表测试用例
insert into customerInfo(custName,pwd,email) values ('何亚斌','123456','766528@qq.com')
insert into customerInfo(custName,pwd,email) values ('小明','123456','asdasd@163.com')
insert into customerInfo(custName,pwd,email) values ('程尧','123456','akksd@yahu.com')
insert into customerInfo(custName,pwd,email) values ('刘攀峰','123456','aaaaaa@qq.com')
insert into customerInfo(custName,pwd,email) values ('尹公峰','123456','qqqqqq@qq.com')
select * from customerInfo

------------用户详细信息表测试用例
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(1, '13545698425','玉祥门','0',21,125.6,'766528')
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(3, '15885695429','明德门','0',18,5.6,'8885328')
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(5, '15999668489','大雁塔','0',23,25.6,'766528')
insert into customerDetailInfo(custId,tel,address,sex,age,countMoney,qq) values(4, '15845698425','长安路','0',22,1225.6,'766528')


select * from customerDetailInfo

------------书评表测试用例

insert into bookDiscuss(bookId,custId,context,states) values(1,3,'经典就是经典，再温习一遍','1')
insert into bookDiscuss(bookId,custId,context,states) values(12,1,'垃圾大家不要买啊','0')
insert into bookDiscuss(bookId,custId,context,states) values(7,3,'好评，书中经典，推荐观看','1')
insert into bookDiscuss(bookId,custId,context,states) values(16,2,'第二次买了，给朋友带一本','1')
insert into bookDiscuss(bookId,custId,context,states) values(17,5,'很好看，很喜欢','1')
select * from bookDiscuss

------------收藏夹表测试用例
insert into favorite(bookid,custid,date,context) values(16,1,'2012-03-01','想买的书')
insert into favorite(bookid,custid,date,context) values(10,3,'2007-02-03','很喜欢的书')
insert into favorite(bookid,custid,date,context) values(7,2,'2012-04-27','期待的书')
insert into favorite(bookid,custid,date,context) values(6,4,'2002-07-01','小说类的书')
insert into favorite(bookid,custid,date,context) values(11,3,'2010-03-01','文学的书')
select * from favorite

------------管理员表测试用例
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