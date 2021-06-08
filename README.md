# Sahaj BANK APP ( MERN STACK )  

**DEPLOYED URL** : https://sahajbankapp.herokuapp.com/
**GITHUB** : https://github.com/SwaitzJoses/sahaj.git


**Create account:**
**Input** 
Name: "Dave Harrison"
Output :  Mongodb Auto generated ID (eg.: "_id": "60beeebfacee5928c82713a7",)

//////////////////////////////////////////////////////////////////////////////////////////

**Deposit Amount:**
**Input**
Account Number: 60beeebfacee5928c82713a7 (Mongodb ID)
Amount: Minimum ₹500 - Maximum ₹50,000 

**Condition**:
  Minimum ₹500 - Maximum ₹50,000
	Only 3 transactions per day.
	Account balance cannot exceed ₹1,00,000
**Working process:**  
In Database I set 
	deposit_count value = 0 
	deposit_date = today's date
	last_deposite = 1(some initial value)
	when account is created...

	For each transaction (they entered amount + initial amount ) deposit_count value incremants its value
And maximun amount = 1,00,000
	When deposit_count value = 3, then
	deposit_date = today's date
	last_deposite = deposit_date,
	So, now count value will be put to deposit_count value = 0 again.
	But,
	TRANSACTION will only occur last_deposite != deposit_date
  
  
//////////////////////////////////////////////////////////////////////////////////////////
  
**Withdraw:**
 Same as deposit except they entered amount - initial amount  
And amount should not go down than 0 

//////////////////////////////////////////////////////////////////////////////////////////


**Transfer**
I change value in two documents of same collection, two parameter(Mongodb ID 1, Mongodb ID 2,  amount to be transfered )
with in regards of the satisfying with the Withdrawal conditions


//////////////////////////////////////////////////////////////////////////////////////////

**Balance**
Checking the databse amount value with given single parameter (Mongo db ID (account number))


//////////////////////////////////////////////////////////////////////////////////////////

**REDUX:**
The account value is cleared when pressing back button for security measure.
In Transaction the balance of both sender and reciever is seen on the redux dev tools.


//////////////////////////////////////////////////////////////////////////////////////////

**Document in Mongo db for a specific user in a Collection  :  **

{"_id":{"$oid":"60beeebfacee5928c82713a7"},
"number":"8146",  ( Used as Account No. in Development stage)
"amount":"6000",
"withdraw_count":"0",
"last_withdraw":"1",
"deposit_count":"2"
,"last_deposit":"1",
"name":"Henry Cavil","
__v":{"$numberInt":"0"},"deposit_date":"6/8/2021"}


**Cons:**
WE have to copy the Account No. in order to deposit, withdraw and check balance.
In case of transaction we need two Account No.s copied and available 




































