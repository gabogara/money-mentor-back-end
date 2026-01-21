const dotenv = require('dotenv');
dotenv.config();
const Category = require('./models/category.js');
const mongoose = require('mongoose');

//database
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const categoriesData = [
  //  INCOME 
  { name: "Salary", type: "Income" },
  { name: "Freelance", type: "Income" },
  { name: "Bonus", type: "Income" },
  { name: "Gift", type: "Income" },
  { name: "Side Hustle", type: "Income" },
  { name: "Other Income", type: "Income" },
  

  //  SAVINGS (EXPENSE TYPE) 
  { name: "Emergency Fund", type: "Expense" },
  { name: "Short-Term Savings", type: "Expense" },
  { name: "Long-Term Savings", type: "Expense" },
  { name: "Vacation Fund", type: "Expense" },
  { name: "Education Savings", type: "Expense" },
  { name: "Investment Savings", type: "Expense" },
  { name: "Personal Goal", type: "Expense" },

  //  EXPENSES 
  { name: "Groceries", type: "Expense" },
  { name: "Rent / Housing", type: "Expense" },
  { name: "Utilities", type: "Expense" },
  { name: "Transportation", type: "Expense" },
  { name: "Gas", type: "Expense" },
  { name: "Food & Dining", type: "Expense" },
  { name: "Entertainment", type: "Expense" },
  { name: "Shopping", type: "Expense" },
  { name: "Health", type: "Expense" },
  { name: "Subscriptions", type: "Expense" },
  { name: "Education", type: "Expense" },
  { name: "Travel", type: "Expense" },
  { name: "Personal Care", type: "Expense" }
];
(async function seedData(){
    try{
        await Category.deleteMany({}) //removes duplicates
        const categories= await Category.create(categoriesData)
        console.log(`seeded ${categories.length} categories`)
    }catch(err){
        console.log(err)
    } finally {
        process.exit()
    }
 })() //invoke it - node seed.js 