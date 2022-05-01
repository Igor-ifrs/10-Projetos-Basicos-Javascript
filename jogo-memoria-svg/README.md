 function magic(num) {
     const r = num * 12.5;
     return r === 0 ? "0" : String(r) + "%";
 }
 const matrix = [];
 for (let i = 0; i <= 8; i++) {
     for (let j = 0; j <= 8; j++) {
         matrix.push(`${magic(i)} ${magic(j)}`);
     }
 }
 console.log(matrix);