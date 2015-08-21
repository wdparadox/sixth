var countnum ={
    jia:function(a,b){
        var num1 = a.split(".")[0].split(""),
            num0 = a.split(".")[1],
            num2 = b.split(""),
            length1 = num1.length,
            length2 = num2.length,
            arr1 = [],
            arr2 = [],
            arr3 = [],
            result = [],
            round = 0,
            middle,
            distance;
            if(num1[0] != "-"){
                if(length1 >= length2){
                    arr1 = num1;
                    arr2 = num2;
                    distance = length1 - length2;
                }else{
                    arr1 = num2;
                    arr2 = num1;
                    distance = length2 - length1;
                }
                for (var i = arr1.length - 1;i > -1;i--){
                    if(i - distance > -1){
                        middle = parseInt(arr1[i]) + parseInt(arr2[i-distance]) + round;
                    }
                    else{
                        middle = parseInt(arr1[i]) + round;
                    }
                    if(middle > 9){
                        result[i] = middle - 10 ;
                        round = 1 ;
                        if(i === 0){
                            result.unshift("1");
                        }
                    }
                    else{
                        result[i]= middle ;
                        round = 0;
                    }
                }
                if(num0 !== undefined){
                    arr3   = num0.split("");
                    result.push(".");
                }
                return result.concat(arr3).join("") ;
            }else{
                return (parseFloat(a)+parseFloat(b)).toString();
            }
    },
    jian:function(a,b){
        var num1 = a.split(".")[0].split(""),
            num0 = a.split(".")[1],
            num2 = b.split(""),
            length1 = num1.length,
            length2 = num2.length,
            arr1 = [],
            arr2 = [],
            arr3 = [],
            result = [],
            round = 0,
            middle,
            distance,
            bool ;
            if(a == b){
                return 0;
            }
            if(num1[0] != "-"){
                if(length1 > length2){
                    arr1 = num1;
                    arr2 = num2;
                    distance = length1 - length2;
                    bool = true;
                }else if(length2 > length1){
                    arr1 = num2;
                    arr2 = num1;
                    distance = length2 - length1;
                    bool = false;
                }else {
                    if(a >= b){
                        arr1 = num1;
                        arr2 = num2;
                        distance = length1 - length2;
                        bool = true;
                    }else{
                        arr1 = num2;
                        arr2 = num1;
                        distance = length2 - length1;
                        bool = false;
                    }
                }
                for (var i = arr1.length - 1;i > -1;i--){
                    if(i - distance > -1){
                        middle = parseInt(arr1[i]) - parseInt(arr2[i-distance]) - round;
                    }
                    else{
                        middle = parseInt(arr1[i]) - round;
                    } 
                    if(middle < 0){
                        result[i] = middle + 10 ;
                        round = 1 ;
                        if(i === 0){
                            result[i]= Math.abs(middle);
                        }
                    }
                    else{
                        result[i] = middle;
                        round = 0;
                    }
                }
                for(var i = 0 , len = result.length; i < len;i++){
                    if(result[0] == "0"){
                        result.shift();
                    }
                }
                if(result == ""){
                    result = 0;
                }else{
                    if(bool){
                        result = result;
                    }else{
                        result.unshift("-");
                    }
                }
                if(num0 !== undefined){
                    arr3  = num0.split("");
                    result.push(".");
                }
                return result.concat(arr3).join("") ;
            }else{
                return (parseFloat(a) - parseFloat(b)).toString();
            }
    },
    cheng:function(a,b){
        var num1 = a.split(""),
            num2 = b.split(""),
            length1 = num1.length,
            length2 = num2.length,
            result = [],
            middle;
            for(var i = length1-1 ; i > -1;i--){
                for(var j = length2-1 ; j > -1; j--){
                    result[i+j] = 0;
                }
            }
            for(var i = length1-1 ; i > -1;i--){
                for(var j = length2-1 ; j > -1; j--){
                    result[i+j] += parseInt(num1[i])*parseInt(num2[j]);
                }
            }
            for(var i = result.length-1 ; i > -1;i--){
                middle = result[i];
                if(middle > 9){
                    result[i] = middle % 10;
                    result[i-1] += Math.floor(middle/10);
                    if(i == "0"){
                        result.unshift(Math.floor(middle/10));
                    }
                }
            }
            if(result[0] == "0"){
                result = 0;
            }else{
                result = result.join("");
            }
            return result;
    },
    chu:function(a,b,num){
        var num1 = a.split(""),
            num2 = parseInt(b),
            length1 = num1.length,
            result1 = [],
            result2 = [],
            symbol  = false;
            num = num || 20; //保留小数位数
            if(num1[0] == "-"){
                num1.shift();
                symbol = true;
            }
            if(a.indexOf(".") != "-1"){
                return (parseFloat(a)/parseFloat(b)).toString();
            }
            if(a == 0){
                return 0 ;
            }
            if(b == 0){
                return "被除数不能为0";
            }
            for(var i = 0 ; i < length1 + num;i++){
                if(num1[i+1] === undefined){
                    num1.push(0);
                    result2[i - length1 + 1] = Math.floor(parseInt(num1[i])/num2);
                    num1[i+1] = (parseInt(num1[i])%num2)*10 + parseInt(num1[i+1]);
                }else{
                    result1[i] = Math.floor(parseInt(num1[i])/num2);
                    num1[i+1] = (parseInt(num1[i])%num2)*10 + parseInt(num1[i+1]);
                }
            }
            for(var i = 0 , len = result1.length; i < len;i++){
                if(result1[0] == "0"){
                    result1.shift();
                }
            }
            for(var i = 0 , len = result2.length; i < len;i++){
                if(result2[len-1] == "0"){
                    result2.pop();
                }
            }
            if(result2.length > 0){
                result1 = (result1.concat(result2.shift())).join("");   
                result2 = result2.join("");
                return symbol? "-" + result1 + "." +result2 : result1 + "." +result2 ; 
            }else{
                result1 = (result1.concat(result2.shift())).join("");
                return symbol? "-" + result1 : result1;
            }
            
    }
}    

