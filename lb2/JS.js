var mtx = new Array(10);
var sum=0;
var k=0;
for (i=0; i<mtx.length; i++){
    mtx[i]= new Array(10);
}
for (i = 0; i<=9; i++){
    for (j=0; j<=9; j++){
        mtx[i][j]=Math.floor(Math.random()*20)+10; 
    }

}

document.write("<br>");
document.write("<br>");

document.write("<div>")
for (i=0; i<=9; i++){
    for (j=0; j<=9; j++){
       
            document.write(mtx[i][j]+"<span> </span>");
        }
     document.write("<br>");
    }


    
	for (i=0; i<=9; i++){
		sum=0;
	    for (j=0; j<=9; j++){
	    		sum+=mtx[j][i];
	        }
	        sum/=10;
	        document.write(i+" столбец : "+sum+"<br>");
	    }

document.write("</div>")