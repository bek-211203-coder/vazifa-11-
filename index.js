// let car = {
//     name : 'maclaren',
//     year : 2024,
//     color : 'green',
//     maxspeed: 300,
//     weight: 2500,
//     about : function() {
//         console.log(this.name + this.year );
        
//     }
// }
// car.about()


// Object.freeze(car);
// Object.keys(car);
// Object.values(car);
// Object.entries(car);
////////////////////////////////////////////////////////////////////


// vazifa masalalari


// 1. Sonlardan tashkil topgan massiv toq elementlari sonini topuvchi funksiya yozing.
// let num = [1,2,3,4,5,6,7,8,9]
// function func(arg){
//     let count = 0;
//     arg.forEach(function(element){
//         if(element % 2 == 1){
//             count ++
//         }
//     })
//     return count
// }
// console.log(func(num));


//  Berilgan matndan sonlarni ajratib oluvchi funksiya yozing. sa2lom1 => [2, 1]
// let str = 'q123we46r5ty'
// function func(arg){
//     let strNum = '';
//     for (const element of arg ) {
//         if (element > 0 && element < 9){
//             strNum += element
//         }
//     }
//     return strNum.split('');
// }
// console.log(func(str));



//  Berilgan matnda nechta so’z borligini aniqlovchi funksiya yozing.
// let str = 'berilgan matinda nechta soz borligini aniqlovchi funksiya yozing';
// function text (arg){
//     let couterStr = arg.split(" ");
//     let couter = 0;
//     for (const element of couterStr) {
//         couter++;
//     }
//     return couter
// }
// console.log(text(str));




// 4 Berilgan massivdagi eng kichik elementni topuvchi funksiya yozing
// let num = [1,2,3,4,5,6,7,8,9];
// function func(arg){
//     let min = arg[0]
//     arg.forEach(function(element) {
//         if (element < min){
//             min = element  
//         }
//     });
//     return min
// }
// console.log(func(num));

// 5. Berilgan yozuvni teskari tartibga aylantiruvchi funksiya yozing.
// let str = 'salom';
// function func(arg){
//     let arr =arg.split('')
//     let reverseStr = []; 
//     for (const element of arg) {
//         reverseStr.unshift(element)
//     }
//     return reverseStr.join('');
// } 
// console.log(func(str));

//6. Berilgan sonning raqamlari kopaytmasini topuvchi funksiya yozing
// let num = 456;
// function func(arg){
//     let arr = String(arg).split('');
//     let sum = 1;
//     for (const element of arr) {
//         sum *= Number(element)
//     }
//     return sum;
// }
// console.log(func(num));


// 7. Sonlardan tashkil topgan massivni kattadan kichikga qarab saralovchi fynksiya yozing
// let num = [5,6,4,8,9,3,1,4,7,6,3,1,5];
// function func(arg){
//     arg.sort(function( a ,b){
//         return b - a;  
//     })
//     return arg;
// }
// console.log(func(num));


// 8. Berilgan matndan berilgan yozuvni o’chiradigan funksiya yozing.
// function func(text, word) {
//     return text.replace(word, '');
// }
// let text = "Berilgan matndan berilgan yozuvni o’chiradigan funksiya yozing";
// let deleteStr = "yozuvni";
// let res = func(text, deleteStr);
// console.log(res); 


// 9. Berilgan massivdagi barcha elementlarni katta harflarga o'zgartiruvchi funksiya yozing.
// let text = `Berilgan massivdagi barcha elementlarni katta harflarga o'zgartiruvchi funksiya yozing`;
// function func(arg){
//     let arr = arg.split(' ')
//     let res = arr.map(function(element){
//         return element.toUpperCase()

//     })
//     return res.join(' ');
// }
// console.log(func(text));


// 10. Berilgan massivdagi faqat toq sonlarni qaytaruvchi funksiya yozing.
// let num = [1,2,3,4,5,6,7,8,9];
// function func(arg){
//     let arr = []
//     arg.forEach(function(element) {
//        if (element % 2 == 0){
//         arr.push(element)
//        }
//     });
//     return Number(arr.join(''));
// }
// console.log(func(num));


// 11. Berilgan massivdagi eng uzun so'zni qaytaruvchi funksiya yozing.
// let text =  `Berilgan massivdagi eng uzun so'zni qaytaruvchi funksiya yozing`
// let textArr = text.split(' ');
// function func(arg){
//     let word = '';
//     for (const element of arg) {
//         if(word.length < element.length){
//             word = element
//         }
//     }
//     return word
// }
// console.log(func(textArr));


