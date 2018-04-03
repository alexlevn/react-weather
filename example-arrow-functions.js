var names = ['Alex', 'Lan', 'Huong'];

names.forEach(function (name) {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});


names.forEach((name)=> console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Alex Lee'));

var person = {
    name: 'Alex Lee',
    greet: function(){
        names.forEach((nguoi_khac)=>{
            console.log(this.name  + ' say Hi to ' + nguoi_khac);
            // Dùng 'hàm mũi tên' sẽ truy vấn vào được this. viết kiểu function bình thường thì this nó là hàm con rồi.
        })
    }
}

person.greet();

// Challenge Area

function add(a,b){
    return a  + b;
}
// addStatement
// addExpression

console.log(add(1,3));
console.log(add(0,9));

var addStatement = (a,b)=>{
    return a + b;
}
var addExpresstion = (a,b) => a + b;

console.log(addStatement(3,7));
console.log(addExpresstion(2,6));