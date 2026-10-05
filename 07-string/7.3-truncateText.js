/* 

Create a function truncate(str, maxlength) 
that checks the length of the str and, 
if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
to make its length equal to maxlength

*/

function truncate(str, maxlength){
    return ( str.length  > maxlength)? str.slice(0, maxlength -1 ) + "..." : str
}

console.log( truncate("What I'd like to tell on this topic is:", 20) );
truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
truncate("Hi everyone!", 20) == "Hi everyone!"


/* 
ellipsis … itself takes up 1 character.
The goal is: The final string must have at most maxlength characters.

If we use maxlength directly in slice(), it would exceed the maximum allowed length. That’s why we use maxlength - 1.
*/