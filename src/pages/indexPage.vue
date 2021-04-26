<template>
  <div class="container">
   <Header></Header>
   <Content></Content>
   <Card></Card>
   <Footer></Footer>
  </div>
</template>

<script>

import '../styles/index.css'
import '../styles/email.css'
import Header from '../components/indexPage/Header'
import Content from '../components/indexPage/Content'
import Card from '../components/indexPage/Card'
import Footer from '../components/indexPage/Footer'
export default {
  methods: {
  },
    name: 'IndexPage',
    components: {
    Header,
    Content,
    Card,
    Footer
    },
  data () {
    return {
    }
  },
 
  //components: {
  //  HelloWorld
 // }
}
</script>
