//datatypes in js
var empid = 101;
console.log(typeof (empid));
var esalary = 10000.567;
console.log(typeof (esalary));
var phnnum = 9676304206;
console.log(typeof (phnnum));
var ename = "Keerthi";
console.log(typeof (ename));
var p_emp = false;
console.log(typeof (p_emp));
var pf = null;
console.log(typeof (pf));
var esi;
console.log(typeof (esi));
var emp_desg = ["HR", "Developer", "Manager"];
console.log(typeof (emp_desg));
var cust_info = {
    c_id: 1001, c_name: "Keerthi", c_addr: "Eluru"
}
console.log(typeof (cust_info));
// es-6 new datatype
var tcs_turnover = BigInt(2345678902334567890);
console.log(typeof (tcs_turnover));
var p_name = Symbol("realme");
var p_name1 = Symbol("realme");
console.log(typeof (p_name));
console.log(p_name == p_name1);