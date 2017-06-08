// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 5: Evolutionary Computing

// Genetic Algorithm, Evolving Shakespeare

// A class to describe a psuedo-DNA, i.e. genotype
//   Here, a virtual organism's DNA is an array of character.
//   Functionality:
//      -- convert DNA into a string
//      -- calculate DNA's "fitness"
//      -- mate DNA with another set of DNA
//      -- mutate DNA

function newChar() {
  var c = floor(random(63,122));
  if (c === 63) c = 32;
  if (c === 64) c = 46;

  return String.fromCharCode(c);
}

// Constructor (makes a random DNA)
function DNA(num) {
  // The genetic sequence
  this.genes = [];
  this.fitness = 0;
  for (var i = 0; i < num; i++) {
    this.genes[i] = newChar();  // Pick from range of chars
    }

  // Converts character array to a String
  this.getPhrase = function() {
    return this.genes.join("");
  }

  // Fitness function (returns floating point % of "correct" characters)
  this.calcFitness = function(target) {
     var score = 0;
     for (var i = 0; i < this.genes.length; i++) {
        if (this.genes[i] == target.charAt(i)) {
          score++;
          score*1.2;
        }
     }
     this.fitness = score / target.length;
  }

  // Crossover
  this.crossover = function(partner) {
    // A new child
    var child = new DNA(this.genes.length);

/*
1st crossover mechanism <<random break>>

    var midpoint = floor(random(this.genes.length)); // Pick a midpoint

    // Half from one, half from the other
    for (var i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else              child.genes[i] = partner.genes[i];
    }
*/

/*
2nd crossover mechanism <<remainder>>
  1st, 3rd, 5th, ... character, index [0], [2], [4], ... from this genes
  2nd, 4th, 6th, ... character, index [1], [3], [5], ... from partner genes

  The value of this method lies in working hard to come up with new crossover mechanism, but not the efficiency of evolution. If you use <<even number>>, it taks a lot more generation than <<random break>>.

    for (var i = 0; i < this.genes.length; i++) {
      if (i % 3 == 0 ) child.genes[i] = this.genes[i];
      else             child.genes[i] = partner.genes[i];
    }
*/

/*
3rd crossover mechanism <<allele>>
this.genes and partner.genes will get a random allele at every array index i,
the one with bigger allele can pass their character at the index

Far from adaptation theory, but it somehow shows the "fight between genes" in real organism. I implement probability at the stage of crossover, which makes it child only get the best genes from its parents. This increases the average fitness and really quickens the evolution.

*/
    for (var i = 0; i < this.genes.length; i++) {
      var myAllele = random(i, 0.01)/i;
      var partnerAllele = random(i, 0.01)/i;

      if (this.genes[i] == target.charAt(i)) {
        myAllele = myAllele * 1.5
      }

      if (partner.genes[i] == target.charAt(i)) {
        partnerAllele = partnerAllele * 1.5
      }

      if (myAllele > partnerAllele) child.genes[i] = this.genes[i];
      else                          child.genes[i] = partner.genes[i];
    }


    return child;
  }

  // Based on a mutation probability, picks a new random character
  this.mutate = function(mutationRate) {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = newChar();
      }
    }
  }
}