// 12. Berilgan massivdagi barcha sonlarni yig'indisini qaytaruvchi funksiya yozing.
// let num = [1,2,3,4,5,6,7,8,9]; 
// function func(arg){
//     let sum = 0;
//     arg.forEach(element => { 
//         sum += element
//     });
//     return sum ;
// }
// console.log(func(num));


// 13. Berilgan massivdagi barcha manfiy sonlarni olib tashlaydigan funksiya yozing.
// let num = [-1,2,-3,4,-5,-6,7,8,-9];
// let num2 = 0;
// function func(arg){
//     let res =  arg.filter(function(element){
//         return element > num2;
//     })
//    // return Number(res.join(''));
//    return res;
// }
// console.log(func(num));


// 14. Berilgan massivdagi har bir so'zning uzunligini qaytaruvchi funksiya yozing.
// let text =  `Berilgan massivdagi har bir so'zning uzunligini qaytaruvchi funksiya yozing`;
// let textArr = text.split(' ');
// function func(arg){
//     let arrLength = [];
//     for (const element of arg) {
//         arrLength.push(element.length)
//     }
//     return arrLength
// }
// console.log(func(textArr));


// 15. Berilgan massivdagi barcha sonlarni kvadratini qaytaruvchi funksiya yozing.
// let num = [1,2,3,4,5,6,7,8,9]; 
// function func(arg){
//     let res = arg.map(function(element){
//         return element ** 2;
//     });
//     return res; 
// }
// console.log(func(num));


// 16. Berilgan massivdan faqat noyob elementlarni qaytaruvchi funksiya yozing. 
// { masala shartiga tushunmadim noyob elemaent qanday boladi tushunturib ketasiz degan umidda man  }

// 17. Berilgan massivni teskari tartibda qaytaruvchi funksiya yozing.
// let num = [1,2,3,4,5,6,7,8,9]; 
// function func(arg){
//     let arr = [];
//     for (const element of arg) {
//         arr.unshift(element);
//     }
//     return arr;
// }
// console.log(func(num));




// 18. Berilgan massivdagi so'zlarni alifbo tartibida qaytaruvchi funksiya yozing.
// let text = `Berilgan massivdagi so'zlarni alifbo tartibida qaytaruvchi funksiya yozing`
// let textArr = text.split(' ');
// function func(arg){
//    return arg.sort();
// }
// console.log(func(textArr));


// 19. Berilgan stringni har bir so'zini alifbo tartibida qaytaruvchi funksiya yozing.
// let text = `Berilgan stringni har bir so'zini alifbo tartibida qaytaruvchi funksiya yozing.`
// let textArr = text.split(' ');
// function func(arg){
//     let res = arg.map(function (element){
//         return element.split('').sort().join('');
//     })
//     return res ;
// }
// console.log(func(textArr));

// 20. Berilgan stringdagi har bir so'zning birinchi harfini katta qiluvchi funksiya yozing.
// let text = `Berilgan stringdagi har bir so'zning birinchi harfini katta qiluvchi funksiya yozing`;
// function func(arg){
//     let arr = arg.split(' ')
//     let res = arr.map(function(element){
//         return element[0].toUpperCase() + element.slice(1)

//     })
//     return res.join(' ');
// }
// console.log(func(text));


// 21. Berilgan stringdagi barcha bo'sh joylarni olib tashlaydigan funksiya yozing.
// let text = `Berilgan stringdagi barcha bo'sh joylarni olib tashlaydigan funksiya yozing`;
// function func(arg){
//     let res = '';
//     for (const element of arg ) {
//         res += element.replaceAll(' ', '')
//     }
//     return res; 
// }
// console.log(func(text));



// 22. Berilgan stringdagi har bir so'zni teskari qilib qaytaruvchi funksiya yozing.
// let text = ` Berilgan stringdagi har bir so'zni teskari qilib qaytaruvchi funksiya yozing`;
// let textArr = text.split(' ');
// function func(arg){
//     let res = arg.map(function (element){
//         return element.split('').reverse().join('');
//     })
//     return res.join(' ') ;
// }
// console.log(func(textArr));

// 23. Berilgan stringdagi har bir so'zning uzunligini qaytaruvchi funksiya yozing.
// let text =  `Berilgan stringdagi har bir so'zning uzunligini qaytaruvchi funksiya yozing`;
// let textArr = text.split(' ');
// function func(arg){
//     let arrLength = [];
//     for (const element of arg) {
//         arrLength.push(element.length)
//     }
//     return arrLength
// }
// console.log(func(textArr));






// darsda ishlangan 
// let sum = 1 
// for (const key in car) {
//     if(typeof car[key] == "number"){
//         sum *= car[key]
//     }
// }
// console.log(sum);


  