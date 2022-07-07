function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let count = 0;
    for(let i = 1; i <= numero; i++)
    {
        if (i%2 != 0)
        {
            count++;
        }
    }
    return count;
}

// console.log(noParesDeContarImparesHasta(5));

function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí   
   let i = 1;
   while(i <= 10)
   {
       console.log(numero + " * " + i + " = " + i * numero);
       i++;
   }
}
tablaDeMultiplicar(5)