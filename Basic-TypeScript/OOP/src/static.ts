{

    //static
    //single point theke change hobe..instance alada create holeo 1 ta jayga theke change hobe

    class Count{
      static  count :number =0;

      //this na die self Class(count) k diye acccess kora hosse
        increment(){
            return (Count.count=Count.count+1);
        }
        decrement(){
            return (Count.count=Count.count-1);
        }
     static  increment1(){
            return (Count.count=Count.count+1);
        }
      static  decrement1(){
            return (Count.count=Count.count-1);
        }
    }

   const instance1=new Count();
   console.log(instance1.increment());//1 ==>diff memory allocated
    
   const instance2=new Count();
   console.log(instance1.increment());//1 ..diff mem allocation
    
   console.log(Count.increment1());//static method call using Class name
   console.log(Count.increment1());
   


}