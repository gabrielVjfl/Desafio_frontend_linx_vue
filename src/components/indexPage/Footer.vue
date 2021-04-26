<template>
  <div>
    <div class="container-divisions">
      <hr class="hr" />

      <h4 class="text-divisions">Compartilhe a novidade</h4>
      <hr class="hr" />
    </div>

    <section>
      <p class="title-friends-share">
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>

      <form @submit.prevent="ValidationForm()" name="formShare">
        <div class="form-share">
          <label class="label-share" for="nameFriend"
            >Nome do seu amigo:
            <input
            v-model="name"
              type="text"
              id="nameFriend"
              class="inputNameShare"
              name="name"
              placeholder="Digite o nome"
            />
          </label>

          <label class="label-share" for="emailFriend"
            >Email dele:

            <input
            v-model="email"
              type="email"
              class="inputEmailShare"
              id="emailFriend"
              name="email"
              required
              placeholder="Digite o e-mail do seu amigo"
            />
          </label>

          <br />
        </div>
        <button class="btn-form-share" type="submit" >Enviar Agora</button>
      </form>
    </section>

    <div class="container-footer">
      <footer>
        <span class="text-footer"
          >Testando suas habilidades em HTML,CSS E JAVASCRIPT</span
        >
        <span class="text-footer">Linx Impulse</span>
        <span class="text-footer">2019</span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
      return {
     name: '',
     email: '',
    }
    },
    
    methods: {
      ValidationForm() {
var regexEmail = /\S+@\S+\.\S+/;
  let emailValid = regexEmail.test(this.email)

  if (this.name == "") {
    alert("Campo nome vázio!");

    return false;
  }
  if (this.name.length <= 2) {
    alert("O nome precisa ter mais do que 2 letras!");
    return false;
  }
  if (this.email == "") {
    alert("Email vázio!");
    return false;
  }
  if (emailValid == false) {
    alert("Email inválido!");
    return false;
  }
        else {
          this.name = ""
          this.email = ""
          alert('Ok')
        }
      }
    }

  
};
</script>

