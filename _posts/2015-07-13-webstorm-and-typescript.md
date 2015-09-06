---
layout: post
title: "WebStorm and TypeScript"
author: "Adron Hall"
authorProfile: "https://github.com/adron"
summary: ""
path: _posts/2015-07-13-webstorm-and-typescript.md
---

# WebStorm and TypeScript
## Versions
![WebStorm](https://compositecode.files.wordpress.com/2015/07/webstorm.png)

WebStorm 10 offers support for TypeScript 1.4 and 1.5. This support is basically enabled out of the box. The minute that you launch WebStorm you will see TypeScript features available. This is the version that was included in the shootout for discussion on the panel at the TypeScript Editor Shootout @TypeScriptPDX.

## My Two Cents - i.e. My Favorite TypeScript Features in WebStorm
To see the full shootout, you'd have to have come to the TypeScript PDX meetup. But here's the key features that I enjoy in my day-to-day coding the most.

**TypeScript Transpiling**

First and foremost is the fact that WebStorm builds the TypeScript code files automatically the second you create them. The way to insure this is turned on is very simple and there are two avenues. One is to navigate into settings and turn it on in the TypeScript settings screen.

![TypeScript Settings / Transpiler Settings](http://photos.adron.me/Software/Software-Development/Work-Flow-of-JavaScript/i-GwSdhrT/0/O/typescript-feature-02.png)

The other option is simply to create a new TypeScript file in the project you're working in.

![Creating a new TypeScript File.](http://photos.adron.me/Software/Software-Development/Work-Flow-of-JavaScript/i-pLkh2z4/0/O/typescript01.png)

When the file is created and opened in the WebStorm Editor, a prompt above the file will show up to turn on the transpiler.

![Enable](http://photos.adron.me/Software/Software-Development/Work-Flow-of-JavaScript/i-LgZhchD/0/O/typescript02.png)

This will setup the project and turn on the transpiler for TypeScript. Once this is done any TypeScript file will automatically be compiled. For instance, I added this basic code to the coder.js file that I just created above.

      class Coder {
        name:string;
        constructor(theName: string) { this.name = theName; }
        swapWith(teamGroup: number = 0) {
          alert(this.name + " swapping " + teamGroup + "m.");
        }
      }

      class SwappingCoder extends Coder {
        constructor(name: string) { super(name); }
        swapWith(meters = 5) {
          alert("Slithering...");
          super.swapWith(meters);
        }
      }

      class SwappeeCoder extends Coder {
        constructor(name: string) { super(name); }
        swapWith(meters = 45) {
          super.swapWith(meters);
        }
      }

This code, as soon as I saved the file was immediately transpiled into the following JavaScript and .js.map file as shown.

First the JavaScript code of the transpilation.

      /**
       * Created by adron on 7/26/15.
       * Description: An class around the coder in the system.
       */
      var __extends = this.__extends || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
          function __() { this.constructor = d; }
          __.prototype = b.prototype;
          d.prototype = new __();
      };
      var Coder = (function () {
          function Coder(theName) {
              this.name = theName;
          }
          Coder.prototype.swapWith = function (teamGroup) {
              if (teamGroup === void 0) { teamGroup = 0; }
              alert(this.name + " swapping " + teamGroup + "m.");
          };
          return Coder;
      })();
      var SwappingCoder = (function (_super) {
          __extends(SwappingCoder, _super);
          function SwappingCoder(name) {
              _super.call(this, name);
          }
          SwappingCoder.prototype.swapWith = function (meters) {
              if (meters === void 0) { meters = 5; }
              alert("Slithering...");
              _super.prototype.swapWith.call(this, meters);
          };
          return SwappingCoder;
      })(Coder);
      var SwappeeCoder = (function (_super) {
          __extends(SwappeeCoder, _super);
          function SwappeeCoder(name) {
              _super.call(this, name);
          }
          SwappeeCoder.prototype.swapWith = function (meters) {
              if (meters === void 0) { meters = 45; }
              _super.prototype.swapWith.call(this, meters);
          };
          return SwappeeCoder;
      })(Coder);
      //# sourceMappingURL=coder.js.map

Now the map JSON data that is also transpiled automatically by WebStorm.

      {"version":3,"file":"coder.js","sourceRoot":"","sources":["coder.ts"],"names":["Coder","Coder.constructor","Coder.swapWith","SwappingCoder","SwappingCoder.constructor","SwappingCoder.swapWith","SwappeeCoder","SwappeeCoder.constructor","SwappeeCoder.swapWith"],"mappings":"AAAA;;;GAGG;;;;;;;AAEH,IAAM,KAAK;IAETA,SAFIA,KAAKA,CAEGA,OAAeA;QAAIC,IAAIA,CAACA,IAAIA,GAAGA,OAAOA,CAACA;IAACA,CAACA;IACrDD,wBAAQA,GAARA,UAASA,SAAqBA;QAArBE,yBAAqBA,GAArBA,aAAqBA;QAC5BA,KAAKA,CAACA,IAAIA,CAACA,IAAIA,GAAGA,YAAYA,GAAGA,SAASA,GAAGA,IAAIA,CAACA,CAACA;IACrDA,CAACA;IACHF,YAACA;AAADA,CAACA,AAND,IAMC;AAED,IAAM,aAAa;IAASG,UAAtBA,aAAaA,UAAcA;IAC/BA,SADIA,aAAaA,CACLA,IAAYA;QAAIC,kBAAMA,IAAIA,CAACA,CAACA;IAACA,CAACA;IAC1CD,gCAAQA,GAARA,UAASA,MAAUA;QAAVE,sBAAUA,GAAVA,UAAUA;QACjBA,KAAKA,CAACA,eAAeA,CAACA,CAACA;QACvBA,gBAAKA,CAACA,QAAQA,YAACA,MAAMA,CAACA,CAACA;IACzBA,CAACA;IACHF,oBAACA;AAADA,CAACA,AAND,EAA4B,KAAK,EAMhC;AAED,IAAM,YAAY;IAASG,UAArBA,YAAYA,UAAcA;IAC9BA,SADIA,YAAYA,CACJA,IAAYA;QAAIC,kBAAMA,IAAIA,CAACA,CAACA;IAACA,CAACA;IAC1CD,+BAAQA,GAARA,UAASA,MAAWA;QAAXE,sBAAWA,GAAXA,WAAWA;QAClBA,gBAAKA,CAACA,QAAQA,YAACA,MAAMA,CAACA,CAACA;IACzBA,CAACA;IACHF,mBAACA;AAADA,CAACA,AALD,EAA2B,KAAK,EAK/B"}

This is a great feature, as it removes any need for manually building these files and such. Immediately they're available in other code files when this is enabled.

Code Formatting

One of the next features I really like is the code formatting that is available in the TypeScript settings for the language.

![TypeScript Code Formatting / Styles](http://photos.adron.me/Software/Software-Development/Work-Flow-of-JavaScript/i-RGvSTcz/0/O/typescript-feature-01.png)

**Code Completion**

* Basic code completion on ^ Space.
* Type completion on ^ ⇧ Space.
* Completing punctuation on Enter.
* Completing statements with smart Enter.
* Completing paths in the Select Path dialog.
* Expanding words with ⌥ Slash.

**Refactoring**

Out of the top features I like, along with automatic transpiling, from WebStorm (and the other jetbrains products too) is the ability to do various refactorings on the code base! This one is also more valuable than the transpiling feature, by far, but it's right there on par as far as my own interest in the feature since I find manually transpiling annoying.

* [Copy/Clone](https://www.jetbrains.com/webstorm/help/copy-clone.html) - The Copy refactoring allows you to copy a class, file, or directory with its entire structure from one directory to another, or clone it within the same directory.
* [Move Refactorings](https://www.jetbrains.com/webstorm/help/move-refactorings.html) - The Move refactorings allow you to move files and directories within a project. So doing, WebStorm automatically corrects all references to the moved symbols in the source code.
* [Renaming](https://www.jetbrains.com/webstorm/help/rename-refactorings.html) - Rename refactorings allow you to rename symbols , automatically correcting all references in the code.
* [Safe Delete](https://www.jetbrains.com/webstorm/help/safe-delete.html) - The Safe Delete refactoring lets you safely remove files and symbols from the source code.
* [Extract Method](https://www.jetbrains.com/webstorm/help/extract-method.html) - When the Extract Method refactoring is invoked in the JavaScript context , WebStorm analyses the selected block of code and detects variables that are the input for the selected code fragment and the variables that are output for it.
* [Extract Variable](https://www.jetbrains.com/webstorm/help/extract-variable.html) - The Extract Variable refactoring puts the result of the selected expression into a variable. It declares a new variable and uses the expression as an initializer. The original expression is replaced with the new variable.
* [Change Signature](https://www.jetbrains.com/webstorm/help/change-signature-in-javascript.html) - In JavaScript, you can use the Change Signature refactoring to:
	* Change the function name.
	* Add new parameters and remove the existing ones. Note that you can also add a parameter using a dedicated Extract Parameter refactoring.
	* Reorder parameters.
	* Change parameter names.
	* Propagate new parameters through the method call hierarchy.
* [Extract Parameter](https://www.jetbrains.com/webstorm/help/extract-parameter-in-javascript.html) - The Extract Parameter refactoring is used to add a new parameter to a method declaration and to update the method calls accordingly.

So that's the skinny on WebStorm and TypeScript. Happy hacking, cheers!
