let i_btn = document.querySelector("#i_btn");
let s_btn = document.querySelector("#s_btn");
i_btn.addEventListener("input", (e) => {
  if(e.target.value.trim()){
    s_btn.disabled = false;
  }
  else{
    s_btn.disabled = true;
  }
})