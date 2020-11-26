INSERT INTO Member
    (Email,FirstName,Surname,Password,Pending)
VALUES('john@member.com', 'John', 'One', 'Password', false),
('george@member.com', 'George', 'Two', 'Password', true),
('jack@member.com', 'Jack', 'Two', 'Password', true),
('matt@member.com', 'Matt', 'Two', 'Password', true),
('luke@member.com', 'Luke', 'Two', 'Password', true),
('frost@member.com', 'Frost', 'Two', 'Password', true),	

INSERT INTO Game
	(GameDate, [Name], Payee, AmountPaid, Venue, MemberId)
VALUES('2020-11-27T02:30:00', 'John', 'John', 100, '123 Covfefe Field', 1),
('2020-11-01T02:30:00', 'John', 'Jack', 100, '213 Confete Ground', 1),
('2020-11-08T02:30:00', 'Luke', 'Matt', 100, '123 Covfefe Field', 5),
('2020-11-10T02:30:00', 'George', 'Luke', 100, '123 Covfefe Field', 2),
('2020-11-14T02:30:00', 'Matt', 'Frost', 100, '123 Covfefe Field', 4),
('2020-11-15T02:30:00', 'Frost', 'George', 100, '213 Confete Ground', 6),
('2020-11-12T02:30:00', 'Luke', 'Jack', 100, '123 Covfefe Field', 6),
('2020-11-19T02:30:00', 'Luke', 'George', 100, '213 Confete Ground', 5),
('2020-11-21T02:30:00', 'Luke', 'John', 100, '213 Confete Ground', 5),
('2020-11-22T02:30:00', 'George', 'John', 100, '123 Covfefe Field', 2);