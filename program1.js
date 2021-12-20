/* Program 1.*/ 
// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

/* This is a program to print the Area of a Triangle when all the length of it's three sides are available. */
/* Formula is,
Area = square root(p(p-a)(p-b)(p-c))	where p, is half the perimeter, or (a+b+c)/2, a,b,c be the sides of the Triangle.

 */

 // Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.


let sideA = 5;
let sideB = 6;
let sideC = 7;
let halfPerimeter = (5+6+7)/2;

let area = Math.sqrt(halfPerimeter*(halfPerimeter-sideA)*(halfPerimeter-sideB)*(halfPerimeter-sideC));

alert("Area of the triangle: "+ area);