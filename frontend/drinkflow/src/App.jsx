
import drinks from "./data/drinks.js";
import banner from "./assets/banner-drink-flow-4.png";
import {useState} from "react";


function App() {

  const [selectedCategory, setSelectedCategory] = useState ("todos");
 
  const categories = [
    {id: "todos", name: "Todos"},
    {id: "refrigerantes", name: "Refrigerantes"},
    {id: "suco-natural", name: "Suco natural"},
    {id: "suco-de-polpa", name: "Suco de polpa"},
    {id: "Agua Mineral", name:" Água Mineral"},
    {id: "Chá gelado", name: "Chá gelado"},

  ];

  const filteredDrinks = 
  selectedCategory ===  "todos"
    ? drinks
    : drinks.filter(
    (drink) => drink.category === selectedCategory
  );

 

  return (

    <main className="app-layout">

      <aside className= "sidebar">
       <div className= "sidebar-brand">
       <h2>DRINK FLOW</h2>
       </div>

       <nav className="sidebar-nav">
       <a href="#inicio">Início</a>
       <a href="#cardapio">Cardápio</a>
       <a href="#pedidos">Pedidos</a> 
       <a href="#configuracoes">Configurações</a>
       <a href="#suporte">Suporte</a>

       </nav>

      <div className="sidebar-footer"> 
        <p>Qualidade em cada detalhe</p>
      </div>

       </aside>



      <div className= "main-content">  

      
      <section className="hero"> 
        <img src={banner} alt="suco de laranja" />
      </section>
       

       <section className="menu-section">
          <h2>Pedidos de bebidas</h2>

        <div className="menu-section">
          {categories.map((category) => (
            <button
            key={category.id}
            type= "button"
            className={
              selectedCategory === category.id
              ? "category active"
              : "category"
            }
            onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>

          ))}

            
        </div>

  
        
        <label htmlFor="bebidas">Escolha a bebida</label>



        <select name="bebidas" id="bebidas">

          <option value=""> Selecione a bebida</option>
        

          {drinks.map((drink)=>(
            <option key= {drink.id} value={drink.id}>
              {drink.name}
            </option>

          ))}
         
        </select>


       </section>

       </div>

    </main>
   
    
  )
}

export default App;