function add(target,method,fn){
    if(target.addEventListener){
        target.addEventListener(method,fn,false);
    }else if(target.attachEvent){
        target.attachEvent("on" + method,fn);
    }else{
        target["on" + method] = fn;
    }
}
var op   = document.getElementsByTagName("p"),
    obtn = document.querySelectorAll(".btn1"),
    main = obtn[0].getElementsByTagName("input"),
    way  = obtn[1].getElementsByTagName("input"),
    num  = obtn[2].getElementsByTagName("input"),
    p1 = [],
    p2 = [],
    num1,
    num2;
    for(var i = 0 ,len = main.length;i < len;i++){
        add(main[i],"click",function(){
            if(op[1].innerHTML == "" ){
                p1.push(this.value);
                num1 = p1.join("");
                op[0].innerHTML = num1;
            }else {
                p2.push(this.value);
                num2 = p2.join("");
                op[2].innerHTML = num2;
            }
        })
    }
    for(var i = 0 ,len = way.length;i < len;i++){
        add(way[i],"click",function(){
            if(op[0].innerHTML == 0){
                p1.push(0);
                num1 = p1.join("");
            }
            if(op[2].innerHTML == ""){
                op[1].innerHTML = this.value;
            }else{
                if(op[1].innerHTML == "+"){
                    num1 = countnum.jia(num1,num2);  
                }else if(op[1].innerHTML == "-"){
                    num1 = countnum.jian(num1,num2);
                }else if(op[1].innerHTML == "*"){
                    num1 = countnum.cheng(num1,num2);
                }else if(op[1].innerHTML == "/"){
                    num1 = countnum.chu(num1,num2);       
                }
                op[0].innerHTML = num1;
                op[1].innerHTML = this.value;
                p2.splice(0,p2.length);
                op[2].innerHTML = ""; 
            }
        })
    }
    add(num[0],"click",function(){
        if(op[0].innerHTML != "" && op[2].innerHTML != ""){
            if(op[1].innerHTML == "+"){
                    num1 = countnum.jia(num1,num2);  
                }else if(op[1].innerHTML == "-"){
                    num1 = countnum.jian(num1,num2);
                }else if(op[1].innerHTML == "*"){
                    num1 = countnum.cheng(num1,num2);
                }else if(op[1].innerHTML == "/"){
                    num1 = countnum.chu(num1,num2);       
                }
                op[0].innerHTML = num1;
                op[1].innerHTML = "";
                p1.splice(0,p1.length)
                p2.splice(0,p2.length);
                op[2].innerHTML = "";
        }
    })
