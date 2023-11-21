-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
-- flush privileges;

CREATE DATABASE finwizards;
USE finwizards;

CREATE TABLE Clients (
    clientId INT PRIMARY KEY auto_increment,
    name_first VARCHAR(255),
    name_last VARCHAR(255),
    name_middle VARCHAR(255),
    contact_info VARCHAR(255),
    kyc boolean,
    balance DECIMAL(10, 2) default 0.00,
    age INT
);
insert into Clients values (
	 2,
	 "Ayush",
	 "Tripathi",
	 "Ajay",
	 "9137390942",
	 true,
	 45000,
	 21
);

select * from client_portfolios where clientId = 1;
select * from stock_portfolio;

CREATE TABLE Stocks (
    stockId INT PRIMARY KEY,
    stock_name VARCHAR(255),
    ticker VARCHAR(10),
    cmp DECIMAL(10, 2)
);
insert into Stocks values (
	2,
     "HDFC",
     "HDFC",
     1450account_typeclientId
 );

CREATE TABLE Transactions (
    transactionId INT PRIMARY KEY,
    clientId INT,
    transaction_type VARCHAR(255),
    qty_of_stocks INT,
    date DATE,
    total_value DECIMAL(10, 2),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId)
);

CREATE TABLE Portfolios (
    portfolioId INT PRIMARY KEY,
    total_value DECIMAL(10, 2)
);

CREATE TABLE Brokers (
    brokerId INT PRIMARY KEY,
    broker_name VARCHAR(255)
);

CREATE TABLE Markets (
    marketId INT PRIMARY KEY,
    market_name VARCHAR(255),
    location VARCHAR(255)
);

CREATE TABLE Price_History (
    price DECIMAL(10, 2),
    date DATE,
    stockId INT,
    FOREIGN KEY (stockId) REFERENCES Stocks(stockId)
);

CREATE TABLE Watchlists (
    watchlistId INT PRIMARY KEY
);

-- Create tables for multi-valued attributes -- 
CREATE TABLE Client_Contact_Info (
    clientId INT,
    contact_info VARCHAR(255),
    PRIMARY KEY (clientId, contact_info),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId)
);

CREATE TABLE Client_KYC (
    clientId INT,
    kyc VARCHAR(255),
    PRIMARY KEY (clientId, kyc),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId)
);

-- Create tables for composite attributes --
-- In this case, we'll include the composite attributes directly in the main tables --

-- Create tables for relationships --

CREATE TABLE Accounts (
    accountId INT PRIMARY KEY,
    account_type VARCHAR(255)
);

CREATE TABLE Client_Accounts (
    clientId INT,
    accountId INT,
    PRIMARY KEY (clientId, accountId),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId),
    FOREIGN KEY (accountId) REFERENCES Accounts(accountId)
);

CREATE TABLE Client_Portfolios (
    clientId INT,
    portfolioId INT,
    PRIMARY KEY (clientId, portfolioId),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId),
    FOREIGN KEY (portfolioId) REFERENCES Portfolios(portfolioId)
);

CREATE TABLE Client_Watchlists (
    clientId INT,
    watchlistId INT,
    PRIMARY KEY (clientId, watchlistId),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId),
    FOREIGN KEY (watchlistId) REFERENCES Watchlists(watchlistId)
);

CREATE TABLE Stock_Market (
    stockId INT,
    marketId INT,
    PRIMARY KEY (stockId, marketId),
    FOREIGN KEY (stockId) REFERENCES Stocks(stockId),
    FOREIGN KEY (marketId) REFERENCES Markets(marketId)
);

CREATE TABLE Stock_Portfolio (
    stockId INT,
    portfolioId INT,
    PRIMARY KEY (stockId, portfolioId),
    FOREIGN KEY (stockId) REFERENCES Stocks(stockId),
    FOREIGN KEY (portfolioId) REFERENCES Portfolios(portfolioId)
);

CREATE TABLE Broker_Client (
    brokerId INT,
    clientId INT,
    PRIMARY KEY (brokerId, clientId),
    FOREIGN KEY (brokerId) REFERENCES Brokers(brokerId),
    FOREIGN KEY (clientId) REFERENCES Clients(clientId)
);

CREATE TABLE Broker_Transactions (
    brokerId INT,
    transactionId INT,
    PRIMARY KEY (brokerId, transactionId),
    FOREIGN KEY (brokerId) REFERENCES Brokers(brokerId),
    FOREIGN KEY (transactionId) REFERENCES Transactions(transactionId)
);

CREATE TABLE Broker_Accounts (
    brokerId INT,
    accountId INT,
    PRIMARY KEY (brokerId, accountId),
    FOREIGN KEY (brokerId) REFERENCES Brokers(brokerId),
    FOREIGN KEY (accountId) REFERENCES Accounts(accountId)
);

CREATE TABLE Watchlist_Stocks (
    watchlistId INT,
    stockId INT,
    PRIMARY KEY (watchlistId, stockId),
    FOREIGN KEY (watchlistId) REFERENCES Watchlists(watchlistId),
    FOREIGN KEY (stockId) REFERENCES Stocks(stockId)
);
-- insert into Watchlists values (
-- 	1
-- );
-- insert into Watchlist_Stocks values (
-- 	1,
--     2
-- );
