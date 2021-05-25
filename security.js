class Security

display(){
    this.button1.mousePressed(() =>{
        if(system.authenticate(accessCode1,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
        }
    });
    this.button2.mousePressed(() =>{
        if(system.authenticate(accessCode2,this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
        }
    });
    
}