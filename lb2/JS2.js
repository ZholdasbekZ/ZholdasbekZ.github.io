var mtx = new Array(15);
for (i=0; i<mtx.length; i++){
    mtx[i]= new Array(15);
}
for (i = 0; i<=14; i++){
    for (j=0; j<=14; j++){
        mtx[i][j]=Math.floor(Math.random()*10); 
    }

}

document.write("<br>");
document.write("<br>");

document.write("<div>")
for (i=0; i<=14; i++){
    for (j=0; j<=14; j++){
       
            document.write(mtx[i][j]+"<span> </span>");
        }
     document.write("<br>");
    }


  
	for (i=0; i<=14; i++){
	    for (j=0; j<=14; j++){
	    		if (mtx[i][j]==0)
	    		 {
	    		 	document.write("Индекс нулевого элемента: "+i+","+j+"<br>");
	    		 }
	        }
	    }

document.write("</div>")

   

