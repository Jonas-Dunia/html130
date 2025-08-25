<!-- src/views/Accordion.vue -->
<template>
  <div>
    <h2>FAQ Accordion</h2>
    <b-img src="/img/accordion.jpg" alt="Accordion illustration" class="demo-img my-3" fluid />

    <div class="mt-3" role="tablist">
      <b-card v-for="(answer, question, idx) in faqs" :key="`faq-${idx}`" no-body class="mb-2">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="`faq-collapse-${idx}`" variant="link" class="text-left">
            {{ question }}
          </b-button>
        </b-card-header>
        <b-collapse :id="`faq-collapse-${idx}`" accordion="faq-accordion" role="tabpanel" :visible="idx === 0">
          <b-card-body>{{ answer }}</b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionPage',
  data: () => ({
    faqs: {
      'Question 1': 'Answer to question 1.',
      'Question 2': 'Answer to question 2.'
    }
  })
}
</script>

<style scoped>
</style>