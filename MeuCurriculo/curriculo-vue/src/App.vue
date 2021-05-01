<template>
  <div id>
    <Header
    name="Elisane Camila Dos Santos Pagani"
        idade="24"
        civil="casada"
        naturalidade="Cabixi-RO"
        nacionalidade="Brasil"
        />
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'App',
  components:  { Header},
  
}
</script>
<style>
body{
  margin: 0;
  background-color: #f8f7f7;
}
</style>
