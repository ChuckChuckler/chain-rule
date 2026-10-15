window.onload=function(){
    let xTerms=genArgs1();
    for(let i of xTerms){
        console.log(i.toString());
    }
    console.log("");
    for(let i of xTerms){
        console.log(i.dv());
    }
}

function randint(min,max){
    return Math.floor(min+(Math.random()*(max-min+1)));
}

class xTerm{
    constructor(coefficient,exponent){
        this.coefficient=coefficient,
        this.exponent=exponent
    }

    toString(){
        if (this.exponent==1) return `${(this.coefficient==1)?``:`${this.coefficient}`}x`;
        if (this.exponent==0) return `${this.coefficient}`;
        return `${(this.coefficient==1)?``:`${this.coefficient}`}x${exponents[this.exponent]}`;
    }

    dv(){ //exponent rule
        if(this.exponent==0) return `0`;
        if(this.exponent==1) return this.coefficient;
        return `${this.coefficient*this.exponent}x${exponents[this.exponent-1]}`;
    }
}

let trigDvs={
    "sin([args])":["cos([args])"],
    "cos([args])":["-sin([args])"],
    "tan([args])":["sec²([args])"],
    "sec([args])":["sec([args])","tan([args])"],
    "csc([args])":["-csc([args])","cot([args])"],
    "cot([args])":["-csc²([args])"]
}

let exponents={
    1:"",
    2:"²",
    3:"³",
    4:"⁴",
    5:"⁵",
    6:"⁶",
    7:"⁷",
    8:"⁸",
    9:"⁹",
    "+":"⁺",
    "-":"⁻"
}

function genArgs1(){ //sum/difference rules, simple
    let vals=randint(1,3);
    let terms=[];
    let temp=randint(vals-1,vals+3);
    for(let i=0;i<vals;i++){
        let term=new xTerm(randint(1,5),temp);
        terms.push(term)
        temp=term.exponent-1
    }
    return terms;
}