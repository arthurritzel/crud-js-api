
//cadastrar----------------------------------------------------------
document.querySelector("form").addEventListener("submit", (e)=>{
    const task = document.querySelector("#task").value
    const situ = document.querySelector("#urg").value
    e.preventDefault();
    console.log(task, situ)
    if(task && situ){
        async function dado(){
            var respone = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "title": task,
                    "situacao": situ
                })
            })
            
            var responseJSON = await respone.json();
            
        }
        dado();
        document.querySelector("#task").value = ""
        document.querySelector("#urg").value = ""
        exibir();
    }else{
    alert("campo vazio");
    }
})




//exibir-----------------------------------------------------------
async function exibir(){
    var exi = await fetch("http://localhost:3000/tasks", {
        method: "GET"
    })
    var exiJSON = await exi.json();
    
    var div = document.querySelector("#tarefas");
    div.innerHTML = `
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">tarefa</th>
            <th scope="col">urgencia</th>
            </tr>
        </thead>
        <tbody id="tr" class="table-group-divider">
            
        </tbody>
        </table> `
    
    exiJSON.forEach(element => {
        var div2 = document.createElement("tr");
        div2.innerHTML = `
            <th>${ element.id }</th>
            <td id="title${ element.id }">${ element.title }</td>
            <td id = "situ${ element.id }">${ element.situacao }</td>
            <td id="btn_atu${ element.id }"><button id="btn_atu" class="btn btn-primary" value="${element.id}">Atualizar</button></td>
            <td id="btn_del${ element.id }"><button id="btn_del" class="btn btn-danger" value="${element.id}">Deletar</button></td>
        `
        document.querySelector("#tr").appendChild(div2)
    });


        //deletar----------------------------------------
    var btns = document.querySelectorAll("#btn_del")
    btns.forEach((btn) =>
        btn.addEventListener('click', (event) => {
            var url = "http://localhost:3000/tasks/" + event.currentTarget.value
            
            async function delet(){
                var deleres = await fetch(url, {
                    method: "DELETE"
                })
                var deleresJSON = await deleres.json()
            }

            if(confirm("Tem certeza que deseja deletar?")){
                delet()
                exibir();
            }
        })
    );
    
    var btnsatu = document.querySelectorAll("#btn_atu")
    btnsatu.forEach((btn) =>
        btn.addEventListener('click', (event) => {
            var id = event.currentTarget.value
            var txt = document.querySelector("#title" + id)
            var sele = document.querySelector("#situ" + id)
            var val = txt.innerText
            var vals = sele.innerText
            var btnatu = document.querySelector(`#btn_atu${id}`)
            btnatu.innerHTML = `<button id="btn_conf" class="btn btn-success">Confirmar</button>`
            var btmdel = document.querySelector(`#btn_del${id}`)
            btmdel.innerHTML = `<button id="btn_can" class="btn btn-danger">Cancelar</button>`
            
           txt.innerHTML = `<input id="newtask" type="text" class="form-control" placeholder="${txt.innerText}" aria-label="First name">`
           document.querySelector("#newtask").value = val
            sele.innerHTML = `<select  class="form-select" id="newurg">
            <option value="">Defina a urgencia</option>
            <option value="urgente">Urgente</option>
            <option value="Média urgencia">Média urgencia</option>
            <option value="pouco urgente">pouco urgente</option>
            <option value="tranquilo">tranquilo</option>
            </select>`
            document.querySelector("#newurg").value = vals
            document.querySelector("#btn_conf").addEventListener("click", () =>{
                var newtask = document.querySelector("#newtask").value
                var newurg = document.querySelector("#newurg").value
                if(newtask && newurg){
                    async function atu(){
                        var atua = await fetch("http://localhost:3000/tasks/" + id, {
                            method: "PUT",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify({
                                "id": id,
                                "title": newtask,
                                "situacao": newurg
                            })
                        })
                        var atuJSON = await atua.json()
                        
                    }

                        atu();
                        exibir();
                }else{
                    exibir();
                }
            })
            document.querySelector("#btn_can").addEventListener("click", () =>{
                exibir();
            })
        })
    );
    
}

exibir();