// https://cutekaomoji.com/text-generators/flip-text-upside-down/
const upsideDownTransformer ={a:"\u0250",b:"q",c:"\u0254",d:"p",e:"\u01DD",f:"\u025F",g:"\u0183",h:"\u0265",i:"\u1D09",j:"\u027E",k:"\u029E",m:"\u026F",n:"u",r:"\u0279",t:"\u0287",v:"\u028C",w:"\u028D",y:"\u028E",A:"\u2200",C:"\u0186",E:"\u018E",F:"\u2132",G:"\u05E4",H:"H",I:"I",J:"\u017F",L:"\u02E5",M:"W",N:"N",P:"\u0500",T:"\u2534",U:"\u2229",V:"\u039B",Y:"\u2144","1":"\u0196","2":"\u1105","3":"\u0190","4":"\u152D","5":"\u03DB","6":"9","7":"\u3125","8":"8","9":"6","0":"0",".":"\u02D9",",":"'","'":",",'"':",,","`":",","?":"\u00BF","!":"\u00A1","[":"]","]":"[","(":")",")":"(","{":"}","}":"{","<":">",">":"<","&":"\u214B",_:"\u203E","\u2234":"\u2235","\u2045":"\u2046",ɐ:"a",q:"b",ɔ:"c",p:"d",ǝ:"e",ɟ:"f",ƃ:"g",ɥ:"h",ᴉ:"i",ɾ:"j",ʞ:"k",ɯ:"m",u:"n",ɹ:"r",ʇ:"t",ʌ:"v",ʍ:"w",ʎ:"y","\u2200":"A",Ɔ:"C",Ǝ:"E",Ⅎ:"F",פ:"G",H:"H",I:"I",ſ:"J","\u02E5":"L",W:"M",N:"N",Ԁ:"P","\u2534":"T","\u2229":"U",Λ:"V","\u2144":"Y",Ɩ:"1",ᄅ:"2",Ɛ:"3",ᔭ:"4",ϛ:"5","9":"6",ㄥ:"7","8":"8","6":"9","0":"0","\u02D9":".","'":",",",":"'",",,":'"',",":"`","\u00BF":"?","\u00A1":"!","]":"[","[":"]",")":"(","(":")","}":"{","{":"}",">":"<","<":">","\u214B":"&","\u203E":"_","\u2235":"\u2234","\u2046":"\u2045","\u2665":"\u2660","\u2660":"\u2665"};

const memes = {
  'spongebob': (text) => {
    return text.replace(
      /(\w)(\w)?/g,
      (match, p1, p2, p3) => {
        return p1.toLowerCase() + (p2 || '').toUpperCase();
      }
    );
  },
  'clapping': (text) => {
    const clappingText = text.replace(
      /(\w+)/g,
      (m, p1) => (p1 + "").toUpperCase(),
    );
    return clappingText.replace(/\s+/g, '<span>&#x1F44F</span>');
  },
  'alien': (text) => {
    return text.replace(/(.)/g, '$1 ');
  },
  'azn': (text) => {
    return text
      .replace(/boy/g, 'boi')
      .replace(/s(\s|$)/g, 'z$1')
      .replace(/asian/ig, 'azn');
  },
  'upside_down': (text) => {
    return text.replace(/(\w)/g, (m, c) => {
      return upsideDownTransformer[c] || c;
    }).split("").reverse().join("");
  }
};

const memeSectionRefs = {};

const textArea = document.getElementById('main-text');

for (meme in memes) {
  const memeSection = document.createElement('div');
  memeSection.setAttribute('id', meme);
  memeSection.setAttribute('class', 'meme-section');
  memeSectionRefs[meme] = memeSection;
  document.body.appendChild(memeSection);
}

const processText = (text) => {
  for (meme in memes) {
    const section = memeSectionRefs[meme];
    if (section) {
      section.innerHTML = memes[meme](text);
    }
  }
};

textArea.onkeyup = () => processText(textArea.value);
processText(textArea.placeholder);
