export default function school_uniforms() {
  const nm1 = ['straight', 'striped', 'lined', 'finely striped', 'thickly striped', 'plain', 'checkered', 'loose fitting', 'narrow fitting'];
  const nm2 = ['Dacron', 'cotton', 'nylon', 'polycotton', 'polyester', 'cotton', 'nylon'];
  const nm3 = ['down to about their calves and thus reveal', 'down to just above', 'down to just under their knees, clearly revealing', 'down to just above their ankles and reveal', 'all the way down and partially cover', 'down to well below their knees and clearly reveal'];
  const nm3s = ['loafers', 'single strap shoes', 'double strap shoes', 'triple strap shoes', 'sporty loafers', 'lace-up shoes', 'slip-in shoes', 'Chelsea boots'];
  const nm4 = ['both of which are colored', 'each respectively colored'];
  const nm5 = ['almond', 'amber', 'apricot', 'aquamarine', 'auburn', 'azure', 'baby blue', 'beige', 'black', 'bronze', 'brown', 'burgundy', 'cardinal', 'cerulean', 'cobalt', 'crimson', 'denim', 'forest green', 'ginger', 'indigo', 'jade', 'jasmine', 'jasper', 'khaki', 'lavender', 'lilac', 'mahogany', 'maroon', 'navy', 'ochre', 'onyx', 'orchid', 'peach', 'rosewood', 'russet', 'scarlet', 'sepia', 'sienna', 'sinopia', 'tangerine', 'tawny', 'teal', 'vanilla', 'vermilion', 'viridian', 'wheat'];
  const nm6 = ['long', 'short', 'regular'];
  const nm7 = ['and a simple belt ', 'and a thick belt ', ' and a regular belt ', '', ''];
  const nm8 = ['A white', 'An almond', 'A beige', 'A cream', 'A floral white', 'A ghost white', 'An ivory'];
  const nm8b = ['long sleeved', 'short sleeved', 'fairly short sleeved', 'long sleeved'];
  const nm9 = ['neatly tucked into', 'gently tucked into', 'almost perfectly tucked into', 'barely tucked into', 'roughly tucked into', 'loosely hanging over', 'neatly hanging over', 'playfully hanging over', 'somewhat messily hanging over', 'carelessly hanging over'];
  const nm10 = ['basic', 'charming', 'classic', 'clear-cut', 'comfortable', 'diligent', 'discrete', 'fairly long', 'fancy', 'formal', 'graceful', 'heavy', 'humble', 'lavish', 'light', 'lined', 'long', 'loose', 'luxurious', 'moderate', 'modest', 'mundane', 'narrow', 'navy', 'neat', 'plain', 'regular', 'short', 'simple', 'slim', 'standard', 'stylish', 'thick', 'thin', 'tight', 'wide'];
  const nm11 = ['long', 'short', 'thin', 'wide', 'narrow', 'slim', 'lean', 'light', 'fine', 'broad'];
  const nm12 = ['splits right down', 'hangs gently in', 'playfully dangles in', 'neatly rests in', 'divides', 'neatly splits', 'drops freely down', 'hangs neatly in', 'playfully hangs in', 'hangs down', 'is tucked in', 'is neatly tucked behind'];
  const nm13 = ['buttoned up', 'half buttoned up', 'unbuttoned', 'mostly buttoned up', 'barely buttoned up', 'rarely buttoned up', 'often unbottoned', 'half unbottoned'];
  const nm14 = ['striped', 'dotted', 'thinly striped', 'broadly striped', 'thinly dotted', 'diagonally striped', 'horizontally striped', 'vertically striped', 'gingerly dotted', 'moderately dotted', 'patterned', 'checkered', 'broadly checkered', 'thinly checkered', 'crisscrossed', 'broadly crisscrossed', 'thinly crisscrossed', 'plain and undecorated'];
  const nm15 = ['straight', 'circle', 'accordion', 'pleated', 'box pleated', 'paneled', 'wrap', 'bubble', 'layered', 'tiered', 'pencil'];
  const nm16 = ['reach down to just above their calves', 'dangle down to just below their knees', 'reach down to just above their ankles', 'dangle all the way down to their feet', 'cover the entirety of their legs', 'reveal their legs from the knees down', 'just reveal their calves', 'reach down to well below their knees', 'dangle down to about their calves', 'reach to just above their ankles', 'dangle down to about their ankles'];
  const nm16s = ['Mary Jane shoes', 'toe cap shoes', 'brogue shoes', 'plimsolls', 'pumps', 'wedge shoes'];
  const nm17 = ['knee high', 'striped', 'dotted', 'crisscrossed', 'regular', 'over the calf', 'thigh high'];
  const nm18 = ['while not mandatory', 'although slightly frowned upon', 'although forbidden by regulations', 'while not really encouraged', 'although discouraged by teachers', 'while it\'s completely up to them', 'although completely optional', 'while up to their discretion', 'although non-compulsory', 'although slightly disapproved'];
  const nm19 = ['school-colored', 'all sorts of', 'varied', 'matching', 'uniform matching', 'various', 'distinct', 'individual', 'separate', 'corresponding'];
  const nm20 = ['mostly as a form of self expression', 'in some cases purely to be somewhat rebellious', 'often as a way to show their school spirit', 'often because this is the only part of their clothing they have any say over', 'sometimes somewhat as an act of defiance', 'in some cases simply to make a statement', 'often to create a new style within the standard uniform', 'usually to identify themselves as being part of a specific group', 'usually to bring some form of their own identity into the standard uniform', 'mostly because many think the standard uniform\'s too dull', 'many do it to add a personal touch to the otherwise identical uniform', 'some do it simply to avoid being confused for somebody else', 'it\'s an easy way to express themselves at least a little', 'for some it\'s a means to stand out from the crowd', 'often it\'s done through forms of group expression'];
  const nm21 = ['are emblazoned with the school logo', 'have a line around all edges in the school color', 'have two lines around all edges in the school color', 'are adorned with a small school logo', 'have buttons with the school symbol on them', 'have the school symbol on the breast pockets', 'have colored lines around the sleeves', 'have been left plain and undecorated', 'have a line in the school color at the bottom', 'have school colored accents on all edges'];

  const rnd1 = Math.floor(Math.random() * nm1.length);
  const rnd2 = Math.floor(Math.random() * nm2.length);
  const rnd3 = Math.floor(Math.random() * nm3.length);
  const rnd3s = Math.floor(Math.random() * nm3s.length);

  const rnd5 = Math.floor(Math.random() * nm5.length);
  const rnd5b = Math.floor(Math.random() * nm5.length);
  const rnd6 = Math.floor(Math.random() * nm6.length);
  const rnd7 = Math.floor(Math.random() * nm7.length);
  const rnd8 = Math.floor(Math.random() * nm8.length);
  const rnd8b = Math.floor(Math.random() * nm8b.length);
  const rnd9 = Math.floor(Math.random() * nm9.length);
  const rnd9b = Math.floor(Math.random() * nm9.length);
  const rnd10 = Math.floor(Math.random() * nm10.length);
  const rnd10b = Math.floor(Math.random() * nm10.length);
  const rnd11 = Math.floor(Math.random() * nm11.length);
  const rnd12 = Math.floor(Math.random() * nm12.length);
  const rnd12b = Math.floor(Math.random() * nm12.length);
  const rnd13 = Math.floor(Math.random() * nm13.length);
  const rnd13b = Math.floor(Math.random() * nm13.length);
  const rnd14 = Math.floor(Math.random() * nm14.length);
  const rnd14b = Math.floor(Math.random() * nm14.length);
  const rnd14c = Math.floor(Math.random() * nm14.length);
  const rnd15 = Math.floor(Math.random() * nm15.length);
  const rnd16 = Math.floor(Math.random() * nm16.length);
  const rnd16s = Math.floor(Math.random() * nm16s.length);
  const rnd17 = Math.floor(Math.random() * nm17.length);
  const rnd18 = Math.floor(Math.random() * nm18.length);
  const rnd19 = Math.floor(Math.random() * nm19.length);
  const rnd20 = Math.floor(Math.random() * nm20.length);
  const rnd21 = Math.floor(Math.random() * nm21.length);

  const name = `The boys in this school wear ${nm1[rnd1]}, ${nm2[rnd2]} trousers that reach ${nm3[rnd3]} their ${nm3s[rnd3s]}, all of which are colored ${nm5[rnd5]}.`;
  const name2 = ` They're paired with ${nm6[rnd6]}, ${nm14[rnd14]} socks ${nm7[rnd7]}colored ${nm5[rnd5b]}.`;

  const name3 = `${nm8[rnd8]} ${nm8b[rnd8b]} shirt is ${nm9[rnd9]} their trousers and covered with a ${nm10[rnd10]} jacket. A ${nm11[rnd11]} tie ${nm12[rnd12]} the middle of their ${nm13[rnd13]} jacket and is ${nm14[rnd14b]} in ${nm5[rnd5]} and ${nm5[rnd5b]}.`;

  const name4 = `The girls wear ${nm15[rnd15]} skirts in ${nm5[rnd5]} and they ${nm16[rnd16]}. They're paired with ${nm17[rnd17]} socks and ${nm16s[rnd16s]} colored in ${nm5[rnd5b]} and ${nm5[rnd5]} respectively.`;
  const name5 = `Like the boys the girls wear ${nm8b[rnd8b]} shirts, which are usually ${nm9[rnd9b]} their skirts and are covered with a ${nm10[rnd10b]} jacket. They too wear a tie that ${nm12[rnd12b]} the middle of their often ${nm13[rnd13b]} jackets and is ${nm14[rnd14c]} in the same colors.`;

  const name6 = `All jackets ${nm21[rnd21]} and, ${nm18[rnd18]}, many students wear ${nm19[rnd19]} accessoires, ${nm20[rnd20]}.`;


  let result = '';
  result += name;
  result += name2;
  result += '\n';
  result += name3;
  result += '\n';
  result += '\n';
  result += name4;
  result += '\n';
  result += name5;
  result += '\n';
  result += '\n';
  result += name6;
  return result;
}
