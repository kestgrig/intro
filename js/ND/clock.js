/* 
as noriu pamatyti visas galimas laiko / laikrodzio kombinacijas
valandos tikslumu.
Intervalas yra nuo 1 iki 12.
Peteikimo formatas: 1:00, 2:00
1:00
1:15
1:30
1:45
2:00
2:15
2:30

*/

for (let val = 15; val < 24; val++) {

    for (let min = 0; min < 60; min++) {

        for (let sek = 0; sek < 60; sek++) {
            console.log(val + ':' + min + ':' + sek);
        }

    }

}