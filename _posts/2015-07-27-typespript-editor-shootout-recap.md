---
layout: post
title: "Recap: TypeScript Editor Shootout"
author: "Ken Howard"
authorProfile: "https://github.com/kenhowardpdx"
summary: "Here's the conclusion to this month's TypeScript Editor Shootout where four brave souls demonstrated five different editors/IDEs. The results may suprise you."
path: _posts/2015-07-13-typescript-a-brief-overview.md
---

We have a mix of JavaScript beginners and veterans who's work environments vary from one developer to the next. Because of this we wanted to give an idea of what writing TypeScript feels like in these five editors: [Atom](https://atom.io/), [Sublime Text](http://www.sublimetext.com/), [Visual Studio](https://www.visualstudio.com/vs-2015-product-editions), [Visual Studio Code](https://www.visualstudio.com/products/code-vs), [Web Storm](https://www.jetbrains.com/webstorm/).

## Atom
Recap by: [James Churchill](https://github.com/smashdevcode)

## Sublime Text
Recap by: [Ken Howard](https://github.com/kenhowardpdx)

As editors go, Sublime Text is a favorite among JavaScript developers. There are countless plugins and themes available and it's cross platform.

To enable TypeScript integration, install [Node.js](https://nodejs.org/) and the [TypeScript plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin) by Microsoft. If you need a step-by-step guide you can follow Microsoft's ["Developing in TypeScript on a Mac with Sublime"](http://blogs.msdn.com/b/typescript/archive/2015/06/05/developing-in-typescript-on-a-mac-with-sublime.aspx) blog post.

_Notice:_ This plugin is an Alpha release (current version is 0.1.7). However, it does support the recently released TypeScript 1.5.

My first take on the plugin was that it was sub-par to other editors I've used for developing TypeScript. Some of the "features" of the language service weren't working properly. Then, near the end of June, Microsoft relased 0.1.5 which fixed a lot of bugs. Microsoft has a list of [Tips and Known Issues](https://github.com/Microsoft/TypeScript-Sublime-Plugin/wiki/Tips-and-Known-Issues) that they update regularly.

There are [shortcut commands](https://github.com/Microsoft/TypeScript-Sublime-Plugin#features) that give you access to much of the TypeScript's language service features.

#### The Good:
1. Properly handles tsconfig.json file.
2. Adds build task to Sublime that defaults to using tsconfig settings.

#### The Bad:
1. Errors in editor notification chrome are less than obvious.

## Visual Studio
Recap by: [James Churchill](https://github.com/smashdevcode)

## Visual Studio Code
Recap by: [Andrew Chalkley](https://github.com/chalkers)

Visual Studio Code is a promising editor. I say _promising_ because it's still in beta. Ever since Microsoft started announcing more Open Source projects, I was hoping for Visual Studio to become cross-platform. Visual Studio Code is the closest thing to that.

It's got the Intellisence of an IDE but without the heaviness of an IDE! It's light and nimble like a Text Editor, like Sublime or Atom. It gets out of your way and let's you use your own tools and workflow. However there are options for you to use Visual Studio Code's own task runner too. It supports tsconfig.json and jsconfig.json files too!

The only issue is that it's in beta and there's sometimes bugs for it recognising updates to some files like the tsconfig.json. That being said it's lightweight enough that to close it and open it again doesn't take that long at all.

#### The Good

1. It's got Intellisense!
2. It's lightweight and gets out of your way.
3. It's a great TypeScript and JavaScript editor.
4. It has [Emmet](http://emmet.io/) support built right in.
5. It's always improving.

#### The Bad

1. Still in beta and is quirky at times.

## Web Storm
Recap by: [Adron Hall](https://github.com/adron)

## Conclusion
