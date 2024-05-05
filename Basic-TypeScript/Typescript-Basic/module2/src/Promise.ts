{
  //promise

  type ToDo={
    id:number,
    userId:number,
    title:string,
    completed:boolean
  }

  const getToDo=async() : Promise<ToDo>=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await response.json();
    return data;
    console.log(data);
  }
 const jsonData= getToDo();
 console.log(jsonData);
 



  const createPromise = () : Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Something";

      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  const showData = async () : Promise<string> => {
    const data :string = await createPromise();
    // console.log(data);
    return data;
  };

  showData();


 

}
