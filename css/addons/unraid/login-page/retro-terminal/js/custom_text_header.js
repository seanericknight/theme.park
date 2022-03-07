
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
       __  ___      ____ _    __  ____ _____
      / / /   |    / __ \ |  / / /  _// ___/
 __  / / / /| |   / /_/ / | / /  / /  \__ \ 
/ /_/ / / ___ |_ / _, _/| |/ / _/ /_ ___/ / 
\____(_)_/  |_(_)_/ |_(_)___(_)___(_)____/  
                                             
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
