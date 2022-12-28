const xmas = new Date("december 25, 2022 23:15:30");
const a = xmas.getMonth;
document.write(xmas);

document.write("<br>");


//week

// const first=new Date("may 20,2002 20:15:20");
// const b=first.getweek();
// console.log(first);



//fullyear//

const moonLanding = new Date('July 20, 22:20:18');

console.log(moonLanding.getFullYear())


//hours//

const hou=new Date("mat  08 09:57")
console.log(hou.getHours());

//millisecounds//

const mili=new Date("june 20,07:20:40");
console.log(mili.getMilliseconds());

//minitute//

const mini=new Date("june 20,07:20:40");
console.log(mini.getMinutes());


//month//


const mon=new Date("june 20,07:20:40");
console.log(mini.getMonth());


//secound//

const sec=new Date("june 20,07:20:40");
console.log(sec.getSeconds());


//time//


const tim=new Date("january 1,1970 00:00:00");
console.log(tim.getTime());


//time zoneoffset//
const ti=new Date("january 1,1970 09:20:03");
console.log(ti.getTimezoneOffset());



//years//

const year=new Date("january 1,032 09:20:03");
console.log(year.getFullYear());




//set//

//date//


const d = new Date('August 19, 1975 23:15:30');

d.setDate(24);

console.log(d.getDate());


//full years//


const f= new Date('August 19, 1975 23:15:30');

f.setFullYear(2019);

console.log(f.getFullYear());



//hours//


const h= new Date('August 19, 1975 23:15:30');

h.setHours(7);

console.log(h.getHours());

//millisecound//



const m= new Date('August 19, 1975 23:15:30');

m.setMilliseconds(20);

console.log(m.getMinutes());



//mitute//

const mi= new Date();

mi.setMinutes(40);

console.log(mi.getMinutes());


//month//

const mo= new Date();

mo.setMonth(6);

console.log(mo.getMonth());





//convert//


const event = new Date(2018,4,12);



console.log(event.toDateString());



//toISOString//

const iso = new Date('05 October 8601 14:48 UTC');
console.log(iso.toString());



//toJSON//


const json=new Date("july 09 2002 08:30:20 UTC ")
const jss=json.toJSON();
console.log(jss);


//toGMTstring//

const gm=new Date("july 09 2002 08:30:20 UTC ")
const gmt=gm.toUTCString();
console.log(gmt);


//tolocaldatestring//



const cal=new Date("july 09 2002 08:30:20 UTC ")
const call=cal.toLocaleDateString();
console.log(call);


//tolocalstring//

const lo=new Date("july 09 2002 08:30:20 UTC ")
const loc=lo.toLocaleString();
console.log(loc);



//to localetimestring//

const tm=new Date("july 09 2002 08:30:20 UTC ")
const tme=lo.toLocaleTimeString();
console.log(tme);


//tostring//


const o=new Date("july 09 2002 08:30:20 UTC ")
const os=o.toString();
console.log(os);


//totimestring//


const es=new Date("july 09 2002 08:30:20 UTC ")
const est=es.toTimeString();
console.log(est);

