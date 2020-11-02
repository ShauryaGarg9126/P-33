class Block

{ constructor(x, y, width, height)
   { var options =
     { restitution :0.4, 
      friction :0.0, 
     // isStatic:false ,
     }
       
        this.width = width;
         this.height = height; 
         this.body = Bodies.rectangle(x, y, width, height, options);
         World.add(world, this.body);
         }
         
         display(){
            
            if(this.body.speed < 3){

            push();
            
            var angle = this.body.angle;
           
           var pos= this.body.position; 
          
            translate(pos.x, pos.y); 
            rotate(angle); 
            rectMode(CENTER); 
            rect(0,0,this.width, 
              this.height);
               pop(); 
            }
            else{
               push();
               World.remove(world,this.body);
               this.visiblity = this.visiblity -5;
               tint(255,this.Visiblity);
               pop();
            }
         }

score(){
   if (this.visiblity < 0 && this.visiblity >-105){
     score++;
   }
 }
}