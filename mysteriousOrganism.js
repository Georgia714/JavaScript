// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      let dnaBase = returnRandBase()
      let randomBase = Math.floor(Math.random() * this.dna.length)
      //console.log("Original DNA base = " + this.dna[randomBase])
      //console.log("Index = " + randomBase)
      while (this.dna[randomBase] === dnaBase) {
        dnaBase = returnRandBase()
      }
      this.dna[randomBase] = dnaBase;
      //console.log("New DNA base = " + this.dna[randomBase])
      return this.dna;
      
    },
    compareDNA(pAequor) {
      const ex1 = this.dna;
      const ex2 = pAequor.dna;
      let commonBases = 0;
      let percentage;
      for (let i = 0; i < ex1.length; i++) {
        for (let j = 0; j < ex2.length; j++) {
          if (ex1[i] === ex2[j] && i === j) {
            console.log(ex1[i] + ex2[j])
            commonBases++
          }
        }
      }
      percentage = Math.round((commonBases / ex1.length) * 100);
      return `Specimen #1 and specimen #2 have ${percentage}% DNA in common.`

    },
    willLikelySurvive() {
      let cgBases = 0;
      let percentageCGBases;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cgBases++
        }
      }
      console.log(cgBases)
      percentageCGBases = (cgBases/this.dna.length) * 100
      console.log(percentageCGBases)
      if (percentageCGBases >= 60) {
        return true
      }
      else {
        return false
      }

     }
  }
}

//const test = pAequorFactory(1, mockUpStrand())
//const test2 = pAequorFactory(2, mockUpStrand())
//console.log(test)
//console.log(test.dna)
//console.log(test.mutate())
//console.log(test2.dna)
//console.log(test.compareDNA(test2))
//console.log(test.willLikelySurvive())

const speciesArray = []
for (let i = 0; i < 30; i++) {
  speciesArray.push(pAequorFactory(i, mockUpStrand()))
}

console.log(speciesArray.length)
for (let i = 0; i < speciesArray.length; i++) {
  //console.log(speciesArray[i].dna)
  console.log(i)
}

