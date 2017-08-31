<?php 


$car = "toyota";
print("My car is ".$car);

$number = 1;
echo($number);

$operators = array("+", "-", "*", "/");

print($operators[0]);


$i = 0;
for ($i = 0; $i < 4; $i++) {
	print($operators[$i]);
	print("<br>"); //line break in PHP
	print($operators[$i]);
}

foreach($operators as $value) {
	print($value);
}


// 1st way to show sum
function additionI($num1, $num2) {
	$total = $num1 + $num2;
	return $total;
}
print(additionI(1, 2));


function additionII($num1, $num2) {
	$total = $num1 + $num2;
	return print($total);
}
additionII(1, 2);

// print($total); //This line is undefined, as $total is out of scope?
