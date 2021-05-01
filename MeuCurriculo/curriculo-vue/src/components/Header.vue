<template>
  <div class="container">
    <div class="bloco">
      <div id="dados">
        <img src="../img/perfil.jpg" alt="perfil" />
        <h1>{{ name }}</h1>
      </div>

      <div class="info">
        <h2>Informações</h2>
        <p>Idade: {{ idade }} anos</p>
        <p>Estado civil: {{ civil }}</p>
        <p>Naturalidade: {{ naturalidade }}</p>
        <p>Nacionalidade: {{ nacionalidade }}</p>
      </div>

      <div class="MeusDados">
        <div class="contato">
          <h3>Telefone: <a href="tel:+5567999999">00 00000-0000</a> </h3>
        </div>

        <div class="contato">
          <h3>
            Linkedin:
            <a href="https://www.linkedin.com/in/elisane-camila-dos-santos-pagani-31778a1ba/" target="_blank">{{name}}</a>
          </h3>
        </div>

        <div class="contato">
          <h3>Email: <a href="mailto:elisanecamila20@gmail.com">elisanecamila20@gmail.com</a></h3>
        </div>

         <div class="contato">
          <h3>Github: <a href="https://github.com/elisanecamilapagani" target="_blank">{{name}}</a></h3>
        </div>
      </div>
    </div>

    <div class="segundo_bloco">
      <div class="formacao">
        <h1>Elisane Camila</h1>
        <p>
          Estudante de Tecnologia em Sistemas para Internet no Instituto Federal
          do Mato Grosso do Sul( IFMS). Procurando sempre evoluir meus conhecimentos na aria de programação, com foco em UX Desgner. 
        </p>
      </div>

      <div class="formacao">
        <h1>Formação</h1>
        <h3>
            Tecnica em Redes de Computadores - SENAI Vilhena. (2015-2017)<br>
          Cursando Tecnologia em Sistemas para Internet IFMS - Mato Grosso do Sul.<br>
          (2019-2021)
        </h3>
    
      </div>

      <div class="formacao">
        <h1>Cursos - Complementares</h1>
        <p>UX Designer - Leandro Rezende</p>
        <p>JavaScript - Udemy</p>
        <p>Html e Css - Udemy</p>
      </div>

      <div class="formacao">
        <h1>Tecnologias mais utilizadas</h1>
        <p>Html 5 || Css3 || Vue Js || React Js || JavaScript</p>
      </div>

      <div class="formacao">
        <h1>Experiência</h1>
        <p>Não possui experiência </p>
      </div>

      <div class="formacao">
        <h1>Idiomas</h1>
        <h3>Inglês: Compreende</h3>
        <p>Razoavelmente, Fala Pouco, Lê</p>
        <p>Razoavelmente, Escreve Pouco.</p>
        <h3>Português: Compreende Bem</h3>
        <p>Fala Bem, Lê Bem, Escreve Bem</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_Curriculo",
  props: {
    name: String,
    idade: Number,
    civil: String,
    naturalidade: String,
    nacionalidade: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  color:black;
  padding: 2rem;
  display: flex;
}

.menu {
  border-bottom: 1px solid #ccc;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120%;
  font-family: Arial, Helvetica, sans-serif;


}

.menu a:first-child {
  margin-right: 2rem;
}
a:link 
{ 
 text-decoration:none; 
 color: rgb(42, 42, 42);
} 
.menu li {
  padding-bottom: 5px;
  
}

.menu li a:hover {
  padding-bottom: 5px;
  border-bottom: white 4px solid;
  transition: color 300ms;
text-decoration: none;

   
}

.bloco {
  margin: 2rem;
  font-size: 120%;
}

.bloco #dados img {
  width: 22rem;
  border-radius: 1rem;
}

.bloco #dados h1 {
  padding: 1rem;
  color: rgb(67, 67, 117);
  text-align: center;
}

.bloco .info {
  margin: 2rem 1rem;
  font-size: 100%;
  text-align: left;
  list-style: none;
  

}

.bloco .info h2 {
  margin: 2rem 0.5rem;
  font-family: sans-serif;
  color:black;
  font-weight: bold;
}

.bloco .info p {
  margin: 0.5rem;
  color: black;
}

.bloco .MeusDados {
  margin: 4rem 0.5rem;
  font-size: 80%;
  text-align: left;

}
.bloco .MeusDados .contato {
  margin: 1rem;
  color:rgb(67, 67, 117);

}

.bloco .MeusDados .contato strong,
a {
  color:black;
}

.segundo_bloco {
  margin: 2rem;
  font-size: 120%;
  text-align: center;
}

.segundo_bloco .formacao {
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #ccc;
}

.segundo_bloco .formacao h1 {
  color:rgb(67, 67, 117);
  padding: 1rem;
  font-weight: bold;
  text-align: left;
}

.segundo_bloco .formacao p {
  text-align: justify;
  padding: 1rem;
  color:black;
}

.segundo_bloco .formacao h3{
  padding: 1rem;
  font-weight: bold;
  text-align: left;
} 

</style>
