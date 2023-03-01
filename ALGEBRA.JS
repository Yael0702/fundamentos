//multiplicacion de matrices = n * n
n1 = [[1,2,3],[4,5,6]];
n2 = [[7,8],[9,10],[11,12]];
//"Matriz 2x3"
//|1   2    3|  
//|4   5   6|

//"Matriz 3x2"
//|7    8|
//|9   10|
//|11  12|
fil_n1 = n1.length;
col_n1 = n1[0].length;

fil_n2 = n2.length;
col_n2 = n2[0].length;
if (col_n1 != fil_n2)
  throw "No se pueden multiplicar las matrices";
  let multiplicacion = new Array(fil_n1);
  for (x=0; x<multiplicacion.length;x++)
      multiplicacion[x] = new Array(col_n2).fill(0);
      for (x=0; x < multiplicacion.length; x++) {
        for (y=0; y < multiplicacion[x].length; y++) {                                
            for (z=0; z<col_n1; z++) {
                multiplicacion [x][y] = multiplicacion [x][y] + n1[x][z]*n2[z][y]; 
            }
        }
    }