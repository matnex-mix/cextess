## CEXTESS
##### A javascript library that adds extra abilities to CSS inline styling of elements
```
<div style="padding: 1rem;" style:hover="border: blue;" style:focus="border: orange" style::after="content: ';'" -cxts->
	HELLO WORLD BY CEXTESS
</div>
```
## CEXTESS APIs
##### It works just like normal CSS inline styling with some extra features.

#### Pseudo Classes
```
active
checked
child-n
disabled
empty
enabled
focus
hover
in-range
invalid
lang
link
optional
out-of-range
read-only
read-write
required
root
target
type-n
valid
visited
```
##### The ```type-n & child-n``` works just like ```nth-of-type & nth-child``` of css respectively

#### Pseudo Elements
```
after
before
first-letter
first-line
selection
```
See here for more information [https://www.w3schools.com/css/css_pseudo_elements.asp](https://www.w3schools.com/css/css_pseudo_elements.asp)