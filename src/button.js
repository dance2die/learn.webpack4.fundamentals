const makeButton = name => {
  const btn = document.createElement('button');
  btn.innerHTML = name;
  btn.onclick = () => alert(name);

  return btn;
};

export default makeButton;
