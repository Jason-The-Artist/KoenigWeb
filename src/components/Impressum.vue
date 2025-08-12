<style scoped>
.impressum { max-width: 800px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; background: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
.impressum h1 { font-size: 1.8rem; margin-bottom: 1rem; }
.impressum h2 { font-size: 1.2rem; margin-top: 1.5rem; }
.impressum p, .impressum li { line-height: 1.5; }
.actions { margin-top: 20px; display: flex; gap: 10px; }
.actions button { padding: 8px 14px; border: 1px solid #ccc; background: #f9f9f9; border-radius: 4px; cursor: pointer; }
.actions button:hover { background: #f0f0f0; }
.copied-msg { color: green; margin-top: 0.5rem; }
</style>

<template>

  <Nav/>

  <div style="height: 100px"></div>

  <section class="impressum">
    <h1>Impressum</h1>

    <h2>Angaben gemäß § 5 TMG</h2>
    <p>
      Alexander König (Inhaltlich verantwortlich)<br />
      In der Lache 44<br />
      34295 Edermünde
    </p>

    <p>
      E‑Mail: <a href="mailto:info-handwerker.akoenig@gmx.de">info-handwerker.akoenig@gmx.de</a><br />
      Telefon: +49 173 3629360
    </p>

    <h2>DE STN</h2>
    <p>024 837 01714</p>

    <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
    <p>Alexander König (siehe Kontaktdaten oben)</p>

    <h2>Hinweis zur Online‑Streitbeilegung gemäß Art. 14 Abs. 1 ODR‑VO</h2>
    <p>
      Die Europäische Kommission stellt eine Plattform zur Online‑Streitbeilegung (OS) bereit, die Sie unter
      <a href="https://consumer-redress.ec.europa.eu/index_de" target="_blank" rel="noopener noreferrer">https://consumer-redress.ec.europa.eu/index_de</a>
      finden.
    </p>

    <h2>Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)</h2>
    <p>Ich nehme nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.</p>
  </section>

  <div style="height: 50px"></div>

  <Footer/>

</template>


<script>


import Footer from "@/components/views/Footer.vue"
import Nav from "@/components/views/Nav.vue"

export default {
  name: "Impressum",
  components: {Nav, Footer},
  data() {
    return {
    };
  },

  props: {
  },

  created() {
  },

  mounted() {


  },


  methods: {


  }
}
</script>