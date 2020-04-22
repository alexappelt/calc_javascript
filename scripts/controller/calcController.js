


class CalcController{

constructor(){                //Criamos um construtor com dois atributos, data e display
    this._operation = [];
    this.locale = 'pt-BR'   
    this._currentDate;
    this._displayCalcEl = document.querySelector('#display');
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');
    this.initialize();
    this.initButtonsEvents();

}


initialize(){
    this.setDisplayDateTime();

    setInterval( ()=>{  
        /**
         * Na função setInterval, ele executa algo em um intervalo de tempo;
         * Exemplo: setInterval(func,time) , então passamos nossa função e nosso tempo em millisegundos
         * 
         */ 
        this.setDisplayDateTime();
    } , 1000 );
}

clearAll(){
this._operation = [];
this.setLastNumberDisplay();
}

clearEntry(){
this._operation.pop();
this.setLastNumberDisplay();
}

getLastOperation(){
    return this._operation[this._operation.length-1];
}

isOperator(value){

if ((['+' , '-' , '/' , '*' , '%'].indexOf(value))==-1){
    return false;
}    
else{
    return true;
}
}

calc(array){
    let calc = array.join("");
    return eval(calc);
}

pushOperation(value){
    this._operation.push(value);    
    if(this._operation.length>3){
        let lastOp = this._operation.pop();
        let result = this.calc(this._operation);
        this._operation = [result , lastOp];
        parseInt(this._operation);
        console.log(this._operation);
    }
}

setLastNumberDisplay(){
        
    this.displayCalc = this._operation.join("");
}


addOperation(value){
    
    if(!isNaN(this._operation[(this._operation.length-1)])) //Se o ultimo elemento da operação for um numero
        {
        if(this.isOperator(value)){   //Verifica se o valor digitado é um operador
            
            this.pushOperation(value);
            this.setLastNumberDisplay();

        }else{ //Se não for um operador, concatena o ultimo numero e soma com a operação
        this._operation[(this._operation.length-1)] = parseInt(this._operation[(this._operation.length-1)] + value);
        this.setLastNumberDisplay();
    }

   }else if(isNaN(this._operation[(this._operation.length-1)])){
       if(isNaN(value)){
           if(this.isOperator(this._operation[(this._operation.length-1)])){
            this._operation[(this._operation.length-1)] = value; 
            this.setLastNumberDisplay();
           }else{
            this.pushOperation(value);
            this.setLastNumberDisplay();
}
}
else{
        this.pushOperation(parseInt(value));
        this.setLastNumberDisplay();
}
}
    
}

setError(){
    this.displayCalc = 'Math Error';
}

execBtn(value){
    switch(value){
    case 'ac':
    this.clearAll();    
    break;
    case 'ce':
    this.clearEntry();
    break;
    case 'soma':
        this.addOperation('+');
    break;
    case 'subtracao':
        this.addOperation('-');
    break;
    case 'divisao':
        this.addOperation('/');
    break;
    case 'multiplicacao':
        this.addOperation('*');
    break;
    case 'porcento':
        this.addOperation('%');
    break;
    case 'igual':
        console.log('igual');
        console.log(this._operation);
        let calc = this._operation.join("");
        console.log(eval(calc));
        this.displayCalc = this.calc(this._operation);

       

    break;  
    
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        this.addOperation(value);
        break;
    default:
        this.setError(); 
}

};


initButtonsEvents(){   //definimos um metodo para os eventos em cada botão

     let buttons = document.querySelectorAll('#buttons > g, #parts > g'); //pegamos todas as linhas que forem filhas g, pai #button
   //também ele verifica se for filha g, pai #parts . 
   /**
    * Como não podemos adicionar um eventListener em uma lista, vamos fazer um forEach para percorrer todas as linhas e adicionar
    * um evento do tipo click em cada elemnto
    * Assim quando clicar, ele executa algo */  
     
     buttons.forEach((btn, index)=>{

        btn.addEventListener("click", e => {
           //btn.className.baseVal.replace("btn-" , ''); //Ele vai buscar o nome da classe e substituir btn- por nada 
            let textBtn = btn.className.baseVal.replace("btn-" , '');                     
            this.execBtn(textBtn);
    

        });

        btn.addEventListener("mouseover", e => {
                         btn.style.cursor = "pointer";  //Deixa o cursor como estilo pointer, "Maozinha ao passar o mouse no btn"

        });

           
              

        })
     
    
}


setDisplayDateTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this.locale);
    this.displayTime = this.currentDate.toLocaleTimeString(this.locale);   
}

get displayTime(){     // get referente ao timeEl do construtor
    return this._timeEl.innerHTML;
}

set displayTime(value){  // set referente ao timeEl do construtor
    this._timeEl.innerHTML = value;
}

get displayDate(){
     return this._dateEl.innerHTML; 
}

set displayDate(value){
    this._dateEl.innerHTML = value; 
}

get displayCalc(){      //Criamos o get referente ao display
    return this._displayCalcEl.innerHTML;
}

set displayCalc(value){ //Criamos o set referente ao display
    this._displayCalcEl.innerHTML = value;
}

get currentDate(){    //Criamos o get referente a data atual
    return new Date();
}


set dataAtual(data){  //Criamos o set referente a data atual
    this._dataAtual = data;
}



}