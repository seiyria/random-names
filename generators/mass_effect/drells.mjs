export default function drells() {
  let rnd;

  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let
    rnd8;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  let nm1 = [''];
  const nm2 = ['ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'si', 'su', 'se', 'so', 'sha', 'shi', 'shu', 'she', 'sho', 'ta', 'ti', 'tu', 'te', 'to', 'tha', 'thi', 'thu', 'the', 'tho', 'dra', 'dri', 'dru', 'dre', 'dro', 'ma', 'mi', 'mu', 'me', 'mo', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'hu', 'he', 'ho', 'fa', 'fi', 'fu', 'fe', 'fo', 'ra', 'ri', 'ru', 're', 'ro', 'la', 'li', 'lu', 'le', 'lo', 'ya', 'yi', 'yu', 'ye', 'yo'];
  const nm3 = ['n', 'l', 't', 'k', 's', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'si', 'su', 'se', 'so', 'ta', 'ti', 'tu', 'te', 'to', 'ma', 'mi', 'mu', 'me', 'mo', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'hu', 'he', 'ho', 'fa', 'fi', 'fu', 'fe', 'fo', 'ra', 'ri', 'ru', 're', 'ro', 'la', 'li', 'lu', 'le', 'lo', 'ya', 'yi', 'yu', 'ye', 'yo'];
  const nm5 = ['n', 'l', 't', 'k', 's', 'h', 'm', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['n', 'l', 't', 'k', 's'];

  if (type === 1) {
    nm1 = ['a', 'e', 'i', 'o', 'u'];
  } else {
    nm1 = [''];
  }


  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm2.length);
    rnd7 = Math.floor(Math.random() * nm6.length);
    rnd8 = Math.floor(Math.random() * nm7.length);
    names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5]} ${nm2[rnd6]}${nm6[rnd7]}${nm7[rnd8]}`;
    return names;
  }
}
