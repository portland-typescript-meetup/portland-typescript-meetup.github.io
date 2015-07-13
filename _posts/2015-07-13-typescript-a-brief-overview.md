---
layout: post
title: "TypeScript - A Brief Overview"
author: "Ken Howard"
authorProfile: "https://github.com/kenhowardpdx"
summary: "Sometimes we need a little help to get things done in the most effiecient and safest possible way. Just like construction workers where hard hats to keep them safe from falling debris, JavaScript developers need protection from unforseen hazards too. TypeScript is our hard hat."
path: _posts/2015-07-13-typescript-a-brief-overview.md
---

### TypeScript Basics

At it's core TypeScript provides static typing that prevents a developer from breaking their application before runtime.

For example, if we have a function takes two parameters, `name` and `score`, one could derive that `name` would be a string value and `score` would be a number value. TypeScript allows the developer to enforce these types:

{% highlight javascript %}
function (name: string, score: number) {
	...
}
{% endhighlight %}

And if we don't fulfill that contract you'll see something like this in your editor:

![Broken TypeScript Contract](/images/blog/typescript-a-brief-overview-image1.png)

Place your cursor on `name` and you'll see what is wrong:

![Error Details](/images/blog/typescript-a-brief-overview-image2.png)

### ES2015 Features

In addition to bringing static typing to JavaScript, TypeScript gives us tomorrows features today. This means we can use Modules and Classes right now and the TypeScript transpiler will convert them into ES5 friendly code that can run today's browsers.

Other new features include:

* Lambda functions: `() => {}`
* Default parameter values: `(name = 'ken'){}`
* Template strings
* [and more](http://www.typescriptlang.org/Handbook)

### TypeScript Advanced

Some of TypeScripts advanced features will help bridge the gap for back end developers wanting some type safety in JavaScript. These include things like [interfaces](http://www.typescriptlang.org/Handbook#interfaces), [generics](http://www.typescriptlang.org/Handbook#generics), and [overloads](http://www.typescriptlang.org/Handbook#functions-overloads).

### Take What You Want

An important thing to remember when beginning with TypeScript is that it's 100% opt-in. You don't need do apply types to anything if you don't want to. TypeScript infers type where it can, otherwise it will set they type of `any` on your properties. This is very different from other typed languages.

Looking to get started writing your first bit of TypeScript? There are many [TypeScript resources](http://www.typescriptlang.org/) available in addition to a [playground](http://www.typescriptlang.org/Playground) where you can take the language service for a test drive.


