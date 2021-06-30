let money = 1500; //Доход за месяц
let income = "фриланс"; //Дополнительный доход
let addExpenses = "ИНТЕРНЕТ, ТАКСИ, КОММУНАЛКА"; //Дополнительные расходы
let deposit = true;
let mission = 10000; //Какую сумму хотите накопить
let period = 12; //Количество месяцев

//output type variables
console.log("Выводим типы данных: ");
console.log("Тип данных переменной 'money': " + typeof money);
console.log("Тип данных переменной 'income': " + typeof income);
console.log("Тип данных переменной 'deposit': " + typeof deposit);

//output length string
console.log("Длина строки в переменной 'addExpenses': " + addExpenses.length + " символов");

//output text with variables
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

//make string in variable lowercase
console.log("Значение переменной 'addExpenses': " + addExpenses);
addExpenses = addExpenses.toLowerCase();
console.log("Сделаем строчное начертание букв: " + addExpenses);

//splitting a string into an array
console.log(addExpenses.split(", "));

let budgetDay; //Дневной бюджет
budgetDay = money / 30;
console.log("Дневной бюджет: " + budgetDay + " рублей");