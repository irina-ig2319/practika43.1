const source = document.getElementById('myID').innerHTML;const template = Handlebars.compile(source);const customValues = {
    name: 'ирина',
  };
  const htmlInput = template(customValues);
  document.getElementById('htmlSection').innerHTML = htmlInput;