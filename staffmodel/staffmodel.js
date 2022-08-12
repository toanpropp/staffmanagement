function STAFF (
    account,
    name,
    email,
    password,
    datepicker,
    standardSalary,
    position,
    timework,
    
){
    this.account = account;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.standardSalary = standardSalary;
    this.position= position;
    this.timework =timework;

    // this.total = function(){
    //     if (this.position=="boss"){
    //         return this.standardSalary * 3;
    //     }else if (this.position=="leader"){
    //         return this.standardSalary * 2;
    //     }else{
    //         return this.standardSalary;
    //     }
    // };
    // this.rank = function(){
    //     if (this.timework >=192){
    //         return "1";
    //     }else if (this.timework >=176){
    //         return "2";
    //     }else if (this.timework >= 160){
    //         return "3";
    //     }else {
    //         return "4";
    //     }
    // }
   
}