let Producto=function(id, nombre, cantidad, precio)
    {
     this.id=id;
     this.nombre=nombre;
    this.cantidad=cantidad;
        this.precio=precio;
        this.infoHtml=function()
        {
            return  "<div><h2>"+ this.id +"</h2>" +
                    "<h3>" + this.nombre + "</h3>" + 
                    "<h4>" + this.cantidad + "</h4>" +
                    "<br>" + this.precio + "</p>" + 
                    "</div>"
        }
    };

let Control=function()
    {    
        this.datos=new Array();
        this.agregar=function(nuevo)
        {
            this.datos.push(nuevo);
        }
        this.buscar=function(codigo)
        { 
            for(let i=0;i<this.datos.length;i++)
                if(this.datos[i].id==codigo)
                    return this.datos[i];
        }
        this.eliminar=function(codigo)
        {
            for(let i=0;i<this.datos.length;i++)
                if(this.datos[i].id==codigo)
                {
                    let posicion=i;
                    if(posicion>-1)
                    {
                        this.datos.splice(posicion, 1)
                        return null;
                    }
                    else
                        return posicion;
                }
        }
        this.listar=function(){
            let res="";
            for(let i=0;i<this.datos.length;i++)
                res += this.datos[i].infoHtml() + "<br>";
            return res;
        }
        
    };

let inventario=new Control();

let btnNuevo=document.getElementById('btnNuevo');
btnNuevo.addEventListener('click',()=>{

    let id, nombre, cantidad, precio;
    id=document.getElementById('IntroId').value;
    
       nombre=document.getElementById('IntroNombre').value;
         cantidad=document.getElementById('IntroCantidad').value;
           precio=document.getElementById('IntroPrecio').value;
            let producto=new Producto(id,nombre,cantidad,precio);
              inventario.agregar(producto);
                document.getElementById('IntroId').value="";
                 document.getElementById('IntroNombre').value="";
                   document.getElementById('IntroCantidad').value="";
                    document.getElementById('IntroPrecio').value="";
                     console.log("Se agrego el producto " + "-" + producto.nombre); 
});

let btnBuscar=document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',()=>{
    let codigo=document.getElementById('IntroId').value;
      let buscado=inventario.buscar(codigo);
        let res=document.getElementById('resultado');
          if (buscado==null)
    {
        document.getElementById('resultado').innerHTML=" ";
           res.innerHTML += "<h2>No se encontro en la busqueda</h2>" 
    }
    else
    {
        document.getElementById('resultado').innerHTML=" ";
           res.innerHTML += "<h2>Si se encontro el producto</h2>" + buscado.infoHtml();
    }  
});

let btnEliminar=document.getElementById('btnEliminar');
btnEliminar.addEventListener('click',()=>{
    let codigo=document.getElementById('IntroId').value;
       let eliminado=inventario.eliminar(codigo);
         let res=document.getElementById('resultado');
           if (eliminado==null)
    {
        document.getElementById('resultado').innerHTML=" ";
           res.innerHTML += "<h2>Se elimino Correctamente el Producto</h2>" 
    }
    else
    {
        document.getElementById('resultado').innerHTML=" ";
        res.innerHTML += "<h2>el Producto no existe o ya se elimino</h2>";
    }
});

let btnListar=document.getElementById('btnListar');
btnListar.addEventListener('click',()=>{

    document.getElementById('resultado').innerHTML=" ";
      let res=document.getElementById('resultado');
         res.innerHTML+="<h2>Listado de Productos</h2>" + inventario.listar();
});
