var weight = [38,49,67,123]
var sum = 0
function average(){
  for (var i =0;i<weight.length; i++){
    sum = sum + weight[i]
  }
var average = sum/weight.length
console.log(average)
}
function setup() 
{
  createCanvas(400,400);
  average();
}

function draw() 
{
background(51);

}

