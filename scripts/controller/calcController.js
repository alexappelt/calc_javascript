


class CalcController{

constructor(){                //Criamos um construtor com dois atributos, data e display
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




initButtonsEvents(){   //definimos um metodo para os eventos em cada botão

     let buttons = document.querySelectorAll('#buttons > g, #parts > g'); //pegamos todas as linhas que forem filhas g, pai #button
   //também ele verifica se for filha g, pai #parts . 
   /**
    * Como não podemos adicionar um eventListener em uma lista, vamos fazer um forEach para percorrer todas as linhas e adicionar
    * um evento do tipo click em cada elemnto
    * Assim quando clicar, ele executa algo */  
     
     buttons.forEach((btn, index)=>{

         btn.addEventListener("click", e => {
            console.log(btn.className.baseVal.replace("btn-" , '')); //Ele vai buscar o nome da classe e substituir btn- por nada                 
            });

            btn.addEventListener("drag", e => {
                console.log(btn.className.baseVal.replace("btn-" , '')); //Ele vai buscar o nome da classe e substituir btn- por nada                 
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