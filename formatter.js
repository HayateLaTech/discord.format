function format(s) {

  // BOLD
  var boldRE = /(\*{2})([^(**)]+)(\*{2})/gm;

  s = s.replace(boldRE, "<b>$2</b>");

  // ITALIC
  var italicRE = /(\*)([^(*)]+)(\*)/gm;

  s = s.replace(italicRE, "<i>$2</i>");

  // UNDERLINE
  var underlinedRE = /(\_{2})([^(__)]+)(\_{2})/gm;

  s = s.replace(underlinedRE, "<u>$2</u>");

  // STRIKETHROUGH
  var strikethroughRE = /(\~{2})([^(~~)]+)(\~{2})/gm;

  s = s.replace(strikethroughRE, "<s>$2</s>");

  return s;
}
