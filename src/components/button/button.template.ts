export const template = `
#{buttonTag}&attributes(btnAttributes)
  if (!withArrow)
    span.button__inner(class=modifier)= innerText
  else
    span.button__arrow`;
