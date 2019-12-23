import {Component, Input, OnInit} from '@angular/core';
import {BigOvenModelAPI2Recipe} from "../../../../../output/models";

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  @Input() recipe: BigOvenModelAPI2Recipe;
  steps:any;
  // instructions = this.recipe.Instructions;
  // step: BigOvenModelAPI2Recipe[];

  constructor() { }

  ngOnInit() {
    // this.stepsFunction();
    // console.log("This is steps" + ' ' + this.formatSteps(this.steps));
    // this.readInstructions(steps);
  }

  readInstructions(steps){

    let inst = this.recipe.Instructions;
    // console.log(inst);
    let patternStart =  /((\d{1,2})(\.\s+)((\W[A-Z])(\.\s)))/gm;
    let patterHeading = /((\w*[A-Z])(:))/gi;
    // let patternEnd = /((((?<!|approx|\sc|\sg|\sgal|\skg|\smg|\sl|\slb|\smin|\sml|\soz|\spt|\st|\stb|\stbl|\stbsp|\stsp|\sstep))(\))?\s+)(?!\())/i;
    let strartMatch = inst.match(patternStart);
    // let str2 = inst.match(patternEnd);
    let headingMatch = inst.match(patterHeading);

    // console.log('Pattern' + ' ' + headingMatch + '\n' + JSON.stringify(patternStart) );

    // console.log(inst);

    if (strartMatch !=null ) {
      if (strartMatch.length > 1) {
        inst = inst.replace(patternStart, ' ');
        // inst = inst.replace(patternEnd, '.');
        // console.log(inst);

      }
      else {
        return inst;
      }
    }
    // if (headingMatch !=null ) {
    //     if (headingMatch.length > 1) {
    //         let word = headingMatch;
    //         // console.log('this is word' + ' ' + word);
    //         inst = inst.replace(patterHeading, '');
    //         // inst = inst.replace(patterHeading,  '<br>');
    //         console.log(inst);
    //     }
    //     else {
    //         return inst;
    //     }
    // }

    // if (str2.length > 1) {
    //         inst = inst.replace(patternEnd, '');
    //     }
    // else {
    //     return inst;
    // }
    //


    let arr = inst.split('.');
    // console.log(arr);
    let outputSteps = [];

    for (let i = 0; i < arr.length; i++) {
      outputSteps.push(arr[i]);
      steps = outputSteps;
    }

    // console.log(steps);
    return steps;
    // console.log(JSON.stringify(lines[i]));

  }
// stepsFunction(){
//       this.formatSteps(this.steps);
//       console.log('Format steps' + ' ' + this.formatSteps(this.steps));
//       this.readInstructions(this.steps);
//     console.log('Read Instructions' + ' ' + this.readInstructions(this.steps));
// }

    formatSteps(steps){
    // check for predefined steps
    let instructions = this.recipe.Instructions;
    // console.log("Instr function" + " " + instructions);
    let patternStart =  /((\d{1,2})(\.\s+))/g;
        // /(\b([A-Z]))/gm;
    let patternEnd = /(\.\s+)/ig;
    // console.log("Pattern" + " " + pattern);
    let str = instructions.match(patternStart);

    let str2 = instructions.match(patternEnd);
    const conStr = '';
    console.log("--------------Str---------" + " " + JSON.stringify(str));
    console.log("--------------Str2---------" + " " + JSON.stringify(str2));

        // if (str.length > 1 || str2.length > 1) {
            //split string via predefined steps
            // let instructionsOne = instructions.replace(patternStart, '<div>');
            // steps = instructions.replace(patternEnd, '</div>'+'<br>');
            steps = instructions.replace(patternStart, conStr);
            console.log('Replace instr' + ' ' + steps);
            // console.log("Instructions IF:" + " " + regexInstructions)
        // }
        // else {
        //     // Parse for Steps:
        //     // Construct a delimiter for preparation steps
        //     pattern = /((((?<!\.\.\.|approx|\sc|\sg|\sgal|\skg|\smg|\sl|\slb|\smin|\sml|\soz|\spt|\st|\stb|\stbl|\stbsp|\stsp|\sstep)\.)(\))?\s+)(?!\())/i;
        //     instructions = instructions.replace(pattern, '$1 step');
        //     // console.log("Instructions Else:" + " " + regexInstructions)
        //     }

    // split instructions into steps:
    return steps;
    // str.split('{{step}}', instructions);




      // let str = this.recipe.Instructions;
 // return str;
 //    str.trim();
 //    str.split('<div>');
 //    if (str.match(/^\d/g)) {
 //        str.replace(/([0-9])\W+/g, '<div>')
 //    }

    // return str.replace(/\n/g, '<br/>');
 //  replace(/([0-9])\W+/g, '<div>')
 //        return str.replace(/\n/g, '<br/>');
    // str.replace(/\n/g, '<br/>');
        // replace(/\n/g, '<br/>');
}

}
