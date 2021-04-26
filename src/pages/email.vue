<template>
  <div class="container">
  <Header></Header>
  <Content></Content>
  <Card></Card>
  <Footer></Footer>
  </div>
</template>

<script>


import '../styles/email.css'
import '../styles/index.css'

import Header from '../components/emailPage/Header'
import Content from '../components/emailPage/Content'
import Card from '../components/emailPage/Card'
import Footer from '../components/emailPage/Footer'


  
export default {

    name: 'EmailPage',
 
  data () {
    return {
    }
  },

  components: {
   Header,
   Content,
   Card,
   Footer
  }
}
</script>