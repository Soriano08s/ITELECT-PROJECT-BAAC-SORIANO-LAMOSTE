//Array of question grouped by category (25questions each)
const questions = [
  {
    category:"html",
    questions:[
      {
        question:"What does HTML stand for?",
        options:["Hyperlinks and Text Markup Language","Home Tool Markup Language","HyperText Markup Language","Hyper Transfer Markup Language"],
        correctAnswer:2,
      },

      {
        question:"Which HTML tag is used to create a hyperlink?",
        options:["<hyper>","<a>","<link>","<url>"],
        correctAnswer:1,
      },

      {
        question:"Which tag is used to insert an image?",
        options:["<img>","<image>","<pic>","<src>"],
        correctAnswer:0,
      },

      {
        question:"What attribute is required in the <img> tag?",
        options:["width","height","src","alt"],
        correctAnswer:2,
      },

      {
        question:"Which tag is used to create the largest heading?",
        options:["<h6>","<h1>","<header>","<heading>"],
        correctAnswer:1,
      },

      {
        question:"Which tag is used to create a numbered list?",
        options:["<ul>","<ol>","<li>","<dl>"],
        correctAnswer:1,
      },

      {
        question:"What does the <br> tag do?",
        options:["Bold text","Insert a line break","Create a border","Break a section"],
        correctAnswer:1,
      },

      {
        question:"Which element is used to define important text?",
        options:["<strong>","<i>","<em>","<mark>"],
        correctAnswer:0,
      },

      {
        question:"Which tag is used to define a table row?",
        options:["<tr>","<td>","<th>","<row>"],
        correctAnswer:0,
      },

      {
        question:"Which tag is used to define metadata in HTML?",
        options:["<meta>","<info>","<data>","<script>"],
        correctAnswer:0,
      },

      {
        question:"What is the correct HTML element for inserting a line of horizontal rule?",
        options:["<hr>","<line>","<border>","<hline>"],
        correctAnswer:0,
      },

      {
        question:"Which HTML element is used to play video files?",
        options:["<movie>","<media>","<video>","<player>"],
        correctAnswer:2,
      },

      {
        question:"Which attribute specifies an input field must be filled out?",
        options:["fill","need","required","must"],
        correctAnswer:2,
      },

      {
        question:"Which tag is used to group content inside a section block?",
        options:["<header>","<footer>","<section>","<div>"],
        correctAnswer:3,
      },

      {
        question:"Which HTML5 element is used to draw graphics on the web?",
        options:["<paint>","<graphics>","<draw>","<canvas>"],
        correctAnswer:3,
      },

    ]
  },

  {
    category:"css",
    questions:[
      {
        question:"What does CSS stand for?",
        options:["Creative Style Sheets","Cascading Style Sheets","Colorful Style Syntax","Computer Style System"],
        correctAnswer:1,
      },

      {
        question:"Which HTML tag is used to link an external CSS file?",
        options:["<style>","<css>","<link>","<script>"],
        correctAnswer:0,
      },

      {
        question:"Which property is used to change the text color?",
        options:["font-style","text-color","color","foreground"],
        correctAnswer:2,
      },

      {
        question:"What is the correct syntax to apply a class in CSS?",
        options:["#classname {}",".classname {}","classname {}","@classname {}"],
        correctAnswer:1,
      },

      {
        question:"Which CSS property controls the size of text?",
        options:["font-size","text-style","size","text-size"],
        correctAnswer:0,
      },

      {
        question:"Which value makes an element disappear but still take space?",
        options:["display: none;","visibility: hidden;","opacity: 0;","hidden: true;"],
        correctAnswer:1,
      },

      {
        question:"Which property is used to change the background color?",
        options:["color-background","background-color","bg-color","back-color"],
        correctAnswer:1,
      },

      {
        question:"How do you select an element with the id 'header'?",
        options:["header {}",".header {}","#header {}","*header {}"],
        correctAnswer:1,
      },

      {
        question:"Which unit is relative to the root font size?",
        options:["em","rem","%","px"],
        correctAnswer:1,
      },

      {
        question:"Which property adds space inside an element's border?",
        options:["border-width","spacing","margin","padding"],
        correctAnswer:3,
      },

      {
        question:"What is the default display value for a <div>?",
        options:["flex","block","inline","inline-block"],
        correctAnswer:1,
      },

      {
        question:"Which CSS rule makes text bold?",
        options:["text-bold: yes;","font-weight: bold;","font-style: bold;","text-weight: bold;"],
        correctAnswer:1,
      },

      {
        question:"Which CSS property is used for rounded corners?",
        options:["border-corner","border-radius","border-style","corner-radius"],
        correctAnswer:1,
      },

      {
        question:"What does flex-direction: column; do?",
        options:["Aligns items horizontally","Reverses the flex layout","Shrinks all flex items","Aligns items vertically"],
        correctAnswer:3,
      },

      {
        question:"How do you create a comment in CSS?",
        options:["// comment","<!-- comment -->","/* comment */","** comment **"],
        correctAnswer:2,
      },

    ]
  },

  {
    category:"javascript",
    questions:[
      {
        question:"Which keyword is used to declare a variable in JavaScript?",
        options:["var","let","const","All of the above"],
        correctAnswer:3,
      },

      {
        question:"What is the correct way to write a comment in JavaScript?",
        options:["<!-- comment -->","// comment","/* comment */","Both B and C"],
        correctAnswer:3,
      },

      {
        question:"Which method outputs a message to the web console?",
        options:["console.print()","console.log()","log.console()","print()"],
        correctAnswer:1,
      },

      {
        question:"What data type is returned by typeof null?",
        options:["null","undefined","object","boolean"],
        correctAnswer:2,
      },

      {
        question:"Which symbol is used for strict equality comparison?",
        options:["==","=","===","=>"],
        correctAnswer:2,
      },

      {
        question:"Which function is used to convert a string to an integer?",
        options:["parseInt()","parse()","int()","NumberString()"],
        correctAnswer:0,
      },

      {
        question:"What will '5' + 3 output?",
        options:["8","53","5.3","Error"],
        correctAnswer:1,
      },

      {
        question:"How do you create a function in JavaScript?",
        options:["function myFunc() {}","function: myFunc() {}","create function myFunc() {}","func myFunc() {}"],
        correctAnswer:2,
      },

      {
        question:"Which of the following is NOT a JavaScript data type?",
        options:["Boolean","Undefined","Float","String"],
        correctAnswer:1,
      },

      {
        question:"What does NaN stand for?",
        options:["Not a Null","Not a Number","New and Null","Number and Name"],
        correctAnswer:1,
      },

      {
        question:"Which method adds an element to the end of an array?",
        options:["push()","pop()","shift()","add()"],
        correctAnswer:0,
      },

      {
        question:"What does == do in JavaScript?",
        options:["Compares without type conversion","Compares with type conversion","Assigns a value","Checks identity"],
        correctAnswer:1,
      },

      {
        question:"Which loop is guaranteed to run at least once?",
        options:["for","while","do...while","none"],
        correctAnswer:2,
      },

      {
        question:"How do you access the first element of an array let arr = [10, 20, 30]?",
        options:["arr.first","arr(0)","arr[1]","arr[0]"],
        correctAnswer:3,
      },

      {
        question:"What does return do inside a function?",
        options:["Ends the function","Sends a value back to the caller","Both A and B","Deletes the function"],
        correctAnswer:2,
      },

    ]
  },
];