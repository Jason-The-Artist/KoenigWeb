<style scoped>
.privacy-policy { max-width: 800px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; background: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
.privacy-policy h1 { font-size: 1.8rem; margin-bottom: 1rem; }
.privacy-policy h2 { font-size: 1.2rem; margin-top: 1.5rem; }
.privacy-policy p, .privacy-policy li { line-height: 1.5; }
.privacy-policy ul { margin: 0 0 1rem 1.2rem; }
.actions { margin-top: 20px; display: flex; gap: 10px; }
.actions button { padding: 8px 14px; border: 1px solid #ccc; background: #f9f9f9; border-radius: 4px; cursor: pointer; }
.actions button:hover { background: #f0f0f0; }
.notice { font-size: 0.85rem; color: #555; margin-top: 1.5rem; }
.copied-msg { color: green; margin-top: 0.5rem; }
</style>

<template>

  <Nav/>

  <div style="height: 100px"></div>

  <section class="privacy-policy">
    <h1>Datenschutzerklärung</h1>

    <p>Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir über das Kontaktformular erheben, wofür wir sie verwenden und welche Rechte Sie in Bezug auf Ihre Daten haben.</p>

    <h2>1. Verantwortlicher</h2>
    <p>
      <strong>Handwerker Alexander König</strong><br />
      In der Lache 44<br />
      34295 Edermünde, Deutschland<br />
      Telefon: +49 173 3629360<br />
      E‑Mail: <a :href="`mailto:info-handwerker.akoenig@gmx.de`">info-handwerker.akoenig@gmx.de</a>
    </p>

    <h2>2. Welche Daten wir erheben</h2>
    <p>Wenn Sie unser Kontaktformular nutzen, erheben wir ausschließlich die folgenden Daten, die Sie freiwillig eingeben:</p>
    <ul>
      <li>Vorname</li>
      <li>Nachname</li>
      <li>E‑Mail‑Adresse</li>
      <li>Telefonnummer</li>
      <li>Ihr Anliegen (Nachrichtenfeld)</li>
    </ul>

    <h2>3. Zweck und Rechtsgrundlage der Verarbeitung</h2>
    <p>Wir verwenden die Daten ausschließlich, um Ihre Anfrage zu bearbeiten und mit Ihnen in Kontakt zu treten. Die Verarbeitung erfolgt auf Basis von <strong>Art. 6 Abs. 1 lit. b</strong> DSGVO (vorvertragliche Maßnahmen / Erfüllung eines Vertrags) oder, falls kein Vertrag zustande kommt, auf Basis von <strong>Art. 6 Abs. 1 lit. f</strong> DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).</p>

    <h2>4. Speicherdauer</h2>
    <p>Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Wegfall des Zwecks werden die Daten gelöscht.</p>

    <h2>5. Weitergabe an Dritte</h2>
    <p>Eine Weitergabe Ihrer Daten an Dritte findet nicht statt, außer wir sind gesetzlich dazu verpflichtet.</p>

    <h2>6. Cookies und Tracking</h2>
    <p>Diese Website verwendet <strong>keine Cookies</strong> und keine Tracking‑Technologien.</p>

    <h2>7. Ihre Rechte</h2>
    <ul>
      <li>Auskunft über die gespeicherten Daten (Art. 15 DSGVO)</li>
      <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
      <li>Löschung (Art. 17 DSGVO)</li>
      <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
      <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
      <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
    </ul>

    <h2>8. Sicherheit</h2>
    <p>Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, unbefugtem Zugriff oder Missbrauch zu schützen. Absolute Sicherheit lässt sich jedoch nicht garantieren.</p>

    <h2>9. Kontakt für Datenschutzanfragen</h2>
    <p>
      <strong>Handwerker Alexander König</strong><br />
      E‑Mail: <a :href="`mailto:info-handwerker.akoenig@gmx.de`">info-handwerker.akoenig@gmx.de</a><br />
      Telefon: +49 173 3629360
    </p>

    <p class="notice">Stand: August 2025. Diese Datenschutzerklärung gilt nur für das beschriebene Kontaktformular und die genannten Daten.</p>
  </section>

  <div style="height: 50px"></div>

  <Footer/>
</template>


<script>


import Footer from "@/components/views/Footer.vue"
import Nav from "@/components/views/Nav.vue"

export default {
  name: "Datenschutz",
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