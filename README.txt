Instructions:
    -   double click on the js-1.html file using the browser of your choice

About:
    -   create a canvasrenderingcontext2d and split it into 80x80 matrix of 10x10 cells
    -   each matrix cell can be on or off
    -   the N row of cells it the parent row of the N+1 row
    -   (N,M) cell is the direct result of the set of cells [(N-1,M-1),(N-1,M),(N-1,M+1)]
    -   the set of all possible configurations for the three parent cells is the corresponding state tansition table for this algorithm

Solution:
    -   assets/draw-stuff.js
        -   double loop to iterate through all 80 rows of 80 cells
        -   defer logic to statemechanism function and switch based on parent configurations
    

created by Zakaria Kara 
CS 439 project 1
https://github.com/ThaddKara/cella-rule45