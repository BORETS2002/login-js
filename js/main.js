const LoginTokin = localStorage.getItem("token")

if (!LoginTokin) {
  window.location.href = "/login.html"
}

const elFrag = new DocumentFragment()
const list = document.querySelector(".list")
function DomRender(data) {
  data.data.forEach( item => {
    const elTemp = document.querySelector(".tempJs").content.cloneNode(true)
    elTemp.querySelector(".imgs").src = item.avatar
    elTemp.querySelector(".big-name").textContent = ` ${item.first_name}  ${item.last_name} `
    elTemp.querySelector(".href").href = `mailto:${item.email}`
    elTemp.querySelector(".href").textContent =  item.email
    elFrag.appendChild(elTemp)
  });
  list.appendChild(elFrag)
}


async function RenderList(link) {
  
  try {
    
    const res = await fetch(link)
    const data = await res.json() 
  
    DomRender(data)

  } 
  
  
  catch (error) {
    console.log(error);  
  }
}

RenderList("https://reqres.in/api/users?page=1")
