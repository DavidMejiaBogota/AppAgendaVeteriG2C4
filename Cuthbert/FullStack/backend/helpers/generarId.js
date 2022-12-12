const generarId = () =>{
return Date.now().toString(32)+ Math.random().toString(32).substring(2);
};
//este numero es un id corto
//const generarId = () =>{
   // return Date.now().toString(32)
    //};

export default generarId;