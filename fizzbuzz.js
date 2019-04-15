class FizzBuzz
{

    constructor()
    {
       let squares=document.getElementsByName("Square");
       let goBtn=document.getElementById("startBtn");
       goBtn.onclick=this.fizzBuzz;
       this.drawTable=this.display.bind(this);
       this.display=this.display.bind(this);
    }
    drawTable()
    {
      //draws
      for(let i=1;1<100;i++)
      {
        document.write('<div id='+i+'name="square" class="col-xs-1 square text-center">&nbsp;</div>')
        if(i%10==0)
        {
          document.write("</div>")
          document.write("<div class='row'>")
        }
      }
    
    }

    //does the fizzbuzzing calculates if the number is divisable by 3,5 or both
    fizzBuzz()
    {
      let output;
        for (let i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) 
            {
              
              output="FizzBuzz";
            } 
            else if (i % 3 == 0) 
            {
              
              output="Fizz";
            }
             else if (i % 5 == 0) 
            {
              
              output="Buzz";
            } 
            else 
            {
              
              output=i;
            }
          }
          this.display(output,i);
    }
    //i is counter for 1-100 j is counter for square on the html page
    display(output,i,j)
    {     
      document.getElementById(i).innerHTML=output;

    }


}
let fb;
window.onload=()=>{fb=new FizzBuzz()};

