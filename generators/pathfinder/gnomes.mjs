export default function gnomes() {
  let rnd;

  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let
    rnd9;
  let rnd10;
  let rnd11;
  let rnd12;
  let rnd13;
  let rnd14;
  let rnd15;
  let
    rnd16;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'br', 'c', 'ch', 'd', 'dr', 'f', 'g', 'gr', 'h', 'k', 'kr', 'n', 'p', 'q', 'r', 'shm', 't', 'tr', 'v', 'vr', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ie', 'iu', 'ou', 'ee', 'uo', 'ua'];
  const nm3 = ['b', 'b', 'b', 'br', 'bn', 'ck', 'cr', 'cd', 'dp', 'dq', 'dw', 'k', 'k', 'k', 'kq', 'kr', 'kw', 'l', 'l', 'l', 'll', 'll', 'lm', 'lz', 'lb', 'ld', 'm', 'm', 'm', 'mb', 'mz', 'n', 'n', 'n', 'nn', 'nd', 'ndr', 'ng', 'nt', 'nz', 'nq', 'p', 'p', 'p', 'pq', 'pr', 'r', 'r', 'r', 'rgr', 'rn', 'rw', 'rz', 'shm', 'sht', 'sn', 'st', 't', 't', 't', 'th', 'tq', 'tr', 'v', 'v', 'v', 'z', 'z', 'z', 'zz', 'zn'];
  const nm4 = ['', '', '', 'ck', 'd', 'm', 'n', 'nt', 'r', 'rd', 's', 'st', 't', 'tt', 'x'];
  const nm5 = ['', '', '', '', 'b', 'd', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'sn', 't', 'tr', 'y', 'v', 'w', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ue', 'io', 'ie', 'ia', 'ai'];
  const nm7 = ['b', 'b', 'b', 'b', 'bl', 'c', 'c', 'c', 'c', 'd', 'd', 'd', 'f', 'f', 'f', 'ff', 'ff', 'fl', 'fn', 'fr', 'fl', 'g', 'g', 'g', 'g', 'gn', 'gg', 'h', 'h', 'h', 'hh', 'hh', 'j', 'j', 'j', 'k', 'k', 'k', 'k', 'kn', 'kz', 'l', 'l', 'l', 'l', 'l', 'lm', 'ln', 'lz', 'lb', 'lf', 'm', 'm', 'm', 'm', 'mm', 'mm', 'mz', 'ml', 'mb', 'mp', 'n', 'n', 'n', 'n', 'nn', 'nk', 'np', 'nz', 'nl', 'ns', 'nk', 'p', 'p', 'p', 'p', 'ph', 'pr', 'pn', 'r', 'r', 'r', 'r', 'rz', 'rl', 'rs', 'rr', 's', 's', 's', 's', 'sh', 'sl', 'sn', 'sm', 't', 't', 't', 'th', 'thr', 'tr', 'v', 'v', 'v', 'vr', 'vl', 'vn', 'x', 'x', 'x', 'z', 'z', 'z', 'z', 'zz', 'zn', 'zl'];
  const nm8 = ['ck', 'g', 'm', 'n', 's', 'sh', 't', 'th'];
  const nm9 = ['', '', '', '', '', 'b', 'bl', 'ch', 'd', 'f', 'fr', 'g', 'gl', 'gr', 'h', 'j', 'k', 'kl', 'kr', 'm', 'n', 'p', 'q', 'qr', 'r', 's', 'sh', 't', 'th', 'v', 'w', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'aa', 'ee', 'ae', 'oo', 'ie', 'ua', 'uo', 'io', 'ia'];
  const nm11 = ['b', 'bbl', 'bl', 'br', 'c', 'cl', 'cn', 'd', 'ddl', 'dl', 'dn', 'dr', 'df', 'gn', 'g', 'gl', 'ggl', 'gw', 'l', 'lp', 'lf', 'lb', 'ld', 'ldr', 'lm', 'ln', 'll', 'm', 'mb', 'nd', 'n', 'nc', 'ngn', 'ns', 'nt', 'nz', 'p', 'pl', 'pp', 'ppl', 'pr', 'pn', 'psw', 'r', 'rl', 'rnd', 'rnf', 'sn', 'tr', 'th', 'tl', 'ttl', 'v', 'vr', 'w', 'wl', 'z', 'zb', 'zl'];
  const nm12 = ['', '', '', '', '', 'b', 'bs', 'd', 'ck', 'cks', 'g', 'h', 'm', 'ms', 'n', 'ng', 'r', 'sp', 'ss', 'st', 'th'];


  const i = Math.floor(Math.random() * 10);
  {
    rnd10 = Math.floor(Math.random() * nm9.length);
    rnd11 = Math.floor(Math.random() * nm10.length);
    rnd12 = Math.floor(Math.random() * nm12.length);
    if (i % 3 === 0 && i % 2 != 0) {
      rnd13 = Math.floor(Math.random() * nm11.length);
      rnd14 = Math.floor(Math.random() * nm10.length);
      nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm12[rnd12];
    } else if (i % 2 === 0) {
      rnd13 = Math.floor(Math.random() * nm11.length);
      rnd14 = Math.floor(Math.random() * nm10.length);
      rnd15 = Math.floor(Math.random() * nm11.length);
      rnd16 = Math.floor(Math.random() * nm10.length);
      nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm11[rnd15] + nm10[rnd16] + nm12[rnd12];
    } else {
      while (rnd10 < 5) {
        rnd10 = Math.floor(Math.random() * nm9.length);
      }
      while (rnd12 < 5) {
        rnd12 = Math.floor(Math.random() * nm12.length);
      }
      nameLast = nm9[rnd10] + nm10[rnd11] + nm12[rnd12];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 4) {
        while (rnd < 4) {
          rnd = Math.floor(Math.random() * nm5.length);
        }
        names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd5]} ${nameLast}`;
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]} ${nameLast}`;
      } else if (i < 9) {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5]} ${nameLast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        rnd8 = Math.floor(Math.random() * nm7.length);
        rnd9 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm7[rnd8] + nm6[rnd9] + nm8[rnd5]} ${nameLast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 3) {
        while (rnd < 4) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        while (rnd5 < 3) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${nameLast}`;
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${nameLast}`;
      } else if (i < 9) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5]} ${nameLast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        rnd8 = Math.floor(Math.random() * nm3.length);
        rnd9 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm3[rnd8] + nm2[rnd9] + nm4[rnd5]} ${nameLast}`;
      }
    }
    return names;
  }
}
