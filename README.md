Angular notes:

Angular Directives:

1) What are angular directives?
=> 
a) Directives are classes that add new behavior or modify the existing behavior to the elements in the template.
b) Directives are used to manipulate the DOM, for example adding/removing the element from DOM or changing the appearance of the DOM elements.

Types: 

1) Component directive
2) Structural directive
3) Attribute directive


Component directive:
=> 
If you see the definition of the directive, it says directives are used to manipulate the DOM. Component shows something in the DOM with the help of templateUrl, styleUrls hence a component is also called a directive.


Structural directive:
=>
Structural directives are used to change the DOM layout by adding and removing DOM elements. It basically changes the structure of the DOM.
Examples of structural directives are ngIf, ngFor, ngSwitch.

*ngIf — adds or removes element from DOM.
*ngFor — renders list of elements on every iteration.

All structural Directives are preceded by Asterix (*)symbol.


Attribute directive:
=>
Attribute directives are used to change the appearance or behavior of an element.

Examples of attributes directives are ngStyle, ngClass, ngModel

ngStyle — used to apply styles that will change the appearance.
ngClass — used to apply CSS classes to change the appearance.



Creating our own Attribute directive:

Creating a custom directive is just like creating an Angular component. To create a custom directive we have to replace @Component decorator with @Directive decorator.

1) Create a class and add @Directive decorator to it and pass the object which has selector property (name of the directive)
2) To create an attribute directive we need to access the HTML element on which the directive is getting applied, for that we will inject ElementRef dependency using constructor in our class.
